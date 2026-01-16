import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  highlighted?: boolean;
  onCTA: () => void;
  ctaText?: string;
}

export default function PricingCard({
  title,
  price,
  duration,
  features,
  highlighted = false,
  onCTA,
  ctaText = 'Join Now',
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
        highlighted
          ? 'bg-navy text-white shadow-2xl scale-105 border-4 border-gold'
          : 'bg-white shadow-lg hover:shadow-xl'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full font-poppins font-bold text-sm">
          MOST POPULAR
        </div>
      )}
      <div className="mb-6">
        <h3 className={`font-poppins font-bold text-2xl mb-2 ${highlighted ? 'text-white' : 'text-navy'}`}>
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className={`font-poppins font-bold text-4xl ${highlighted ? 'text-gold' : 'text-navy'}`}>
            {price}
          </span>
        </div>
        <p className={`font-inter text-sm mt-2 ${highlighted ? 'text-cream' : 'text-gray-600'}`}>
          {duration}
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-gold' : 'text-gold'}`} />
            <span className={`font-inter ${highlighted ? 'text-cream' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'outline'}
        size="lg"
        fullWidth
        onClick={onCTA}
      >
        {ctaText}
      </Button>
    </div>
  );
}
