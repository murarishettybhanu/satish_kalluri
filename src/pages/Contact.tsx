import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. Email: ${formData.email}, Phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 98765 43210',
      action: 'tel:+919876543210',
      description: 'Mon-Sat, 9 AM - 7 PM IST',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'hello@sathishkalluri.com',
      action: 'mailto:hello@sathishkalluri.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+91 98765 43210',
      action: 'https://wa.me/919876543210',
      description: 'Fastest response time',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Book a Call',
      value: 'Schedule Free Clarity Call',
      action: 'https://calendly.com/sathishkalluri',
      description: '30-minute free consultation',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-[#0d1520] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6 animate-fade-in-up">
            Let's Start Your Video Confidence Journey
          </h1>
          <p className="font-inter text-xl text-cream max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Ready to overcome camera fear? Reach out and let's discuss how I can help you
            build your personal brand through video.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-cream rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200">
                  {method.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {method.title}
                </h3>
                <p className="font-inter text-sm text-gray-700 mb-2 break-words">
                  {method.value}
                </p>
                <p className="font-inter text-xs text-gray-500">{method.description}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-navy mb-6">
                Send Me a Message
              </h2>
              <p className="font-inter text-gray-700 mb-8">
                Fill out the form below and I'll get back to you as soon as possible. Or
                click submit to send directly via WhatsApp for faster response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-inter font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-inter font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-inter font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter font-medium text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your challenges with video content..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-navy to-[#0d1520] text-white rounded-2xl p-8">
                <h3 className="font-poppins font-bold text-2xl mb-6">
                  Why Work With Me?
                </h3>
                <ul className="space-y-4">
                  {[
                    '8+ years of branding and video marketing experience',
                    'Helped 100+ coaches overcome camera shyness',
                    'Founder of NexT Marketing agency',
                    'Proven templates and systems that work',
                    'Personalized approach to your unique challenges',
                    'Focus on real results, not vanity metrics',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="font-inter text-cream">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-poppins font-bold text-xl text-navy mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-inter font-medium text-navy">Monday - Friday</p>
                      <p className="font-inter text-sm text-gray-600">9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-inter font-medium text-navy">Saturday</p>
                      <p className="font-inter text-sm text-gray-600">10:00 AM - 4:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-inter font-medium text-navy">Sunday</p>
                      <p className="font-inter text-sm text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-8">
                <MapPin className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-poppins font-bold text-xl text-navy mb-2">Location</h3>
                <p className="font-inter text-gray-700">
                  Based in India, serving coaches worldwide through online programs and
                  consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gold to-[#b8860b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-6">
            Prefer to Book a Call Instead?
          </h2>
          <p className="font-inter text-xl text-navy/80 mb-8">
            Schedule a free 30-minute clarity call to discuss your video confidence goals
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://calendly.com/sathishkalluri', '_blank')}
          >
            Book Your Free Call Now
          </Button>
        </div>
      </section>
    </div>
  );
}
