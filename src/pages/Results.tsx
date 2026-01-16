import { TrendingUp, Users, Video, Award } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

export default function Results() {
  const caseStudies = [
    {
      name: 'Priya Sharma',
      role: 'Fitness Coach, Mumbai',
      before: 'Camera-shy gym trainer with 200 Instagram followers',
      after: '3 videos/week, 5K followers, 2x client bookings',
      timeline: '90 days',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial:
        "I was terrified of recording myself. Sathish's system made it so simple. Now my clients find ME through my videos!",
      metrics: ['2x client inquiries', '5K followers gained', '25 videos posted'],
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Coach, Bangalore',
      before: 'Inconsistent posting, no video content strategy',
      after: 'Confident video creator with predictable client flow',
      timeline: '120 days',
      image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial:
        'The templates eliminated my blank page anxiety. I now have a content system that actually works.',
      metrics: ['50+ videos posted', '3x engagement rate', '₹8L revenue'],
    },
    {
      name: 'Anita Desai',
      role: 'Yoga Instructor, Delhi',
      before: 'Zero video presence, relying only on referrals',
      after: 'Personal brand with 10K followers and workshop bookings',
      timeline: '180 days',
      image: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial:
        'Video transformed my business. I went from waiting for referrals to having a waitlist.',
      metrics: ['10K followers', '100+ videos', 'Workshops fully booked'],
    },
  ];

  const stats = [
    { number: '100+', label: 'Coaches Transformed', icon: <Users className="w-8 h-8" /> },
    { number: '8+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '1000+', label: 'Videos Created', icon: <Video className="w-8 h-8" /> },
    { number: '3x', label: 'Avg. Growth Rate', icon: <TrendingUp className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6 animate-fade-in-up">
            Real Results from Real Coaches
          </h1>
          <p className="font-inter text-xl text-cream max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            See how trainers and coaches just like you overcame camera fear and built
            thriving businesses through video
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
                <div className="font-poppins font-bold text-4xl text-navy mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4 text-center">
            Success Stories
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            In-depth case studies showing the transformation journey
          </p>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="font-poppins font-bold text-2xl text-navy mb-2">
                        {study.name}
                      </h3>
                      <p className="font-inter text-gold font-semibold">{study.role}</p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span className="font-poppins font-semibold text-sm text-gray-500">
                            BEFORE
                          </span>
                        </div>
                        <p className="font-inter text-gray-700">{study.before}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="font-poppins font-semibold text-sm text-gray-500">
                            AFTER
                          </span>
                        </div>
                        <p className="font-inter text-gray-700 font-semibold">{study.after}</p>
                      </div>

                      <div className="bg-cream rounded-lg p-4">
                        <p className="font-inter text-sm text-gray-600 mb-1">Timeline</p>
                        <p className="font-poppins font-bold text-navy">{study.timeline}</p>
                      </div>
                    </div>

                    <div className="bg-navy/5 rounded-lg p-6 mb-6">
                      <p className="font-inter text-gray-700 italic mb-4">
                        "{study.testimonial}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-gold/10 border border-gold/20 rounded-full px-4 py-2"
                        >
                          <span className="font-inter text-sm text-navy font-semibold">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-12 text-center">
            More Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="From zero videos to 50+ in just 3 months. The confidence boost was incredible."
              author="Vikram Patel"
              role="Nutrition Coach"
              result="50+ videos, 4x engagement"
              delay={0}
            />
            <TestimonialCard
              quote="I finally have a personal brand that attracts premium clients effortlessly."
              author="Kavita Iyer"
              role="Career Coach"
              result="₹12L revenue in 6 months"
              delay={200}
            />
            <TestimonialCard
              quote="The system works. I went from avoiding camera to making it my main marketing tool."
              author="Sameer Khan"
              role="Life Coach"
              result="2K to 15K followers"
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gold to-[#b8860b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="font-inter text-xl text-navy/80 mb-8">
            Join the coaches who transformed their businesses with video confidence
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://wa.me/919876543210', '_blank')}
          >
            Book Your Free Clarity Call
          </Button>
        </div>
      </section>
    </div>
  );
}
