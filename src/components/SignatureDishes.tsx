import React from 'react';
import { Dish } from '../types/restaurant';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { CulinaryArtwork } from './CulinaryArtwork';
import { ArrowUpRight, Flame } from 'lucide-react';

interface SignatureDishesProps {
  onSelectDish: (dish: Dish) => void;
  onOpenReservation: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({
  onSelectDish,
  onOpenReservation,
}) => {
  return (
    <section id="signatures" className="py-20 lg:py-32 bg-[#120D0B] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
              <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
              <span>Hearth Signatures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight text-balance">
              Dishes of the <span className="italic text-[#C86446]">Living Flame</span>
            </h2>
            <p className="mt-4 text-[#D9D1C7] text-base font-light">
              Masterworks developed across seasons, seared directly on red-hot white oak 
              and slow-roasted in subterranean ash cauldrons.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReservation}
              className="text-xs uppercase tracking-[0.18em] text-[#D4A373] hover:text-[#FAF6F0] flex items-center gap-2 pb-1 border-b border-[#D4A373]/40 hover:border-[#D4A373] transition-colors cursor-pointer"
            >
              <span>Book Table for Tonight</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SIGNATURE_DISHES.map((dish) => (
            <article
              key={dish.id}
              className="group bg-[#1A1412] border border-[rgba(250,246,240,0.08)] hover:border-[#C86446]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Dish Visual Header */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => onSelectDish(dish)}>
                <CulinaryArtwork
                  type={dish.id}
                  src={dish.imageSrc}
                  aspectRatio="4/3"
                  alt={dish.name}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Wood Type subtle bottom ribbon */}
                <div className="absolute bottom-3 left-3 bg-[#120D0B]/90 backdrop-blur-sm px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-[#D4A373] flex items-center gap-1.5 border border-[rgba(250,246,240,0.08)]">
                  <Flame className="w-3 h-3 text-[#C86446]" />
                  <span>{dish.woodType}</span>
                </div>
              </div>

              {/* Dish Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category and Subtitle */}
                  <div className="text-xs text-[#9E958C] uppercase tracking-[0.18em] mb-2 font-medium">
                    {dish.subtitle}
                  </div>

                  {/* Dish Title & Price Header */}
                  <div className="flex items-baseline justify-between gap-4 mb-3 border-b border-[rgba(250,246,240,0.08)] pb-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF6F0] leading-snug group-hover:text-[#D4A373] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-sans text-lg font-medium text-[#FAF6F0] tabular-nums shrink-0">
                      ₹{dish.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Culinary Description */}
                  <p className="text-sm text-[#D9D1C7] leading-relaxed font-light mb-4">
                    {dish.description}
                  </p>

                  {/* Wine Pairing Note */}
                  <div className="text-xs text-[#9E958C] font-light italic flex items-center gap-1.5 mb-6">
                    <span className="text-[#D4A373] not-italic text-[10px] uppercase tracking-wider">Pairing:</span>
                    <span>{dish.winePairing}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[rgba(250,246,240,0.06)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectDish(dish)}
                    className="text-xs uppercase tracking-[0.18em] text-[#D4A373] hover:text-[#FAF6F0] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Provenance</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="text-xs uppercase tracking-[0.15em] text-[#D9D1C7] hover:text-[#C86446] transition-colors cursor-pointer"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Chef's Note */}
        <div className="mt-14 pt-8 border-t border-[rgba(250,246,240,0.08)] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9E958C]">
            All steaks are hand-cut by our in-house butcher and dry-hung in Himalayan salt air for a minimum of 45 days.
          </p>
        </div>

      </div>
    </section>
  );
};
