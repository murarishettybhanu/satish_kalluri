import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const checkPrefersReducedMotion = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!checkPrefersReducedMotion()) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const checkPrefersReducedMotion = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (checkPrefersReducedMotion() || elements.length === 0) return;

    const observer = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [elements, options]);

  return { setElements, entries };
}
