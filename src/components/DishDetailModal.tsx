import React from 'react';
import { Dish } from '../types/restaurant';
import { CulinaryArtwork } from './CulinaryArtwork';
import { X, Flame, Wine, AlertTriangle, Compass, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onReserve: (dish: Dish) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onReserve }) => {
  if (!dish) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-[#1A1412] border border-[rgba(250,246,240,0.12)] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#FAF6F0] hover:text-[#C86446] w-9 h-9 border border-[rgba(250,246,240,0.12)] bg-[#120D0B] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Artwork */}
        <div className="mb-6 border border-[rgba(250,246,240,0.08)] bg-[#120D0B] overflow-hidden">
          <CulinaryArtwork
            type={dish.id}
            src={dish.imageSrc}
            aspectRatio="16/9"
            alt={dish.name}
          />
        </div>

        {/* Category & Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-2 text-xs uppercase tracking-[0.18em] text-[#D4A373]">
          <span>{dish.subtitle}</span>
          <span>·</span>
          <span>{dish.category.replace('-', ' ')}</span>
        </div>

        {/* Title and Price */}
        <div className="flex items-baseline justify-between gap-4 mb-4 border-b border-[rgba(250,246,240,0.08)] pb-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0]">
            {dish.name}
          </h3>
          <span className="font-sans text-xl font-medium text-[#FAF6F0] tabular-nums shrink-0">
            ₹{dish.priceINR.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#D9D1C7] font-light leading-relaxed mb-6">
          {dish.description}
        </p>

        {/* Culinary Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#120D0B] border border-[rgba(250,246,240,0.08)] mb-6 text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-[#C86446] uppercase tracking-[0.15em] font-medium mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Hearth Fire Spec</span>
            </div>
            <div className="text-[#FAF6F0]">{dish.woodType} ({dish.temperature})</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[#D4A373] uppercase tracking-[0.15em] font-medium mb-1">
              <Wine className="w-3.5 h-3.5" />
              <span>Cellar Pairing</span>
            </div>
            <div className="text-[#FAF6F0]">{dish.winePairing}</div>
          </div>

          <div className="sm:col-span-2 pt-2 border-t border-[rgba(250,246,240,0.06)]">
            <div className="flex items-center gap-1.5 text-[#9E958C] uppercase tracking-[0.15em] font-medium mb-1">
              <Compass className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Provenance &amp; Terroir</span>
            </div>
            <div className="text-[#D9D1C7] font-light">{dish.provenance}</div>
          </div>

          {dish.allergens && dish.allergens.length > 0 && (
            <div className="sm:col-span-2 pt-2 border-t border-[rgba(250,246,240,0.06)] flex items-center gap-2 text-[#9E958C]">
              <span className="text-[11px] uppercase tracking-wider text-[#FFB4AB]">Allergens:</span>
              <span>{dish.allergens.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[rgba(250,246,240,0.08)]">
          <span className="text-xs text-[#9E958C]">
            Prepared fresh to order over the open hearth.
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onReserve(dish);
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors cursor-pointer text-center"
          >
            Reserve Table For This Dish
          </button>
        </div>

      </div>
    </div>
  );
};
