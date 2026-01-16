import { Video, Users, Sparkles } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';

export default function WorkWithMe() {
  const handleJoin = (packageName: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi! I'm interested in the ${packageName} package`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6 animate-fade-in-up">
            Choose Your Video Confidence Path
          </h1>
          <p className="font-inter text-xl text-cream max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Whether you want to learn at your own pace, get group support, or receive
            personalized 1:1 coaching, there's a perfect program for you
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Starter Course"
              price="₹9,999"
              duration="Self-paced learning"
              features={[
                'Complete video confidence curriculum',
                '20+ plug-and-play video templates',
                'Camera presence training modules',
                'Content creation frameworks',
                'Lifetime access to course materials',
                'Email support',
                'Community access',
              ]}
              onCTA={() => handleJoin('Starter Course')}
            />

            <PricingCard
              title="Group Coaching"
              price="₹29,999"
              duration="12 weeks program"
              features={[
                'Everything in Starter Course',
                'Weekly live group coaching calls',
                'Private community with other coaches',
                'Live Q&A sessions',
                'Accountability partnerships',
                'Monthly content reviews',
                'Bonus: Recording setup guide',
                'Priority email support',
              ]}
              highlighted={true}
              onCTA={() => handleJoin('Group Coaching')}
            />

            <PricingCard
              title="1:1 Coaching"
              price="₹89,999"
              duration="16 weeks personalized"
              features={[
                'Everything in Group Coaching',
                'Bi-weekly 1:1 strategy sessions',
                'Custom video content system',
                'Personalized feedback on videos',
                'Direct WhatsApp access',
                'Brand positioning consultation',
                'Advanced scripting techniques',
                'VIP support',
              ]}
              onCTA={() => handleJoin('1:1 Coaching')}
            />
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-navy mb-6 text-center">
              Not Sure Which Program to Choose?
            </h2>
            <p className="font-inter text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Book a free 30-minute clarity call to discuss your goals and find the perfect
              program for your needs. No pressure, no obligation.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="bg-gold text-navy px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Book Free Clarity Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4 text-center">
            What Students Are Saying
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Real transformations from coaches who took action
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The Starter Course gave me the foundation I needed. The templates alone are worth 10x the price!"
              author="Vikram Patel"
              role="Online Fitness Coach"
              result="Created 15 videos in first month"
              delay={0}
            />
            <TestimonialCard
              quote="Group coaching accountability changed everything. Having other coaches on the same journey kept me consistent."
              author="Meera Singh"
              role="Wellness Coach"
              result="3x Instagram engagement"
              delay={200}
            />
            <TestimonialCard
              quote="The 1:1 coaching was transformational. Sathish helped me find my unique voice and build a video system that actually works."
              author="Arjun Reddy"
              role="Career Coach"
              result="₹5L+ revenue in 90 days"
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-12 text-center">
            What's Included in Every Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
              <Video className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-3">Proven Templates</h3>
              <p className="font-inter text-cream">
                20+ video scripts and frameworks tested with hundreds of coaches. Just fill
                in your details and record.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-3">Expert Coaching</h3>
              <p className="font-inter text-cream">
                Learn from 8+ years of branding experience and proven methods that work in
                the Indian market.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-3">Ongoing Support</h3>
              <p className="font-inter text-cream">
                Get help when you need it through community access, email support, or direct
                WhatsApp messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gold to-[#b8860b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="font-inter text-xl text-navy/80 mb-8">
            Choose your program above or book a free call to discuss your goals
          </p>
          <button
            onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            className="bg-navy text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Let's Talk
          </button>
        </div>
      </section>
    </div>
  );
}
