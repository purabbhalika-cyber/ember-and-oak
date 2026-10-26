import React, { useState, useMemo } from 'react';
import { Dish, DishCategory } from '../types/restaurant';
import { FULL_MENU_ITEMS, TASTING_EXPERIENCE } from '../data/restaurantData';
import { Search, Sparkles, Flame, Check } from 'lucide-react';

interface MenuSectionProps {
  onSelectDish: (dish: Dish) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<DishCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTastingDetails, setShowTastingDetails] = useState(false);

  const categories: { id: DishCategory; label: string }[] = [
    { id: 'all', label: 'All Courses' },
    { id: 'starters', label: 'Hearth Starters' },
    { id: 'hearth-mains', label: 'Primal Cuts' },
    { id: 'coastal', label: 'Coastal Flame' },
    { id: 'foraged-sides', label: 'Earth & Forage' },
    { id: 'desserts', label: 'Charred Sweets' },
    { id: 'cellar', label: 'Cellar & Spirits' },
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'Vegetarian', label: 'Vegetarian Only' },
    { id: 'Coastal Catch', label: 'Seafood' },
    { id: 'Wood-Fired', label: '100% Wood-Fired' },
  ];

  const filteredDishes = useMemo(() => {
    return FULL_MENU_ITEMS.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter !== 'all' && !dish.tags.includes(dietaryFilter as any)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesSubtitle = dish.subtitle.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesProvenance = dish.provenance.toLowerCase().includes(query);
        return matchesName || matchesSubtitle || matchesDesc || matchesProvenance;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-32 bg-[#1A1412] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
            <span>The Hearth Ledger</span>
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-4">
            A Season of <span className="italic text-[#D4A373]">Smoke &amp; Provenance</span>
          </h2>
          <p className="text-[#D9D1C7] text-base font-light">
            Each composition is calibrated to our trio of hardwoods. 
            All dishes are prepared freshly to order over the open hearth.
          </p>
        </div>

        {/* Tasting Experience Banner */}
        <div className="mb-16 bg-[#221F1E] border border-[#C86446]/30 p-8 lg:p-10 relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(200,100,70,0.15)_0%,transparent_70%)] pointer-events-none" 
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C86446] font-semibold mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>Synchronized Chef Experience</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] mb-2">
                {TASTING_EXPERIENCE.title}
              </h3>
              <p className="text-sm text-[#D9D1C7] font-light mb-4">
                {TASTING_EXPERIENCE.subtitle} Exclusive to 14 guests per seating at our Chef's Hearth Counter.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#9E958C]">
                <span className="text-[#FAF6F0] font-medium text-sm tabular-nums">
                  ₹{TASTING_EXPERIENCE.pricePerGuestINR.toLocaleString('en-IN')} <span className="text-xs text-[#9E958C] font-normal">/ guest</span>
                </span>
                <span>·</span>
                <span>Optional Cellar Wine Pairing: ₹{TASTING_EXPERIENCE.winePairingINR.toLocaleString('en-IN')}</span>
                <span>·</span>
                <span>Duration: {TASTING_EXPERIENCE.duration}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setShowTastingDetails(!showTastingDetails)}
                className="px-5 py-3 text-xs uppercase tracking-[0.18em] border border-[#D4A373] text-[#FAF6F0] hover:bg-[#D4A373]/10 transition-colors cursor-pointer text-center"
              >
                {showTastingDetails ? 'Hide Course Roster' : 'View 7 Courses'}
              </button>
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs uppercase tracking-[0.18em] bg-[#C86446] hover:bg-[#B35438] text-[#FAF6F0] transition-colors cursor-pointer text-center font-semibold"
              >
                Book Tasting
              </button>
            </div>
          </div>

          {/* Expandable Course Roster */}
          {showTastingDetails && (
            <div className="mt-8 pt-8 border-t border-[rgba(250,246,240,0.08)] grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
              {TASTING_EXPERIENCE.courses.map((course, idx) => (
                <div key={course.title} className="p-4 bg-[#1A1412] border border-[rgba(250,246,240,0.05)]">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#D4A373] font-medium mb-1">
                    {course.title}
                  </div>
                  <div className="text-sm text-[#FAF6F0] font-light">
                    {course.desc}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-[rgba(250,246,240,0.08)] pb-6">
          
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] whitespace-nowrap transition-colors cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#C86446] text-[#FAF6F0] border-[#C86446]'
                    : 'bg-[#120D0B] text-[#D9D1C7] border-[rgba(250,246,240,0.08)] hover:text-[#FAF6F0] hover:border-[#D4A373]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Dietary & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Dietary Filter Dropdown / Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] whitespace-nowrap rounded-full border transition-colors cursor-pointer ${
                    dietaryFilter === opt.id
                      ? 'bg-[#FAF6F0]/10 text-[#FAF6F0] border-[#FAF6F0]/40'
                      : 'text-[#9E958C] border-transparent hover:text-[#D9D1C7]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#9E958C]" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] placeholder:text-[#9E958C] pl-9 pr-3 py-2 border border-[rgba(250,246,240,0.12)] focus:outline-none focus:border-[#C86446] transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Menu Dishes List with Dotted Leaders per Stitch Design Directives */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#120D0B] border border-[rgba(250,246,240,0.08)]">
            <p className="font-serif text-lg text-[#D9D1C7] mb-2">No culinary items match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="text-xs uppercase tracking-[0.18em] text-[#C86446] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="group p-4 -mx-4 rounded-none transition-colors duration-150 hover:bg-[#221F1E]/50 cursor-pointer border-b border-[rgba(250,246,240,0.06)]"
              >
                {/* Header row: Dish Name ... Leader ... Price */}
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg sm:text-xl text-[#FAF6F0] group-hover:text-[#D4A373] transition-colors">
                      {dish.name}
                    </h4>
                    {dish.isSignature && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#C86446] font-semibold">
                        ★
                      </span>
                    )}
                  </div>

                  {/* Dotted Leader Line */}
                  <div className="flex-1 border-b border-dotted border-[rgba(250,246,240,0.18)] mx-2 relative -top-1" aria-hidden="true" />

                  {/* Tabular Price in INR */}
                  <span className="font-sans text-base sm:text-lg font-medium text-[#FAF6F0] tabular-nums shrink-0">
                    ₹{dish.priceINR.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Subtitle / Cut Details */}
                <div className="text-xs uppercase tracking-[0.15em] text-[#D4A373] font-medium mb-1.5">
                  {dish.subtitle}
                </div>

                {/* Description and Ingredients in body-sm */}
                <p className="text-xs sm:text-sm text-[#9E958C] leading-relaxed font-light mb-2">
                  {dish.description}
                </p>

                {/* Tags and Provenance Footer */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#9E958C]">
                  <span className="text-[#C86446]">Wood: {dish.woodType}</span>
                  <span>·</span>
                  <span>{dish.provenance}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dietary and Service Notes */}
        <div className="mt-16 pt-8 border-t border-[rgba(250,246,240,0.08)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E958C]">
          <div>
            Prices are in Indian Rupees (INR) and subject to applicable GST (5%) &amp; discretionary 10% hospitality service charge.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="text-[#D4A373] hover:text-[#FAF6F0] uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
            >
              Book Table Enquiry →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
