export type DishCategory = 
  | 'all'
  | 'starters'
  | 'hearth-mains'
  | 'coastal'
  | 'foraged-sides'
  | 'desserts'
  | 'cellar';

export type DietaryTag = 
  | 'Wood-Fired'
  | 'Aged 45 Days'
  | 'Signature'
  | 'Vegetarian'
  | 'Gluten-Free'
  | 'Coastal Catch'
  | 'Chef Choice';

export interface Dish {
  id: string;
  name: string;
  subtitle: string;
  priceINR: number;
  category: DishCategory;
  tags: DietaryTag[];
  description: string;
  provenance: string;
  woodType: 'White Oak' | 'Applewood' | 'Hickory' | 'Mesquite Embers';
  winePairing: string;
  temperature: string;
  allergens?: string[];
  isSignature?: boolean;
  imageSrc?: string;
}

export type SeatingArea = 
  | 'hearth-counter'
  | 'dining-room'
  | 'chefs-table'
  | 'verandah';

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  partySize: number;
  seatingArea: SeatingArea;
  specialRequests: string;
  occasion: string;
}

export interface ConfirmedReservation extends ReservationFormData {
  confirmationId: string;
  createdAt: string;
}
