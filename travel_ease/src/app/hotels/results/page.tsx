'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, Suspense, useEffect, useState } from 'react';
import { getAllHotels } from '@/lib/firebaseService';
import { Hotel } from '@/types';

function HotelResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  
  const destination = searchParams.get('destination') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const guests = parseInt(searchParams.get('guests') || '1');

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getAllHotels();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, []);

  const filteredHotels = useMemo(() => {
    return hotels.filter(
      (hotel) => hotel.location?.toLowerCase() === destination.toLowerCase()
    );
  }, [hotels, destination]);

  const nights = useMemo(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    }
    return 1;
  }, [checkIn, checkOut]);

  const handleBook = (hotel: Hotel) => {
    const params = new URLSearchParams({
      hotelId: hotel.id,
      guests: guests.toString(),
      checkIn,
      checkOut,
      nights: nights.toString(),
    });
    router.push(`/booking/review?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hotels...</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No search criteria</h2>
          <p className="text-gray-600 mb-6">Please search for hotels first.</p>
          <button onClick={() => router.push('/hotels')} className="btn-primary">
            Search Hotels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Hotels in {destination}
          </h1>
          <p className="text-gray-600">{guests} guest(s), {nights} night(s)</p>
        </div>

        {filteredHotels.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h2>
            <p className="text-gray-600 mb-6">Try different destination</p>
            <button onClick={() => router.push('/hotels')} className="btn-primary">
              Modify Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{hotel.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities?.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary-600">₹{hotel.price?.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm"> / night</span>
                    </div>
                    <button
                      onClick={() => handleBook(hotel)}
                      className="btn-primary"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <button onClick={() => router.push('/hotels')} className="btn-secondary">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HotelResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <HotelResultsContent />
    </Suspense>
  );
}
