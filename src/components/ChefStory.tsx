import React from 'react';
import { CulinaryArtwork } from './CulinaryArtwork';
import { Flame, Compass, ShieldCheck } from 'lucide-react';

export const ChefStory: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-32 bg-[#120D0B] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Split: Narrative + Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column with Hairline Offset */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative border border-[rgba(250,246,240,0.12)] bg-[#1A1412] p-3 shadow-2xl">
              <CulinaryArtwork
                type="chef-hearth"
                aspectRatio="4/3"
                alt="Executive Chef Julian Vance tending to the open white oak fire"
              />
              
              <div className="mt-3 pt-3 border-t border-[rgba(250,246,240,0.08)] flex items-center justify-between text-xs text-[#D9D1C7]">
                <div className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#C86446]" />
                  <span className="font-serif italic">Hearth Station 01</span>
                </div>
                <span className="text-[#9E958C]">Marcus Thorne &amp; Julian Vance</span>
              </div>
            </div>

            {/* Brass hairline corner badge */}
            <div 
              className="hidden sm:block absolute -top-3 -left-3 w-24 h-24 border-t border-l border-[#D4A373]/30 pointer-events-none" 
              aria-hidden="true" 
            />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
              <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
              <span>Origins &amp; Craftsmanship</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-6 text-balance">
              Born from the <span className="italic text-[#D4A373]">Ancient Hearth</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-[#D9D1C7] font-light leading-relaxed">
              <p>
                Ember &amp; Oak was conceived over a solitary fire in the Nilgiri hills by Chef Julian Vance. 
                After two decades in Michelin-starred classical European kitchens, Vance felt an irresistible pull 
                toward the visceral honesty of primal fire—where there are no digital temp probes, no sous-vide baths, 
                and no disguising inferior ingredients.
              </p>
              <p>
                Together with master ironmonger and Hearth Master Marcus Thorne, they spent fourteen months 
                designing a dual-hearth grill forged from 18mm cast iron and hand-chiseled Scandinavian refractory brick. 
                Counterbalanced flywheel gantries allow our cooks to raise and lower cuts over wood embers with millimeter precision.
              </p>
              <p>
                Every log of White Oak, Applewood, and Hickory is air-seasoned for twenty-four months in our shaded wood courtyard, 
                ensuring pure aromatic combustion devoid of acrid creosote.
              </p>
            </div>

            {/* Purveyor Credentials Strip */}
            <div className="mt-8 pt-8 border-t border-[rgba(250,246,240,0.08)] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#FAF6F0] mb-1">100%</div>
                <div className="text-xs uppercase tracking-[0.15em] text-[#9E958C]">Hardwood Flame</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#FAF6F0] mb-1">45 Days</div>
                <div className="text-xs uppercase tracking-[0.15em] text-[#9E958C]">Salt Chamber Aging</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#FAF6F0] mb-1">24 Mo</div>
                <div className="text-xs uppercase tracking-[0.15em] text-[#9E958C]">Wood Curing Cycle</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
