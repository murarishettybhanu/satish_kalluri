import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  result?: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  result,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="w-10 h-10 text-gold mb-4" />
      <p className="font-inter text-gray-700 mb-6 leading-relaxed">{quote}</p>
      {result && (
        <div className="bg-cream rounded-lg p-4 mb-4">
          <p className="font-poppins font-semibold text-navy">{result}</p>
        </div>
      )}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-poppins font-semibold text-navy">{author}</p>
        <p className="font-inter text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
