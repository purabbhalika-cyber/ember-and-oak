import React from 'react';
import { Flame, Clock, Award, Compass, ArrowDown } from 'lucide-react';
import { CulinaryArtwork } from './CulinaryArtwork';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#120D0B] border-b border-[rgba(250,246,240,0.08)]">
      {/* Background radial gradient simulating hearth warmth */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,100,70,0.12)_0%,rgba(18,13,11,0)_70%)] pointer-events-none blur-3xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Pacing & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow kicker with zero-pill discipline */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-6 font-semibold">
              <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
              <span>Wood-Fired Gastronomy · Mumbai</span>
            </div>

            {/* Display Headline with balanced wrap and italic inflection */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight text-[#FAF6F0] mb-6 text-balance">
              The <span className="italic font-normal text-[#D4A373]">Primitive Hearth</span>, Refined.
            </h1>

            {/* Introductory Body */}
            <p className="text-base sm:text-lg text-[#D9D1C7] font-light leading-relaxed max-w-2xl mb-8">
              Where kiln-aged white oak meets primordial embers. An ode to primal open-flame cookery, 
              45-day Himalayan salt dry-aging, and hyper-seasonal coastal foraging in an intimate, 
              chiaroscuro sanctuary.
            </p>

            {/* Dual Actions: Primary Terracotta + Secondary Brass Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] active:translate-y-px transition-all duration-200 text-center cursor-pointer shadow-lg shadow-[#C86446]/20 hover:shadow-[0_0_24px_rgba(200,100,70,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF6F0]"
              >
                Reserve a Table
              </button>

              <button
                type="button"
                onClick={onExploreMenu}
                className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] border border-[#D4A373] hover:bg-[#D4A373]/10 active:translate-y-px transition-all duration-200 text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373]"
              >
                Explore Culinary Menu
              </button>
            </div>

            {/* Service & Portfolio sample disclaimer note */}
            <div className="mt-8 flex items-center gap-3 text-xs text-[#9E958C]">
              <span>Dinner 6:30 PM – 11:30 PM</span>
              <span aria-hidden="true" className="text-[#9E958C]/50">·</span>
              <span>142 Artisan Boulevard, Bandra</span>
              <span aria-hidden="true" className="text-[#9E958C]/50">·</span>
              <span className="text-[#D4A373]/80">Portfolio Showcase</span>
            </div>
          </div>

          {/* Right Column: Cinematic Hearth Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[rgba(250,246,240,0.12)] bg-[#1A1412] p-2.5 sm:p-3.5 shadow-2xl shadow-black/80">
              <CulinaryArtwork 
                type="hero-hearth" 
                aspectRatio="4/3" 
                alt="Open-flame white oak embers in Ember & Oak hearth" 
              />
              
              {/* Bottom caption overlay with razor-sharp editorial geometry */}
              <div className="mt-3 pt-3 border-t border-[rgba(250,246,240,0.08)] flex items-center justify-between text-xs text-[#D9D1C7]">
                <div className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#C86446]" aria-hidden="true" />
                  <span className="font-serif italic">White Oak Ember Bed</span>
                </div>
                <span className="tabular-nums text-[#9E958C]">850°C Kiln Heat</span>
              </div>
            </div>

            {/* Offset decorative architectural hairline framing */}
            <div 
              className="hidden sm:block absolute -bottom-3 -right-3 w-28 h-28 border-b border-r border-[#D4A373]/30 pointer-events-none -z-0" 
              aria-hidden="true" 
            />
          </div>

        </div>
      </div>

      {/* Provenance Strip below Hero Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 pt-8 border-t border-[rgba(250,246,240,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col gap-1 border-l border-[#C86446]/40 pl-4">
            <span className="text-xs uppercase tracking-[0.18em] text-[#9E958C]">Thermal Core</span>
            <span className="font-serif text-lg text-[#FAF6F0]">White Oak Hearth</span>
            <span className="text-xs text-[#D9D1C7]/70">Zero-gas authentic coal bed</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-[#D4A373]/40 pl-4">
            <span className="text-xs uppercase tracking-[0.18em] text-[#9E958C]">Artisanal Aging</span>
            <span className="font-serif text-lg text-[#FAF6F0]">45-Day Dry Aging</span>
            <span className="text-xs text-[#D9D1C7]/70">Himalayan salt-cured vault</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-[#C86446]/40 pl-4">
            <span className="text-xs uppercase tracking-[0.18em] text-[#9E958C]">Terroir & Flora</span>
            <span className="font-serif text-lg text-[#FAF6F0]">Wild-Foraged</span>
            <span className="text-xs text-[#D9D1C7]/70">High-altitude Himalayan morels</span>
          </div>

          <div className="flex flex-col gap-1 border-l border-[#D4A373]/40 pl-4">
            <span className="text-xs uppercase tracking-[0.18em] text-[#9E958C]">Sommelier Curation</span>
            <span className="font-serif text-lg text-[#FAF6F0]">Biodynamic Cellar</span>
            <span className="text-xs text-[#D9D1C7]/70">Low-intervention vintages</span>
          </div>
        </div>
      </div>

    </section>
  );
};
