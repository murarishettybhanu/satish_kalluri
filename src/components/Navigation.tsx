import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Work With Me', path: 'work' },
    { name: 'Results', path: 'results' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || currentPage !== 'home' ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
            >
              <img
                src="/sathish-logo-2048x670.png"
                alt="Sathish Kalluri Logo"
                className="h-12 object-contain"
              />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`font-inter font-medium text-sm relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded px-2 py-1 ${
                    currentPage === link.path
                      ? 'text-gold'
                      : 'text-white hover:text-gold'
                  }`}
                >
                  {link.name}
                  {currentPage === link.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold animate-slide-in-left" />
                  )}
                </button>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                Book Call
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-navy h-full pt-24 px-6 animate-fade-in">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`font-poppins font-semibold text-xl text-left transition-colors duration-200 ${
                    currentPage === link.path ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  window.open('https://wa.me/919876543210', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-6"
              >
                Book Free Clarity Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
