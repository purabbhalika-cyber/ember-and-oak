import React from 'react';
import { CulinaryArtwork } from './CulinaryArtwork';
import { Users, Wine, Sparkles } from 'lucide-react';

interface PrivateDiningProps {
  onOpenReservation: () => void;
}

export const PrivateDining: React.FC<PrivateDiningProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#181210] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
              <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
              <span>Intimate Celebrations</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-6">
              The Oak Vault &amp; <span className="italic text-[#D4A373]">Private Hearth</span>
            </h2>

            <p className="text-[#D9D1C7] text-base font-light leading-relaxed mb-6">
              For gatherings demanding discreet hospitality, Ember &amp; Oak offers two secluded chambers. 
              The <strong className="font-medium text-[#FAF6F0]">Hearth Room</strong> accommodates up to 16 guests centered around a 
              private fire pit where our chefs execute a bespoke tasting menu. The <strong className="font-medium text-[#FAF6F0]">Oak Library</strong> seats 
              up to 28 guests with dedicated sommelier curation and vintage decanting service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-[#1A1412] border border-[rgba(250,246,240,0.08)]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4A373] font-medium mb-1">
                  <Users className="w-4 h-4 text-[#C86446]" />
                  <span>The Hearth Room</span>
                </div>
                <div className="text-sm text-[#FAF6F0] font-light">
                  8 to 16 Guests · Live Private Fire Pit
                </div>
              </div>

              <div className="p-4 bg-[#1A1412] border border-[rgba(250,246,240,0.08)]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4A373] font-medium mb-1">
                  <Wine className="w-4 h-4 text-[#D4A373]" />
                  <span>The Oak Library</span>
                </div>
                <div className="text-sm text-[#FAF6F0] font-light">
                  Up to 28 Guests · Sommelier Vault
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenReservation}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors cursor-pointer"
            >
              Enquire for Private Dining
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative border border-[rgba(250,246,240,0.12)] bg-[#1A1412] p-3 shadow-xl">
              <CulinaryArtwork
                type="cellar-bottles"
                aspectRatio="4/3"
                alt="Ember & Oak wine cellar and aged oak staves"
              />
              <div className="mt-3 pt-3 border-t border-[rgba(250,246,240,0.08)] flex items-center justify-between text-xs text-[#9E958C]">
                <span className="font-serif italic text-[#D9D1C7]">400+ Curated Biodynamic Vintages</span>
                <span className="tabular-nums">Cellar Vault 02</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
