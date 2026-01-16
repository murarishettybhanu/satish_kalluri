import { Video, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-8 h-8 text-gold" />
              <span className="font-poppins font-bold text-xl">Sathish Kalluri</span>
            </div>
            <p className="font-inter text-cream mb-4 max-w-md">
              Video Confidence Coach helping trainers and coaches overcome camera shyness
              and build personal brands through impactful video content.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'work', 'results', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavigate(page)}
                    className="font-inter text-cream hover:text-gold transition-colors duration-200 capitalize"
                  >
                    {page === 'work' ? 'Work With Me' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@sathishkalluri.com"
                  className="flex items-center gap-2 font-inter text-cream hover:text-gold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  hello@sathishkalluri.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 font-inter text-cream hover:text-gold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-cream">
            © {new Date().getFullYear()} Sathish Kalluri. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="font-inter text-sm text-cream hover:text-gold transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="font-inter text-sm text-cream hover:text-gold transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
