'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { getAllFlights, getAllHotels, addFlight, updateFlight, deleteFlight, addHotel, updateHotel, deleteHotel } from '@/lib/firebaseService';
import { Flight, Hotel } from '@/types';

export default function AdminPage() {
  const router = useRouter();
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');
  const [editingFlight, setEditingFlight] = useState<Flight | null>(null);
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);
  const [showAddFlight, setShowAddFlight] = useState(false);
  const [showAddHotel, setShowAddHotel] = useState(false);

  const [flightForm, setFlightForm] = useState<Partial<Flight>>({
    airline: '',
    from: '',
    to: '',
    departureTime: '',
    arrivalTime: '',
    duration: '',
    price: 0,
    stops: 0,
    cabinClass: 'Economy',
  });

  const [hotelForm, setHotelForm] = useState<{name: string; location: string; price: number; rating: number; amenities: string | string[]; image: string}>({
    name: '',
    location: '',
    price: 0,
    rating: 0,
    amenities: '',
    image: '',
  });

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      router.push('/');
    }
  }, [user, isAdmin, authLoading, router]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [flightsData, hotelsData] = await Promise.all([
          getAllFlights(),
          getAllHotels(),
        ]);
        setFlights(flightsData);
        setHotels(hotelsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const handleAddFlight = async () => {
    try {
      await addFlight(flightForm as Omit<Flight, 'id'>);
      const updatedFlights = await getAllFlights();
      setFlights(updatedFlights);
      setShowAddFlight(false);
      setFlightForm({
        airline: '',
        from: '',
        to: '',
        departureTime: '',
        arrivalTime: '',
        duration: '',
        price: 0,
        stops: 0,
        cabinClass: 'Economy',
      });
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  const handleUpdateFlight = async () => {
    if (editingFlight) {
      try {
        await updateFlight(editingFlight.id, editingFlight);
        const updatedFlights = await getAllFlights();
        setFlights(updatedFlights);
        setEditingFlight(null);
      } catch (error) {
        console.error('Error updating flight:', error);
      }
    }
  };

  const handleDeleteFlight = async (id: string) => {
    if (confirm('Are you sure you want to delete this flight?')) {
      try {
        await deleteFlight(id);
        setFlights(prev => prev.filter(f => f.id !== id));
      } catch (error) {
        console.error('Error deleting flight:', error);
      }
    }
  };

  const handleAddHotel = async () => {
    try {
      const amenities = typeof hotelForm.amenities === 'string' 
        ? hotelForm.amenities.split(',').map(a => a.trim())
        : hotelForm.amenities || [];
      
      await addHotel({ ...hotelForm, amenities } as Omit<Hotel, 'id'>);
      const updatedHotels = await getAllHotels();
      setHotels(updatedHotels);
      setShowAddHotel(false);
      setHotelForm({
        name: '',
        location: '',
        price: 0,
        rating: 0,
        amenities: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding hotel:', error);
    }
  };

  const handleUpdateHotel = async () => {
    if (editingHotel) {
      try {
        await updateHotel(editingHotel.id, editingHotel);
        const updatedHotels = await getAllHotels();
        setHotels(updatedHotels);
        setEditingHotel(null);
      } catch (error) {
        console.error('Error updating hotel:', error);
      }
    }
  };

  const handleDeleteHotel = async (id: string) => {
    if (confirm('Are you sure you want to delete this hotel?')) {
      try {
        await deleteHotel(id);
        setHotels(prev => prev.filter(h => h.id !== id));
      } catch (error) {
        console.error('Error deleting hotel:', error);
      }
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-primary-600">{flights.length}</p>
            <p className="text-gray-600">Total Flights</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-primary-600">{hotels.length}</p>
            <p className="text-gray-600">Total Hotels</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-primary-600">{flights.length + hotels.length}</p>
            <p className="text-gray-600">Total Listings</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('flights')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'flights'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Flights ({flights.length})
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'hotels'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Hotels ({hotels.length})
          </button>
        </div>

        {activeTab === 'flights' && (
          <div>
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowAddFlight(true)} className="btn-primary">
                Add Flight
              </button>
            </div>

            {showAddFlight && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Flight</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Airline"
                    value={flightForm.airline}
                    onChange={(e) => setFlightForm({ ...flightForm, airline: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="From"
                    value={flightForm.from}
                    onChange={(e) => setFlightForm({ ...flightForm, from: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    value={flightForm.to}
                    onChange={(e) => setFlightForm({ ...flightForm, to: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={flightForm.duration}
                    onChange={(e) => setFlightForm({ ...flightForm, duration: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={flightForm.price}
                    onChange={(e) => setFlightForm({ ...flightForm, price: parseInt(e.target.value) })}
                    className="input-field"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleAddFlight} className="btn-primary">Save</button>
                    <button onClick={() => setShowAddFlight(false)} className="btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Airline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {flights.map((flight) => (
                    <tr key={flight.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{flight.airline}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{flight.from} → {flight.to}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{flight.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap">₹{flight.price?.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setEditingFlight(flight)}
                          className="text-primary-600 hover:text-primary-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteFlight(flight.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {editingFlight && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full">
                  <h2 className="text-xl font-semibold mb-4">Edit Flight</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Airline"
                      value={editingFlight.airline}
                      onChange={(e) => setEditingFlight({ ...editingFlight, airline: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="From"
                      value={editingFlight.from}
                      onChange={(e) => setEditingFlight({ ...editingFlight, from: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      value={editingFlight.to}
                      onChange={(e) => setEditingFlight({ ...editingFlight, to: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      value={editingFlight.duration}
                      onChange={(e) => setEditingFlight({ ...editingFlight, duration: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={editingFlight.price}
                      onChange={(e) => setEditingFlight({ ...editingFlight, price: parseInt(e.target.value) })}
                      className="input-field"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button onClick={handleUpdateFlight} className="btn-primary">Save Changes</button>
                    <button onClick={() => setEditingFlight(null)} className="btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'hotels' && (
          <div>
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowAddHotel(true)} className="btn-primary">
                Add Hotel
              </button>
            </div>

            {showAddHotel && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Hotel</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Hotel Name"
                    value={hotelForm.name}
                    onChange={(e) => setHotelForm({ ...hotelForm, name: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={hotelForm.location}
                    onChange={(e) => setHotelForm({ ...hotelForm, location: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="number"
                    placeholder="Price per night"
                    value={hotelForm.price}
                    onChange={(e) => setHotelForm({ ...hotelForm, price: parseInt(e.target.value) })}
                    className="input-field"
                  />
                  <input
                    type="number"
                    placeholder="Rating (0-5)"
                    value={hotelForm.rating}
                    onChange={(e) => setHotelForm({ ...hotelForm, rating: parseFloat(e.target.value) })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={hotelForm.image}
                    onChange={(e) => setHotelForm({ ...hotelForm, image: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Amenities (comma separated)"
                    value={typeof hotelForm.amenities === 'string' ? hotelForm.amenities : ''}
                    onChange={(e) => setHotelForm({ ...hotelForm, amenities: e.target.value })}
                    className="input-field"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleAddHotel} className="btn-primary">Save</button>
                    <button onClick={() => setShowAddHotel(false)} className="btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <span className="flex items-center gap-1 text-sm">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {hotel.rating}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>
                    <p className="text-primary-600 font-bold mb-4">₹{hotel.price?.toLocaleString()}/night</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingHotel(hotel)}
                        className="text-primary-600 hover:text-primary-900 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteHotel(hotel.id)}
                        className="text-red-600 hover:text-red-900 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {editingHotel && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full">
                  <h2 className="text-xl font-semibold mb-4">Edit Hotel</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Hotel Name"
                      value={editingHotel.name}
                      onChange={(e) => setEditingHotel({ ...editingHotel, name: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={editingHotel.location}
                      onChange={(e) => setEditingHotel({ ...editingHotel, location: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="number"
                      placeholder="Price per night"
                      value={editingHotel.price}
                      onChange={(e) => setEditingHotel({ ...editingHotel, price: parseInt(e.target.value) })}
                      className="input-field"
                    />
                    <input
                      type="number"
                      placeholder="Rating (0-5)"
                      value={editingHotel.rating}
                      onChange={(e) => setEditingHotel({ ...editingHotel, rating: parseFloat(e.target.value) })}
                      className="input-field"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button onClick={handleUpdateHotel} className="btn-primary">Save Changes</button>
                    <button onClick={() => setEditingHotel(null)} className="btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
