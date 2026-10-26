import React, { useState } from 'react';
import { ReservationFormData, SeatingArea, ConfirmedReservation } from '../types/restaurant';
import { X, Calendar, Clock, CheckCircle, RefreshCw } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferredDishName?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preferredDishName,
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '19:30',
    partySize: 2,
    seatingArea: 'hearth-counter',
    specialRequests: preferredDishName ? `Guest requested signature dish: ${preferredDishName}` : '',
    occasion: 'None',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<ConfirmedReservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

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

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full guest name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone contact is required.';
    if (!formData.date) errs.date = 'Date is required.';
    if (!formData.timeSlot) errs.timeSlot = 'Time slot is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedCode = `EO-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmation({
        ...formData,
        confirmationId: generatedCode,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      setIsSubmitting(false);
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#1A1412] border border-[rgba(250,246,240,0.12)] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#FAF6F0] hover:text-[#C86446] w-9 h-9 border border-[rgba(250,246,240,0.12)] bg-[#120D0B] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close reservation modal"
        >
          <X className="w-4 h-4" />
        </button>

        {confirmation ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4A373] font-semibold mb-3">
              <CheckCircle className="w-4 h-4 text-[#C86446]" />
              <span>Enquiry Logged</span>
            </div>

            <h3 className="font-serif text-2xl text-[#FAF6F0] mb-2">
              Reservation Enquiry Registered
            </h3>

            <p className="text-xs sm:text-sm text-[#D9D1C7] font-light mb-6">
              Thank you, <strong className="text-[#FAF6F0] font-normal">{confirmation.fullName}</strong>. Your enquiry details have been recorded.
            </p>

            <div className="p-4 bg-[#120D0B] border border-[rgba(250,246,240,0.08)] grid grid-cols-2 gap-3 text-xs mb-6">
              <div>
                <span className="text-[#9E958C]">Reference:</span>{' '}
                <span className="font-mono text-[#FAF6F0] font-medium">{confirmation.confirmationId}</span>
              </div>
              <div>
                <span className="text-[#9E958C]">Party Size:</span>{' '}
                <span className="text-[#FAF6F0]">{confirmation.partySize} Guests</span>
              </div>
              <div>
                <span className="text-[#9E958C]">Date:</span>{' '}
                <span className="text-[#FAF6F0]">{confirmation.date}</span>
              </div>
              <div>
                <span className="text-[#9E958C]">Time:</span>{' '}
                <span className="text-[#FAF6F0]">{confirmation.timeSlot}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#9E958C]">Seating Area:</span>{' '}
                <span className="text-[#D4A373] capitalize">{confirmation.seatingArea.replace('-', ' ')}</span>
              </div>
            </div>

            <div className="p-3 border-l-2 border-[#D4A373] bg-[#221F1E] text-[11px] text-[#D9D1C7] mb-6">
              <strong className="text-[#D4A373] block mb-1">Portfolio Demonstration Mode</strong>
              This is a demonstration portfolio prototype. No actual table was booked at an external restaurant system.
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors cursor-pointer text-center"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4A373] font-semibold mb-1">
                <span>Direct Table Booking</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FAF6F0]">
                Reserve a Table at the Hearth
              </h3>
              {preferredDishName && (
                <div className="text-xs text-[#C86446] mt-1 font-serif italic">
                  Noting interest in: {preferredDishName}
                </div>
              )}
            </div>

            {/* Party Size */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-[#9E958C] mb-2">
                Guests
              </label>
              <div className="grid grid-cols-8 gap-1.5">
                {partySizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData({ ...formData, partySize: size })}
                    className={`py-2 text-xs font-medium border cursor-pointer ${
                      formData.partySize === size
                        ? 'bg-[#221F1E] border-[#C86446] text-[#FAF6F0]'
                        : 'bg-[#120D0B] border-[rgba(250,246,240,0.1)] text-[#D9D1C7]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="modal-date"
                  className="block text-[11px] uppercase tracking-[0.18em] text-[#9E958C] mb-1.5"
                >
                  Date
                </label>
                <input
                  id="modal-date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none"
                />
                {errors.date && <p className="text-[11px] text-[#FFB4AB] mt-1">{errors.date}</p>}
              </div>

              <div>
                <label 
                  htmlFor="modal-time"
                  className="block text-[11px] uppercase tracking-[0.18em] text-[#9E958C] mb-1.5"
                >
                  Time Slot
                </label>
                <select
                  id="modal-time"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value} className="bg-[#1A1412] text-[#FAF6F0]">
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Info */}
            <div className="space-y-3 pt-2 border-t border-[rgba(250,246,240,0.08)]">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none placeholder:text-[#9E958C]"
                />
                {errors.fullName && <p className="text-[11px] text-[#FFB4AB] mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none placeholder:text-[#9E958C]"
                  />
                  {errors.email && <p className="text-[11px] text-[#FFB4AB] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none placeholder:text-[#9E958C]"
                  />
                  {errors.phone && <p className="text-[11px] text-[#FFB4AB] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Special requests or allergies..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#120D0B] text-xs text-[#FAF6F0] px-3 py-2 border-b border-[rgba(250,246,240,0.2)] focus:border-[#C86446] focus:outline-none placeholder:text-[#9E958C]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(250,246,240,0.08)] flex items-center justify-between gap-4">
              <span className="text-[11px] text-[#9E958C]">
                Portfolio demo reservation
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] bg-[#C86446] hover:bg-[#B35438] transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
