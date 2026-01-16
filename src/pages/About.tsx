import { Award, Heart, Target, Video, Briefcase, GraduationCap } from 'lucide-react';
import Button from '../components/Button';
import profileImage from '../../public/satish_with_s.png';

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
      title: 'Entrepreneurship Journey Begins',
      description:
        'Co-founded an Advertising agency with 2 friends. Inspired by "Connect The Dots" by Rashmi Bansal, started learning Advertising and Marketing.',
    },
    {
      year: '2015-2021',
      title: 'Built NexT Marketing Agency',
      description:
        'Co-Founder and COO. Worked with 80+ startups and corporates. Managed production, design, operations, and 50+ vendors.',
    },
    {
      year: '2020',
      title: 'Discovered the Problem',
      description:
        'Realized entrepreneurs and coaches struggle to create content consistently. Most were losing clients due to lack of visibility.',
    },
    {
      year: '2022',
      title: 'Created Video Magnetism System',
      description:
        'Developed a proven framework to help trainers and coaches overcome camera shyness and build personal brands.',
    },
    {
      year: 'Today',
      title: 'Mission: Help 1,00,000 Entrepreneurs',
      description:
        'Full-time focus on helping trainers and coaches build confident video presence and successful businesses.',
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
                An engineer-turned-entrepreneur and Video Magnetism Coach. I help trainers, coaches, and entrepreneurs overcome camera shyness and build powerful personal brands.
              </p>
              <p className="font-inter text-lg text-cream/90 mb-4 leading-relaxed">
                I'm a Co-Founder and COO of a successful Advertising Agency where I worked with 80+ startups and corporates over 6 years, managing operations, design, and 50+ vendors.
              </p>
              <p className="font-inter text-lg text-cream/90 mb-8 leading-relaxed">
                Inspired by "Connect The Dots," I became an entrepreneur with a mission to help others win. After seeing entrepreneurs struggle with visibility and content creation, I created the Video Magnetism System—a proven framework to help you go from camera-shy to confident creator.
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
              <div className="relative max-w-xs mx-auto">
                <img
                  src={profileImage}
                  alt="Sathish Kalluri - Video Magnetism Coach"
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

      <section className="py-20 bg-gradient-to-br from-gold/5 via-transparent to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-6">
              Organisations That Were Game Changers
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              These platforms shaped my entrepreneurial mindset and expanded my perspective on solving real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* iFocus Mission */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <div className="text-5xl font-poppins font-bold mb-2">iFocus</div>
                  <div className="text-lg font-inter">Mission</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-bold text-2xl text-navy mb-3">iFocus Mission</h3>
                <p className="font-inter text-gray-700 mb-4 leading-relaxed">
                  A Powerful Brigadier and Navigator at an organization that brings people from all walks of life together to share knowledge and experiences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Multi-directional thinking for solving complex problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Diverse perspectives on entrepreneurship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Network of inspiring entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SuSwatantra */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center p-6">
                <div className="text-center text-navy">
                  <div className="text-5xl font-poppins font-bold mb-2">SuSwatantra</div>
                  <div className="text-lg font-inter">Startup Hub</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-bold text-2xl text-navy mb-3">SuSwatantra</h3>
                <p className="font-inter text-gray-700 mb-4 leading-relaxed">
                  An active coordinator of a startup hub fostering innovation and entrepreneurial growth in the ecosystem.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Supporting young entrepreneurs and startups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Building a vibrant startup ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-gray-600">Connecting founders with mentors and investors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F9F4E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-12 text-center">
            Credentials & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 flex gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/20">
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

            <div className="bg-white rounded-xl p-8 flex gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/20">
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

            <div className="bg-white rounded-xl p-8 flex gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/20">
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

            <div className="bg-white rounded-xl p-8 flex gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/20">
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
