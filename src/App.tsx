import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { ChefStory } from './components/ChefStory';
import { PrivateDining } from './components/PrivateDining';
import { ReservationSection } from './components/ReservationSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { ReservationModal } from './components/ReservationModal';
import { Dish } from './types/restaurant';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [reservationDishName, setReservationDishName] = useState<string | undefined>(undefined);

  const handleOpenReservation = (dishName?: string) => {
    setReservationDishName(dishName);
    setIsReservationModalOpen(true);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDishReserve = (dish: Dish) => {
    handleOpenReservation(dish.name);
  };

  return (
    <div className="min-h-screen bg-[#120D0B] text-[#FAF6F0] selection:bg-[#C86446] selection:text-white flex flex-col font-sans">
      {/* 3-Zone Top Bar Contract Navbar */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => handleOpenReservation()}
          onExploreMenu={handleExploreMenu}
        />

        {/* Philosophy & The Wood Trinity */}
        <Philosophy />

        {/* 3-Column Signature Dishes */}
        <SignatureDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Full Interactive Menu & Tasting Experience */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Origins, Master Blacksmith Grill & Chef Team */}
        <ChefStory />

        {/* Private Dining & Sommelier Vault */}
        <PrivateDining onOpenReservation={() => handleOpenReservation('Private Dining')} />

        {/* Reservation Enquiry Form */}
        <ReservationSection />

        {/* Location & Opening Hours */}
        <LocationHours />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Interactive Dish Quick-View Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserve={handleDishReserve}
      />

      {/* Interactive Global Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => {
          setIsReservationModalOpen(false);
          setReservationDishName(undefined);
        }}
        preferredDishName={reservationDishName}
      />
    </div>
  );
}
