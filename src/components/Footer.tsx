import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

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
              <img
                src="/sathish-logo-2048x670.png"
                alt="Sathish Kalluri Logo"
                className="h-8 object-contain"
              />
            </div>
            <p className="font-inter text-cream mb-4 max-w-md">
              Video Confidence Coach helping trainers and coaches overcome camera shyness
              and build personal brands through impactful video content.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/groups/learncm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/kalluri.sathish_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalluri-sathish-reddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/c/SathishKalluri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
                  href="mailto:connect@sathishkalluri.com"
                  className="flex items-center gap-2 font-inter text-cream hover:text-gold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  connect@sathishkalluri.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919550537599"
                  className="flex items-center gap-2 font-inter text-cream hover:text-gold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +91 95505 37599
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-cream">
            © {new Date().getFullYear()} NexT Marketing. All Rights Reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="https://sathishkalluri.com/privacy-policy/" className="font-inter text-sm text-cream hover:text-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="https://sathishkalluri.com/refund-policy/" className="font-inter text-sm text-cream hover:text-gold transition-colors duration-200">
              Refund Policy
            </a>
            <a href="https://sathishkalluri.com/terms-conditions/" className="font-inter text-sm text-cream hover:text-gold transition-colors duration-200">
              T&C
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
