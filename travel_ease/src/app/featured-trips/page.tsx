'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, Suspense, useEffect, useState } from 'react';
import { getAllFeaturedTrips } from '@/lib/firebaseService';
import { FeaturedTrip } from '@/types';

function FeaturedTripsContent() {
  const searchParams = useSearchParams();
  const [trips, setTrips] = useState<FeaturedTrip[]>([]);
  const [loading, setLoading] = useState(true);
  const tripId = searchParams.get('trip');

  useEffect(() => {
    async function fetchTrips() {
      try {
        const data = await getAllFeaturedTrips();
        setTrips(data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrips();
  }, []);

  const selectedTrip = useMemo(() => {
    if (tripId && trips.length > 0) {
      return trips.find(t => t.id === tripId);
    }
    return null;
  }, [tripId, trips]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading trips...</p>
        </div>
      </div>
    );
  }

  if (selectedTrip) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-80">
              <img
                src={selectedTrip.image}
                alt={selectedTrip.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedTrip.duration}
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedTrip.name}</h1>
              <p className="text-gray-600 mb-6">{selectedTrip.description}</p>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-500">Starting from</p>
                    <p className="text-3xl font-bold text-primary-600">₹{selectedTrip.price?.toLocaleString()}</p>
                    <p className="text-gray-500 text-sm">per person</p>
                  </div>
                  <button className="btn-primary py-3 px-8 text-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Trips</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {trip.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trip.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary-600">₹{trip.price?.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm"> / person</span>
                  </div>
                  <a
                    href={`/featured-trips?trip=${trip.id}`}
                    className="btn-primary text-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedTripsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <FeaturedTripsContent />
    </Suspense>
  );
}
