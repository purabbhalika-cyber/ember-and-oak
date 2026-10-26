import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Shield, Navigation } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#181210] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
            <span>Finding The Hearth</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-4 text-balance">
            Location &amp; <span className="italic text-[#D4A373]">Hours of Service</span>
          </h2>
          <p className="text-[#D9D1C7] text-base font-light">
            Located in Bandra West, sheltered behind private artisan oak gates. 
            Complimentary valet service is positioned at the main courtyard porte-cochère.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Hours of Service Schedule */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-6">
                <Clock className="w-4 h-4 text-[#C86446]" />
                <span>Weekly Hearth Service Times</span>
              </div>

              <div className="divide-y divide-[rgba(250,246,240,0.06)]">
                {RESTAURANT_INFO.hours.map((schedule) => (
                  <div key={schedule.day} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                    <span className="font-serif text-[#FAF6F0] font-medium">{schedule.day}</span>
                    <div className="text-right sm:text-right">
                      <div className="text-[#D9D1C7] text-xs sm:text-sm font-light">
                        {schedule.lunch !== 'Dark / Closed' && <span>Lunch: {schedule.lunch} · </span>}
                        <span>Dinner: {schedule.dinner}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(250,246,240,0.06)] text-xs text-[#9E958C]">
                * Hearth grills ignite 30 minutes prior to service. Walk-in bar seating opens daily at 6:00 PM.
              </div>
            </div>

            {/* Essential Guest Policies */}
            <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-2">
                <Shield className="w-4 h-4 text-[#D4A373]" />
                <span>Guest Guidelines &amp; Attire</span>
              </div>
              <ul className="space-y-2 text-xs text-[#D9D1C7] font-light">
                {RESTAURANT_INFO.policies.map((policy, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C86446] mt-0.5">·</span>
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Stylized Cartography & Contact */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Map Simulator Card */}
            <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold">
                  <MapPin className="w-4 h-4 text-[#C86446]" />
                  <span>Sanctuary Address</span>
                </div>
                <span className="text-[11px] text-[#9E958C]">Bandra West, Mumbai</span>
              </div>

              {/* Architectural Styled Map Graphic */}
              <div className="relative h-56 bg-[#120D0B] border border-[rgba(250,246,240,0.12)] overflow-hidden flex items-center justify-center mb-6">
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(250,246,240,0.1)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  <line x1="0" y1="90" x2="600" y2="120" stroke="#2D2825" strokeWidth="8" />
                  <line x1="220" y1="0" x2="260" y2="300" stroke="#2D2825" strokeWidth="12" />
                  <line x1="120" y1="200" x2="500" y2="180" stroke="#2D2825" strokeWidth="6" />
                  <path d="M 450 0 Q 420 150 480 300" stroke="#1F2826" strokeWidth="24" fill="none" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#C86446] border-2 border-[#FAF6F0] flex items-center justify-center text-[#FAF6F0] shadow-[0_0_20px_rgba(200,100,70,0.6)]">
                    <span className="font-serif font-bold text-xs">E&amp;O</span>
                  </div>
                  <div className="mt-2 bg-[#1A1412] border border-[rgba(250,246,240,0.2)] px-3 py-1 text-[11px] font-serif text-[#FAF6F0] whitespace-nowrap shadow-md">
                    142 Artisan Boulevard
                  </div>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-1 text-sm text-[#FAF6F0] mb-4">
                <div className="font-serif text-lg">{RESTAURANT_INFO.location.address}</div>
                <div className="text-xs text-[#9E958C]">{RESTAURANT_INFO.location.city}</div>
                <div className="text-xs text-[#D4A373] mt-1">{RESTAURANT_INFO.location.valet}</div>
              </div>

              {/* Interactive Navigation Trigger */}
              <div className="pt-4 border-t border-[rgba(250,246,240,0.06)] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCopy(`${RESTAURANT_INFO.location.address}, ${RESTAURANT_INFO.location.city}`, 'address')}
                  className="text-xs uppercase tracking-[0.15em] text-[#D4A373] hover:text-[#FAF6F0] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{copiedContact === 'address' ? 'Address Copied!' : 'Copy Address'}</span>
                </button>

                <span className="text-[11px] text-[#9E958C]">
                  Near Bandra Fort Promenade
                </span>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C] mb-1">Telephone Enquiries</div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESTAURANT_INFO.contact.phone, 'phone')}
                  className="font-serif text-base text-[#FAF6F0] hover:text-[#D4A373] transition-colors cursor-pointer text-left"
                >
                  {RESTAURANT_INFO.contact.phone}
                </button>
                {copiedContact === 'phone' && <span className="block text-[10px] text-[#D4A373]">Copied to clipboard</span>}
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C] mb-1">Concierge Email</div>
                <button
                  type="button"
                  onClick={() => handleCopy(RESTAURANT_INFO.contact.reservationsEmail, 'email')}
                  className="font-sans text-xs text-[#FAF6F0] hover:text-[#D4A373] transition-colors cursor-pointer text-left break-all"
                >
                  {RESTAURANT_INFO.contact.reservationsEmail}
                </button>
                {copiedContact === 'email' && <span className="block text-[10px] text-[#D4A373]">Copied to clipboard</span>}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
