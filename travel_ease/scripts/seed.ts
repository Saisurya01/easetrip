import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB78QXNd_DMYdr4kZlaOvR54kyF9k6txGE",
  authDomain: "easetrip-clone.firebaseapp.com",
  projectId: "easetrip-clone",
  storageBucket: "easetrip-clone.firebasestorage.app",
  messagingSenderId: "1080457091843",
  appId: "1:1080457091843:web:eca41aa62cd6c80ba36736",
  measurementId: "G-V5YHT6CF27"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const flights = [
  { airline: 'IndiGo', from: 'Delhi', to: 'Mumbai', departureTime: '06:00', arrivalTime: '08:15', duration: '2h 15m', price: 4500, stops: 0, cabinClass: 'Economy' },
  { airline: 'Air India', from: 'Delhi', to: 'Mumbai', departureTime: '09:30', arrivalTime: '11:45', duration: '2h 15m', price: 5200, stops: 0, cabinClass: 'Economy' },
  { airline: 'SpiceJet', from: 'Bangalore', to: 'Chennai', departureTime: '07:00', arrivalTime: '08:10', duration: '1h 10m', price: 2500, stops: 0, cabinClass: 'Economy' },
  { airline: 'Vistara', from: 'Hyderabad', to: 'Goa', departureTime: '08:00', arrivalTime: '09:30', duration: '1h 30m', price: 3500, stops: 0, cabinClass: 'Economy' },
  { airline: 'Air Asia', from: 'Kolkata', to: 'Delhi', departureTime: '11:00', arrivalTime: '13:30', duration: '2h 30m', price: 4200, stops: 0, cabinClass: 'Economy' },
];

const hotels = [
  { name: 'Taj Palace Hotel', location: 'Mumbai', price: 8500, rating: 4.8, amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym'], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
  { name: 'The Leela Palace', location: 'Delhi', price: 12000, rating: 4.9, amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'], image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800' },
  { name: 'Beach Resort Goa', location: 'Goa', price: 5500, rating: 4.5, amenities: ['Free WiFi', 'Beach Access', 'Pool', 'Restaurant'], image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800' },
  { name: 'Radisson Blu', location: 'Bangalore', price: 6500, rating: 4.4, amenities: ['Free WiFi', 'Pool', 'Restaurant', 'Gym'], image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800' },
  { name: 'Hyatt Regency', location: 'Hyderabad', price: 7200, rating: 4.6, amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym'], image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800' },
];

const featuredTrips = [
  { name: 'Goa Beach Escape', description: '3 nights, 4 days of sun, sand, and relaxation at the most beautiful beaches of Goa. Includes beachside accommodation and guided tours.', price: 15000, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', duration: '3N / 4D' },
  { name: 'Dubai Luxury Tour', description: 'Experience the glitz and glamour of Dubai with 4 nights of luxury. Visit Burj Khalifa, Desert Safari, and more.', price: 45000, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', duration: '4N / 5D' },
  { name: 'Bali Honeymoon', description: 'Romantic 5-night escape to Bali with private pool villas, candlelight dinners, and spa treatments.', price: 55000, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', duration: '5N / 6D' },
  { name: 'Kashmir Paradise', description: 'Discover the heaven on earth with 4 nights in Srinagar, Gulmarg, and Pahalgam. Houseboat stay included.', price: 35000, image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800', duration: '4N / 5D' },
  { name: 'Andaman Adventure', description: 'Explore the pristine beaches and crystal-clear waters of Andaman Islands. 5 nights of adventure and relaxation.', price: 42000, image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800', duration: '5N / 6D' },
  { name: 'Rajasthan Heritage', description: 'Immerse yourself in the royal heritage of Rajasthan. Visit Jaipur, Udaipur, and Jaisalmer with palace stays.', price: 38000, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800', duration: '5N / 6D' },
];

async function clearCollection(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  for (const doc of snapshot.docs) {
    await deleteDoc(doc.ref);
  }
}

async function seedData() {
  console.log('Clearing existing data...');
  await clearCollection('flights');
  await clearCollection('hotels');
  await clearCollection('featuredTrips');
  
  console.log('Seeding Firestore...');
  
  for (const flight of flights) {
    await addDoc(collection(db, 'flights'), { ...flight, createdAt: new Date().toISOString() });
    console.log(`Added flight: ${flight.airline} - ${flight.from} to ${flight.to}`);
  }
  
  for (const hotel of hotels) {
    await addDoc(collection(db, 'hotels'), { ...hotel, createdAt: new Date().toISOString() });
    console.log(`Added hotel: ${hotel.name}`);
  }
  
  for (const trip of featuredTrips) {
    await addDoc(collection(db, 'featuredTrips'), { ...trip, createdAt: new Date().toISOString() });
    console.log(`Added trip: ${trip.name}`);
  }
  
  console.log('Seeding complete!');
  console.log(`- ${flights.length} flights`);
  console.log(`- ${hotels.length} hotels`);
  console.log(`- ${featuredTrips.length} featured trips`);
}

seedData().catch(console.error);
