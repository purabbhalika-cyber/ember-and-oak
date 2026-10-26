import React, { useState } from 'react';
import { ReservationFormData, SeatingArea, ConfirmedReservation } from '../types/restaurant';
import { Calendar, Clock, Users, CheckCircle, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

interface ReservationSectionProps {
  onReservationComplete?: (res: ConfirmedReservation) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onReservationComplete }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '19:30',
    partySize: 2,
    seatingArea: 'hearth-counter',
    specialRequests: '',
    occasion: 'None',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedReservation, setConfirmedReservation] = useState<ConfirmedReservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    { value: '12:30', label: '12:30 PM (Lunch)' },
    { value: '13:30', label: '1:30 PM (Lunch)' },
    { value: '18:30', label: '6:30 PM (First Hearth)' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM (Prime)' },
    { value: '20:00', label: '8:00 PM (Prime)' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:15', label: '9:15 PM (Late Hearth)' },
  ];

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

  const seatingOptions: { id: SeatingArea; label: string; desc: string }[] = [
    {
      id: 'hearth-counter',
      label: 'The Hearth Counter',
      desc: 'Front row seats adjacent to the twin roaring oak grills.',
    },
    {
      id: 'dining-room',
      label: 'Main Dining Room',
      desc: 'Warm espresso banquettes and brass chandeliers.',
    },
    {
      id: 'chefs-table',
      label: "Chef's Table Alcove",
      desc: 'Intimate 8-seat enclave with dedicated sommelier.',
    },
    {
      id: 'verandah',
      label: 'The Verandah',
      desc: 'Open-air courtyard sheltered under heritage trees.',
    },
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full guest name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone contact number is required for SMS arrival updates.';
    }
    if (!formData.date) {
      errs.date = 'Please select a dining date.';
    }
    if (!formData.timeSlot) {
      errs.timeSlot = 'Please select a seating time.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate deliberate brief settling time per constitutional motion guidelines (<200ms)
    setTimeout(() => {
      const generatedCode = `EO-${Math.floor(10000 + Math.random() * 90000)}`;
      const confirmation: ConfirmedReservation = {
        ...formData,
        confirmationId: generatedCode,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setConfirmedReservation(confirmation);
      setIsSubmitting(false);
      if (onReservationComplete) {
        onReservationComplete(confirmation);
      }
    }, 150);
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setErrors({});
  };

  return (
    <section id="reservation" className="py-20 lg:py-32 bg-[#120D0B] border-b border-[rgba(250,246,240,0.08)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4A373] mb-4 font-semibold">
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
            <span>Table Reservations</span>
            <span className="w-6 h-px bg-[#D4A373]/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF6F0] leading-tight mb-4">
            A Place at the <span className="italic text-[#C86446]">Hearth</span>
          </h2>
          <p className="text-[#D9D1C7] text-sm sm:text-base font-light max-w-xl mx-auto">
            We accept reservations up to 30 days in advance. 
            Walk-in dining is reserved for our four walk-up bar perches on a first-come basis.
          </p>
        </div>

        {/* Confirmation State or Interactive Ledger Form */}
        {confirmedReservation ? (
          <div className="bg-[#1A1412] border border-[#C86446]/60 p-8 sm:p-12 shadow-2xl relative">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D4A373] font-semibold mb-4">
              <CheckCircle className="w-4 h-4 text-[#C86446]" />
              <span>Enquiry Logged in Portfolio Showcase</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0] mb-2">
              Reservation Enquiry Registered
            </h3>
            
            <p className="text-sm text-[#D9D1C7] font-light mb-8">
              Thank you, <strong className="text-[#FAF6F0] font-normal">{confirmedReservation.fullName}</strong>. 
              Your dining preference has been recorded.
            </p>

            {/* Receipt Summary Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#120D0B] border border-[rgba(250,246,240,0.08)] mb-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C]">Reference</div>
                <div className="font-mono text-sm text-[#FAF6F0] font-semibold mt-1">
                  {confirmedReservation.confirmationId}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C]">Date &amp; Time</div>
                <div className="text-sm text-[#FAF6F0] mt-1">
                  {confirmedReservation.date} · {confirmedReservation.timeSlot}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C]">Party Size</div>
                <div className="text-sm text-[#FAF6F0] mt-1">
                  {confirmedReservation.partySize} {confirmedReservation.partySize === 1 ? 'Guest' : 'Guests'}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E958C]">Seating</div>
                <div className="text-sm text-[#D4A373] capitalize mt-1">
                  {confirmedReservation.seatingArea.replace('-', ' ')}
                </div>
              </div>
            </div>

            {/* Special Requests and Occasion */}
            {(confirmedReservation.specialRequests || confirmedReservation.occasion !== 'None') && (
              <div className="p-4 bg-[#221F1E] border border-[rgba(250,246,240,0.06)] text-xs text-[#D9D1C7] mb-8 space-y-1">
                {confirmedReservation.occasion !== 'None' && (
                  <div>
                    <span className="text-[#9E958C]">Occasion:</span> {confirmedReservation.occasion}
                  </div>
                )}
                {confirmedReservation.specialRequests && (
                  <div>
                    <span className="text-[#9E958C]">Notes:</span> {confirmedReservation.specialRequests}
                  </div>
                )}
              </div>
            )}

            {/* Clear Portfolio / Ethical Boundary Notice */}
            <div className="p-4 border-l-2 border-[#D4A373] bg-[#221F1E]/60 text-xs text-[#D9D1C7] mb-8 leading-relaxed">
              <strong className="text-[#D4A373] uppercase tracking-wider block mb-1">Portfolio Demonstration Notice</strong>
              This application is an editorial restaurant website portfolio prototype. No actual table has been reserved with an external hospitality provider, and no emails were dispatched. This state is preserved locally for your testing session.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(250,246,240,0.08)]">
              <div className="text-xs text-[#9E958C]">
                Confirmation registered at {confirmedReservation.createdAt} IST
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Make Another Enquiry</span>
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#1A1412] border border-[rgba(250,246,240,0.08)] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10"
          >
            {/* Step 1: Party Size Selection (Tabular Grid Tiles) */}
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-3">
                01 · Select Party Size
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {partySizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData({ ...formData, partySize: size })}
                    className={`py-3 text-sm font-medium transition-colors cursor-pointer border ${
                      formData.partySize === size
                        ? 'bg-[#221F1E] border-[#C86446] text-[#FAF6F0] shadow-[0_0_12px_rgba(200,100,70,0.3)]'
                        : 'bg-[#120D0B] border-[rgba(250,246,240,0.12)] text-[#D9D1C7] hover:border-[#D4A373]/50'
                    }`}
                  >
                    {size} {size === 8 ? '8+' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Time Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="dining-date"
                  className="block text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-2"
                >
                  02 · Dining Date
                </label>
                <div className="relative">
                  <input
                    id="dining-date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-4 py-3 border ${
                      errors.date ? 'border-[#FFB4AB]' : 'border-[rgba(250,246,240,0.2)] focus:border-[#C86446]'
                    } focus:outline-none transition-colors`}
                  />
                </div>
                {errors.date && <p className="text-xs text-[#FFB4AB] mt-1.5">{errors.date}</p>}
              </div>

              <div>
                <label 
                  htmlFor="dining-time"
                  className="block text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-2"
                >
                  03 · Seating Time
                </label>
                <select
                  id="dining-time"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className={`w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-4 py-3 border ${
                    errors.timeSlot ? 'border-[#FFB4AB]' : 'border-[rgba(250,246,240,0.2)] focus:border-[#C86446]'
                  } focus:outline-none transition-colors cursor-pointer`}
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value} className="bg-[#1A1412] text-[#FAF6F0]">
                      {slot.label}
                    </option>
                  ))}
                </select>
                {errors.timeSlot && <p className="text-xs text-[#FFB4AB] mt-1.5">{errors.timeSlot}</p>}
              </div>
            </div>

            {/* Step 3: Seating Atmosphere Selection */}
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-3">
                04 · Preferred Seating Atmosphere
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seatingOptions.map((seat) => (
                  <div
                    key={seat.id}
                    onClick={() => setFormData({ ...formData, seatingArea: seat.id })}
                    className={`p-3.5 border cursor-pointer transition-colors ${
                      formData.seatingArea === seat.id
                        ? 'bg-[#221F1E] border-[#C86446]'
                        : 'bg-[#120D0B] border-[rgba(250,246,240,0.08)] hover:border-[#D4A373]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-serif text-[#FAF6F0] font-medium">{seat.label}</span>
                      <div className={`w-3.5 h-3.5 border flex items-center justify-center ${
                        formData.seatingArea === seat.id ? 'border-[#C86446] bg-[#C86446]' : 'border-[#9E958C]'
                      }`}>
                        {formData.seatingArea === seat.id && <div className="w-1.5 h-1.5 bg-[#FAF6F0]" />}
                      </div>
                    </div>
                    <p className="text-[11px] text-[#9E958C] leading-snug">{seat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Guest Contact Details (Flush Ledger Inputs per Stitch spec) */}
            <div className="pt-4 border-t border-[rgba(250,246,240,0.08)]">
              <label className="block text-xs uppercase tracking-[0.18em] text-[#D4A373] font-semibold mb-6">
                05 · Guest Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="guest-name" className="block text-xs uppercase tracking-[0.15em] text-[#9E958C] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="e.g. Julian Montgomery"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-3 py-2.5 border-b ${
                      errors.fullName ? 'border-[#FFB4AB]' : 'border-[rgba(250,246,240,0.2)] focus:border-[#C86446]'
                    } focus:outline-none transition-colors placeholder:text-[#9E958C]/60`}
                  />
                  {errors.fullName && <p className="text-xs text-[#FFB4AB] mt-1">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="guest-email" className="block text-xs uppercase tracking-[0.15em] text-[#9E958C] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    required
                    placeholder="e.g. julian@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-3 py-2.5 border-b ${
                      errors.email ? 'border-[#FFB4AB]' : 'border-[rgba(250,246,240,0.2)] focus:border-[#C86446]'
                    } focus:outline-none transition-colors placeholder:text-[#9E958C]/60`}
                  />
                  {errors.email && <p className="text-xs text-[#FFB4AB] mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="guest-phone" className="block text-xs uppercase tracking-[0.15em] text-[#9E958C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-3 py-2.5 border-b ${
                      errors.phone ? 'border-[#FFB4AB]' : 'border-[rgba(250,246,240,0.2)] focus:border-[#C86446]'
                    } focus:outline-none transition-colors placeholder:text-[#9E958C]/60`}
                  />
                  {errors.phone && <p className="text-xs text-[#FFB4AB] mt-1">{errors.phone}</p>}
                </div>

                {/* Dining Occasion */}
                <div>
                  <label htmlFor="guest-occasion" className="block text-xs uppercase tracking-[0.15em] text-[#9E958C] mb-1">
                    Occasion (Optional)
                  </label>
                  <select
                    id="guest-occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-3 py-2.5 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="None">Casual / Gathering</option>
                    <option value="Anniversary">Anniversary Celebration</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Business">Business Entertainment</option>
                    <option value="Date Night">Romantic Dinner</option>
                    <option value="Tasting Quest">Chef Tasting Discovery</option>
                  </select>
                </div>
              </div>

              {/* Special Dietary / Allergens */}
              <div className="mt-6">
                <label htmlFor="guest-requests" className="block text-xs uppercase tracking-[0.15em] text-[#9E958C] mb-1">
                  Allergies, Dietary Needs or Special Seating Notes
                </label>
                <textarea
                  id="guest-requests"
                  rows={2}
                  placeholder="e.g. 1 guest is allergic to shellfish; request booth seating if available..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#120D0B] text-sm text-[#FAF6F0] px-3 py-2.5 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none transition-colors placeholder:text-[#9E958C]/60 resize-none"
                />
              </div>
            </div>

            {/* Submission Action & Guarantee */}
            <div className="pt-6 border-t border-[rgba(250,246,240,0.08)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="text-xs text-[#9E958C] max-w-sm">
                No deposit required for parties under 6. Tables are held for 15 minutes past reservation time.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] active:translate-y-px transition-colors cursor-pointer text-center shadow-lg shadow-[#C86446]/20 disabled:opacity-50"
              >
                {isSubmitting ? 'Registering Enquiry...' : 'Submit Reservation Enquiry'}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
