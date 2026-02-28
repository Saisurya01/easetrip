import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Flight, Hotel, Booking } from '@/types';

interface BookingState {
  flights: Flight[];
  hotels: Hotel[];
  bookings: Booking[];
  selectedFlight: Flight | null;
  selectedHotel: Hotel | null;
  addFlight: (flight: Flight) => void;
  updateFlight: (id: string, flight: Partial<Flight>) => void;
  deleteFlight: (id: string) => void;
  addHotel: (hotel: Hotel) => void;
  updateHotel: (id: string, hotel: Partial<Hotel>) => void;
  deleteHotel: (id: string) => void;
  setSelectedFlight: (flight: Flight | null) => void;
  setSelectedHotel: (hotel: Hotel | null) => void;
  addBooking: (booking: Booking) => void;
  cancelBooking: (id: string) => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      flights: [],
      hotels: [],
      bookings: [],
      selectedFlight: null,
      selectedHotel: null,

      addFlight: (flight) =>
        set((state) => ({ flights: [...state.flights, flight] })),

      updateFlight: (id, updatedFlight) =>
        set((state) => ({
          flights: state.flights.map((f) =>
            f.id === id ? { ...f, ...updatedFlight } : f
          ),
        })),

      deleteFlight: (id) =>
        set((state) => ({
          flights: state.flights.filter((f) => f.id !== id),
        })),

      addHotel: (hotel) =>
        set((state) => ({ hotels: [...state.hotels, hotel] })),

      updateHotel: (id, updatedHotel) =>
        set((state) => ({
          hotels: state.hotels.map((h) =>
            h.id === id ? { ...h, ...updatedHotel } : h
          ),
        })),

      deleteHotel: (id) =>
        set((state) => ({
          hotels: state.hotels.filter((h) => h.id !== id),
        })),

      setSelectedFlight: (flight) => set({ selectedFlight: flight }),

      setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),

      addBooking: (booking) =>
        set((state) => ({ bookings: [...state.bookings, booking] })),

      cancelBooking: (id) =>
        set((state) => ({
          bookings: state.bookings.map((b) =>
            b.id === id ? { ...b, status: 'cancelled' as const } : b
          ),
        })),
    }),
    {
      name: 'travelease-storage',
    }
  )
);
