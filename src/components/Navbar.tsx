import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Culinary Menu', href: '#menu' },
    { label: 'Hearth Story', href: '#story' },
    { label: 'Hours & Map', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120D0B]/95 backdrop-blur-md border-b border-[rgba(250,246,240,0.08)] shadow-lg shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-[#120D0B]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element Brand wordmark */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-[#FAF6F0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A373]"
              aria-label="Ember & Oak Home"
            >
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-normal tracking-[0.22em] uppercase text-[#FAF6F0] group-hover:text-[#D4A373] transition-colors">
                EMBER &amp; OAK
              </span>
            </a>

            {/* Zone 2: 4–5 clean single-line text navigation links */}
            <nav 
              className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.18em] font-medium text-[#D9D1C7]"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:text-[#FAF6F0] hover:border-[#D4A373] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] active:translate-y-px transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(200,100,70,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF6F0]"
              >
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reserve a Table</span>
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#FAF6F0] hover:text-[#D4A373] border border-[rgba(250,246,240,0.12)] bg-[#1A1412] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A373]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#120D0B]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6 pt-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E958C] border-b border-[rgba(250,246,240,0.08)] pb-2">
              Culinary Navigation
            </span>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl text-[#FAF6F0] hover:text-[#D4A373] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[rgba(250,246,240,0.08)] flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <p className="text-center text-xs text-[#9E958C]">
              142 Artisan Boulevard, Bandra West, Mumbai
            </p>
          </div>
        </div>
      )}
    </>
  );
};
