'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllFeaturedTrips } from '@/lib/firebaseService';
import { FeaturedTrip } from '@/types';

export function FeaturedTrips() {
  const [trips, setTrips] = useState<FeaturedTrip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const data = await getAllFeaturedTrips();
        setTrips(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching featured trips:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrips();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Trips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated travel packages designed for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                  {trip.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trip.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">₹{trip.price?.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm"> / person</span>
                  </div>
                  <Link
                    href={`/featured-trips?trip=${trip.id}`}
                    className="btn-primary text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/featured-trips" className="btn-secondary inline-block">
            View All Trips
          </Link>
        </div>
      </div>
    </section>
  );
}
