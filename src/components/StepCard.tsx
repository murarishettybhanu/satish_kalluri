import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function StepCard({
  number,
  title,
  description,
  icon,
  delay = 0,
}: StepCardProps) {
  return (
    <div
      className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-poppins font-bold text-xl shadow-lg">
        {number}
      </div>
      <div className="mb-4 text-gold">{icon}</div>
      <h3 className="font-poppins font-bold text-xl text-navy mb-3">{title}</h3>
      <p className="font-inter text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
