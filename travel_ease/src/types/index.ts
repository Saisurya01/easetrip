export interface Flight {
  id: string;
  airline: string;
  airlineLogo?: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
  cabinClass: string;
  createdAt?: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
  image: string;
  description?: string;
  createdAt?: string;
}

export interface Booking {
  id: string;
  userId: string;
  type: 'flight' | 'hotel';
  flight?: Flight;
  hotel?: Hotel;
  checkIn?: string;
  checkOut?: string;
  travelers?: number;
  guests?: number;
  totalPrice: number;
  date: string;
  status: 'confirmed' | 'cancelled';
  travelerDetails?: TravelerDetails;
  createdAt?: string;
}

export interface TravelerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface FeaturedTrip {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  createdAt?: string;
}

export interface SearchFlightParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  travelers: number;
  cabinClass: string;
}

export interface SearchHotelParams {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
