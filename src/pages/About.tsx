import { Award, Heart, Target, Video, Briefcase, GraduationCap } from 'lucide-react';
import Button from '../components/Button';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Authenticity First',
      description:
        'Your unique voice is your competitive advantage. I help you find and amplify it.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Results-Focused',
      description:
        'Every strategy is designed to get you real clients, not just vanity metrics.',
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Action Over Perfection',
      description:
        'Done is better than perfect. I teach you to create consistently, not perfectly.',
    },
  ];

  const journey = [
    {
      year: '2015',
      title: 'Started in Marketing',
      description:
        'Began career in digital marketing, quickly realized video was the future',
    },
    {
      year: '2017',
      title: 'Founded NexT Marketing',
      description:
        'Built a branding agency helping businesses tell their stories through video',
    },
    {
      year: '2020',
      title: 'Discovered the Gap',
      description:
        'Noticed coaches had incredible expertise but froze on camera. Made it my mission to fix this.',
    },
    {
      year: '2022',
      title: 'Video Confidence System',
      description:
        'Developed proven framework that helped 100+ coaches overcome camera anxiety',
    },
    {
      year: 'Today',
      title: 'Transforming Coaches',
      description:
        'Dedicated full-time to helping trainers and coaches build confident video presence',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
                Hi, I'm Sathish Kalluri
              </h1>
              <p className="font-inter text-xl text-cream mb-6 leading-relaxed">
                I help trainers and coaches overcome camera shyness so they can attract
                clients and build personal brands through video content.
              </p>
              <p className="font-inter text-lg text-cream/90 mb-8 leading-relaxed">
                After 8+ years in branding and founding NexT Marketing, I discovered that
                most coaches have incredible expertise but freeze when the camera turns on.
                That's why I created a system to help you go from camera-shy to confident
                creator.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                Let's Connect
              </Button>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sathish Kalluri"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-navy rounded-xl p-6 shadow-xl">
                  <div className="font-poppins font-bold text-3xl">8+</div>
                  <div className="font-inter text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4 text-center">
            Why I Do This
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            I've seen too many talented coaches lose clients to less skilled competitors
            simply because they couldn't show up on video. That breaks my heart because I
            know the impact you could have if camera fear wasn't holding you back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-cream rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-gold mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-12 text-center">
            My Journey
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30 hidden md:block" />

            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-8 top-6 w-4 h-4 bg-gold rounded-full -translate-x-1/2 hidden md:block" />
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <span className="inline-block bg-gold text-navy font-poppins font-bold px-4 py-1 rounded-full text-sm">
                        {milestone.year}
                      </span>
                      <h3 className="font-poppins font-bold text-xl text-navy">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="font-inter text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-12 text-center">
            Credentials & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream rounded-xl p-8 flex gap-4">
              <Briefcase className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  Founder, NexT Marketing
                </h3>
                <p className="font-inter text-gray-700">
                  Built successful branding agency specializing in video content and
                  personal branding strategies
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-8 flex gap-4">
              <Award className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  100+ Coaches Trained
                </h3>
                <p className="font-inter text-gray-700">
                  Helped trainers and coaches across India overcome camera anxiety and build
                  video confidence
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-8 flex gap-4">
              <Video className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  Video Marketing Expert
                </h3>
                <p className="font-inter text-gray-700">
                  8+ years creating and teaching video content strategies that convert
                  viewers into clients
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-8 flex gap-4">
              <GraduationCap className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  Proven System Creator
                </h3>
                <p className="font-inter text-gray-700">
                  Developed the Video Confidence System used by coaches to create consistent,
                  client-attracting content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
            Let's Work Together
          </h2>
          <p className="font-inter text-xl text-cream mb-8">
            If you're ready to overcome camera fear and build your personal brand through
            video, I'd love to help you get there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              Book Free Clarity Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
