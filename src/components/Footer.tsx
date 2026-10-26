import React, { useState } from 'react';
import { ArrowUpRight, Flame, Send } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim())) {
      setNewsletterError('Please enter a valid email address');
      return;
    }
    setNewsletterSubmitted(true);
    setNewsletterError('');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#120D0B] border-t border-[rgba(250,246,240,0.08)] pt-16 pb-12 text-[#9E958C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[rgba(250,246,240,0.08)]">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-serif text-2xl tracking-[0.22em] text-[#FAF6F0] mb-3">
                EMBER &amp; OAK
              </div>
              <p className="text-xs sm:text-sm text-[#D9D1C7] font-light leading-relaxed mb-6 max-w-sm">
                Primitive wood-fired dining and refined contemporary gastronomy. 
                Dedicated to the dialogue between ancient embers, 45-day salt aging, and seasonal terroir.
              </p>
            </div>

            <div className="text-xs text-[#D4A373] flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#C86446]" />
              <span>Zero-gas open flame cookery</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF6F0] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9D1C7]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('philosophy')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('signatures')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Signature Cuts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Culinary Ledger
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('story')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  The Hearth Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('location')}
                  className="hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  Hours &amp; Location
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="text-[#C86446] hover:text-[#FAF6F0] transition-colors cursor-pointer font-medium"
                >
                  Reserve a Table →
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Enquiries Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF6F0] font-semibold mb-4">
              Service Hours
            </h4>
            <div className="space-y-2 text-xs text-[#D9D1C7] font-light leading-relaxed">
              <p>
                <strong className="text-[#FAF6F0] font-normal">Tuesday – Sunday:</strong><br />
                Lunch: 12:30 PM – 3:30 PM<br />
                Dinner: 6:30 PM – 11:30 PM
              </p>
              <p>
                <strong className="text-[#FAF6F0] font-normal">Late Hearth Bar:</strong><br />
                Friday &amp; Saturday till 12:30 AM
              </p>
              <p className="text-[#9E958C]">
                Monday: Dark for wood seasoning.
              </p>
            </div>
          </div>

          {/* Hearth Gazette / Dispatch Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF6F0] font-semibold mb-2">
              The Hearth Gazette
            </h4>
            <p className="text-xs text-[#9E958C] font-light mb-4">
              Quarterly missives covering seasonal micro-forages, cellared vintages, and guest chef table invitations.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-[#1A1412] border border-[#C86446]/40 text-xs text-[#D4A373]">
                Your subscription has been registered for demonstration purposes.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-[#1A1412] text-xs text-[#FAF6F0] placeholder:text-[#9E958C] px-3 py-2.5 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to Gazette"
                    className="bg-[#C86446] hover:bg-[#B35438] text-[#FAF6F0] px-3.5 py-2.5 shrink-0 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && <p className="text-[11px] text-[#FFB4AB]">{newsletterError}</p>}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Attribution & Portfolio Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#9E958C]">
          <div>
            © {new Date().getFullYear()} EMBER &amp; OAK. All culinary concepts, names, and recipes are fictional sample portfolio content.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#D4A373]/80">Google Stitch Design System Implementation</span>
            <span>·</span>
            <span>Bandra West, Mumbai</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
