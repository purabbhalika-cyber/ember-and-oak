import React from 'react';
import { Flame, Sparkles, Wind, Layers } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-32 bg-[#181210] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
            <span>Culinary Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-6 text-balance">
            Fire as the <span className="italic text-[#D4A373]">Singular Medium</span>
          </h2>
          <p className="text-[#D9D1C7] text-base lg:text-lg font-light leading-relaxed">
            At Ember &amp; Oak, we abandon modern gas ranges and electric induction. 
            Every dish is subjected to the primordial alchemy of live flame, radiant embers, 
            and kiln-cured hardwood smoke. We believe smoke is an ingredient in its own right—a 
            delicate seasoning that binds terroir, cut, and time.
          </p>
        </div>

        {/* 3 Pillars Grid with 0px corner geometry and hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Pillar 1 */}
          <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-8 flex flex-col justify-between hover:border-[#D4A373]/30 transition-colors">
            <div>
              <div className="w-10 h-10 border border-[#C86446]/40 flex items-center justify-center text-[#C86446] mb-6">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FAF6F0] mb-3">
                The Wood Trinity
              </h3>
              <p className="text-sm text-[#D9D1C7] leading-relaxed font-light mb-6">
                We burn exclusively three seasoned hardwoods: aged White Oak for intense, clean 850°C searing coals; 
                Orchard Applewood for tenderizing duck and coastal crustacean; and cured Hickory for long, smoldering primal roasts.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(250,246,240,0.06)] text-xs uppercase tracking-[0.18em] text-[#D4A373]">
              01 · Thermal Chemistry
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-8 flex flex-col justify-between hover:border-[#D4A373]/30 transition-colors">
            <div>
              <div className="w-10 h-10 border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373] mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FAF6F0] mb-3">
                Micro-Seasonality &amp; Forage
              </h3>
              <p className="text-sm text-[#D9D1C7] leading-relaxed font-light mb-6">
                Our kitchen follows no calendar other than nature’s immediate yield. 
                We partner with alpine foragers in Himachal for wild morels, small-batch heirloom farmers in Ooty, 
                and independent day-boat fishermen along Maharashtra’s rocky coastline.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(250,246,240,0.06)] text-xs uppercase tracking-[0.18em] text-[#D4A373]">
              02 · Provenance &amp; Soil
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-8 flex flex-col justify-between hover:border-[#D4A373]/30 transition-colors">
            <div>
              <div className="w-10 h-10 border border-[#C86446]/40 flex items-center justify-center text-[#C86446] mb-6">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FAF6F0] mb-3">
                Zero-Gas Commitment
              </h3>
              <p className="text-sm text-[#D9D1C7] leading-relaxed font-light mb-6">
                From morning prep to midnight digestifs, our twin iron hearths remain ignited. 
                Broths simmer over overnight cooling ash; flatbreads blister against clay walls; 
                and hand-carved cocktail ice receives a kiss of ignited rosemary and oak ember.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(250,246,240,0.06)] text-xs uppercase tracking-[0.18em] text-[#D4A373]">
              03 · Primitive Purity
            </div>
          </div>

        </div>

        {/* Sensory quote block */}
        <div className="mt-16 p-8 lg:p-12 bg-[#221F1E] border border-[rgba(250,246,240,0.08)] flex flex-col md:flex-row items-center justify-between gap-8">
          <blockquote className="font-serif text-xl sm:text-2xl text-[#FAF6F0] italic max-w-3xl leading-snug">
            "We do not tame the fire. We listen to its hum, measure the embers by hand, 
            and surrender to what only time, smoke, and heat can reveal."
          </blockquote>
          <div className="shrink-0 text-right md:border-l md:border-[rgba(250,246,240,0.12)] md:pl-8">
            <div className="font-serif text-base text-[#FAF6F0]">Julian Vance</div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#D4A373]">Executive Chef &amp; Hearth Master</div>
          </div>
        </div>

      </div>
    </section>
  );
};
