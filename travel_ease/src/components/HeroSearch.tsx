'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cities } from '@/data/mockData';

export function HeroSearch() {
  const router = useRouter();
  const [searchType, setSearchType] = useState<'flights' | 'hotels'>('flights');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');
  
  // Hotel fields
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchType === 'flights') {
      const params = new URLSearchParams({
        from,
        to,
        departureDate,
        returnDate,
        travelers: travelers.toString(),
        cabinClass,
      });
      router.push(`/flights?${params.toString()}`);
    } else {
      const params = new URLSearchParams({
        destination,
        checkIn,
        checkOut,
        guests: guests.toString(),
      });
      router.push(`/hotels?${params.toString()}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600">
            Book flights and hotels at the best prices
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSearchType('flights')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchType === 'flights'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Flights
            </button>
            <button
              onClick={() => setSearchType('hotels')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchType === 'hotels'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Hotels
            </button>
          </div>

          <form onSubmit={handleSearch}>
            {searchType === 'flights' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return (Optional)</label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
                <div className="lg:col-span-6">
                  <button type="submit" className="w-full btn-primary py-3 text-lg">
                    Search Flights
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                  <button type="submit" className="w-full btn-primary py-2">
                    Search Hotels
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
