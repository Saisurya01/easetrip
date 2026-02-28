import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Flight, Hotel, Booking, FeaturedTrip } from '@/types';

// Flights
export const flightsRef = collection(db, 'flights');

export const getAllFlights = async (): Promise<Flight[]> => {
  const snapshot = await getDocs(flightsRef);
  const flights = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Flight));
  return flights.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });
};

export const addFlight = async (flight: Omit<Flight, 'id'>) => {
  const docRef = await addDoc(flightsRef, {
    ...flight,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

export const updateFlight = async (id: string, flight: Partial<Flight>) => {
  await updateDoc(doc(db, 'flights', id), flight);
};

export const deleteFlight = async (id: string) => {
  await deleteDoc(doc(db, 'flights', id));
};

// Hotels
export const hotelsRef = collection(db, 'hotels');

export const getAllHotels = async (): Promise<Hotel[]> => {
  const snapshot = await getDocs(hotelsRef);
  const hotels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Hotel));
  return hotels.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });
};

export const getHotelsByLocation = async (location: string): Promise<Hotel[]> => {
  const snapshot = await getDocs(hotelsRef);
  const hotels = snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() } as Hotel))
    .filter(hotel => hotel.location?.toLowerCase() === location.toLowerCase());
  return hotels;
};

export const addHotel = async (hotel: Omit<Hotel, 'id'>) => {
  const docRef = await addDoc(hotelsRef, {
    ...hotel,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

export const updateHotel = async (id: string, hotel: Partial<Hotel>) => {
  await updateDoc(doc(db, 'hotels', id), hotel);
};

export const deleteHotel = async (id: string) => {
  await deleteDoc(doc(db, 'hotels', id));
};

// Bookings
export const bookingsRef = collection(db, 'bookings');

export const getBookingsByUser = async (userId: string): Promise<Booking[]> => {
  const snapshot = await getDocs(bookingsRef);
  const bookings = snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() } as Booking))
    .filter(booking => booking.userId === userId);
  return bookings.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });
};

export const createBooking = async (booking: Omit<Booking, 'id'>) => {
  const docRef = await addDoc(bookingsRef, {
    ...booking,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

export const cancelBooking = async (id: string) => {
  await updateDoc(doc(db, 'bookings', id), { status: 'cancelled' });
};

// Featured Trips
export const featuredTripsRef = collection(db, 'featuredTrips');

export const getAllFeaturedTrips = async (): Promise<FeaturedTrip[]> => {
  const snapshot = await getDocs(featuredTripsRef);
  const trips = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FeaturedTrip));
  return trips.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });
};

export const addFeaturedTrip = async (trip: Omit<FeaturedTrip, 'id'>) => {
  const docRef = await addDoc(featuredTripsRef, {
    ...trip,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

export const updateFeaturedTrip = async (id: string, trip: Partial<FeaturedTrip>) => {
  await updateDoc(doc(db, 'featuredTrips', id), trip);
};

export const deleteFeaturedTrip = async (id: string) => {
  await deleteDoc(doc(db, 'featuredTrips', id));
};
