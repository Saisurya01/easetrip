'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, Suspense, useEffect, useState } from 'react';
import { getAllFlights } from '@/lib/firebaseService';
import { Flight } from '@/types';

function FlightResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const travelers = parseInt(searchParams.get('travelers') || '1');

  useEffect(() => {
    async function fetchFlights() {
      try {
        const data = await getAllFlights();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchFlights();
  }, []);

  const filteredFlights = useMemo(() => {
    return flights.filter(
      (flight) => flight.from.toLowerCase() === from.toLowerCase() && 
                  flight.to.toLowerCase() === to.toLowerCase()
    );
  }, [flights, from, to]);

  const handleBook = (flight: Flight) => {
    const params = new URLSearchParams({
      flightId: flight.id,
      travelers: travelers.toString(),
    });
    router.push(`/booking/review?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading flights...</p>
        </div>
      </div>
    );
  }

  if (!from || !to) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No search criteria</h2>
          <p className="text-gray-600 mb-6">Please search for flights first.</p>
          <button onClick={() => router.push('/flights')} className="btn-primary">
            Search Flights
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
            Flights from {from} to {to}
          </h1>
          <p className="text-gray-600">{travelers} traveler(s)</p>
        </div>

        {filteredFlights.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No flights found</h2>
            <p className="text-gray-600 mb-6">Try different search criteria</p>
            <button onClick={() => router.push('/flights')} className="btn-primary">
              Modify Search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFlights.map((flight) => (
              <div key={flight.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">{flight.airline?.slice(0, 2)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
                      <p className="text-sm text-gray-500">{flight.cabinClass}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">{flight.departureTime}</p>
                      <p className="text-sm text-gray-500">{flight.from}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs text-gray-500">{flight.duration}</p>
                      <div className="w-24 h-0.5 bg-gray-300 relative">
                        <div className="absolute -top-1 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">{flight.arrivalTime}</p>
                      <p className="text-sm text-gray-500">{flight.to}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">₹{flight.price?.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <button
                      onClick={() => handleBook(flight)}
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
          <button onClick={() => router.push('/flights')} className="btn-secondary">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FlightResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <FlightResultsContent />
    </Suspense>
  );
}
