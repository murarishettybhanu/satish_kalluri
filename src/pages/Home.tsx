import { Video, Target, Zap, TrendingUp, CheckCircle, Award, Users, Clock } from 'lucide-react';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import StepCard from '../components/StepCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const scrollY = useScrollAnimation();

  const handleCTA = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a2639 0%, #0d1520 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a017 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 animate-fade-in-up">
            Record 3 client-getting videos per week{' '}
            <span className="text-gold">without camera fear</span>
          </h1>
          <p className="font-inter text-lg sm:text-xl text-cream mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Coaching + templates to help you record, post, and grow your personal brand
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button variant="primary" size="lg" onClick={handleCTA}>
              Book Free Clarity Call
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('work')}>
              See Programs
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-cream animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="font-inter text-sm">8+ years branding</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-gold" />
              <span className="font-inter text-sm">NexT Marketing founder</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              <span className="font-inter text-sm">100+ coaches helped</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-6">
              The Problem
            </h2>
            <p className="font-inter text-xl text-gray-700 leading-relaxed">
              Most coaches freeze on camera and lose clients to confident creators who show
              up consistently. You know video works, but camera anxiety keeps you stuck
              scrolling instead of recording.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4">
              The Solution: 3-Step Video Confidence System
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              A proven process to go from camera-shy to confident creator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Build Confidence"
              description="Overcome camera anxiety with personalized coaching and proven mindset techniques"
              icon={<Target className="w-12 h-12" />}
              delay={0}
            />
            <StepCard
              number={2}
              title="Create Content"
              description="Use plug-and-play templates to record client-getting videos in minutes"
              icon={<Video className="w-12 h-12" />}
              delay={200}
            />
            <StepCard
              number={3}
              title="Grow Your Brand"
              description="Post consistently and attract ideal clients through strategic video content"
              icon={<TrendingUp className="w-12 h-12" />}
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
              Real Results from Real Coaches
            </h2>
            <p className="font-inter text-lg text-cream max-w-2xl mx-auto">
              See how trainers and coaches transformed their businesses with video
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I went from avoiding camera to posting 3 videos a week. My client inquiries doubled in just 30 days!"
              author="Priya Sharma"
              role="Fitness Coach, Mumbai"
              result="2x client inquiries in 30 days"
              delay={0}
            />
            <TestimonialCard
              quote="Sathish's templates made video creation so easy. I finally feel confident showing up online consistently."
              author="Rajesh Kumar"
              role="Business Coach, Bangalore"
              result="50+ videos posted, zero anxiety"
              delay={200}
            />
            <TestimonialCard
              quote="The mindset coaching was game-changing. I now see video as my secret weapon, not something to fear."
              author="Anita Desai"
              role="Yoga Instructor, Delhi"
              result="From 0 to 10K followers in 90 days"
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4">
              How It Works
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Your journey from camera-shy to confident video creator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: 'Book Free Call',
                description: 'Schedule a clarity call to discuss your goals and challenges',
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Get Custom Plan',
                description: 'Receive a personalized roadmap for your video confidence journey',
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Start Creating',
                description: 'Use proven templates and coaching to record your first videos',
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Grow & Scale',
                description: 'Post consistently and watch your client base expand',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gold mb-4 flex justify-center">{step.icon}</div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to Overcome Camera Fear?
          </h2>
          <p className="font-inter text-xl text-cream mb-8">
            Join 100+ coaches who transformed their businesses with video confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={handleCTA}>
              Book Your Free Clarity Call
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('work')}>
              Explore Programs
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-cream text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>30-minute free call</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>No obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold" />
              <span>Limited spots available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
