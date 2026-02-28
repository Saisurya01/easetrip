'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { mockFlights, mockHotels } from '@/data/mockData';
import { TravelerDetails } from '@/types';

function BookingReviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const flightId = searchParams.get('flightId');
  const hotelId = searchParams.get('hotelId');
  const travelers = parseInt(searchParams.get('travelers') || '1');
  const guests = parseInt(searchParams.get('guests') || '1');
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const nights = parseInt(searchParams.get('nights') || '1');

  const [travelerDetails, setTravelerDetails] = useState<TravelerDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const flight = useMemo(() => {
    if (flightId) {
      return mockFlights.find(f => f.id === flightId);
    }
    return null;
  }, [flightId]);

  const hotel = useMemo(() => {
    if (hotelId) {
      return mockHotels.find(h => h.id === hotelId);
    }
    return null;
  }, [hotelId]);

  const totalPrice = useMemo(() => {
    if (flight) {
      return flight.price * travelers;
    }
    if (hotel) {
      return hotel.price * nights;
    }
    return 0;
  }, [flight, hotel, travelers, nights]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (flightId) params.set('flightId', flightId);
    if (hotelId) params.set('hotelId', hotelId);
    if (travelers) params.set('travelers', travelers.toString());
    if (guests) params.set('guests', guests.toString());
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (nights) params.set('nights', nights.toString());
    params.set('totalPrice', totalPrice.toString());
    params.set('firstName', travelerDetails.firstName);
    params.set('lastName', travelerDetails.lastName);
    params.set('email', travelerDetails.email);
    params.set('phone', travelerDetails.phone);
    
    router.push(`/booking/payment?${params.toString()}`);
  };

  if (!flight && !hotel) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No item selected</h2>
          <button onClick={() => router.push('/')} className="btn-primary">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Review Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">
                {flight ? 'Flight Details' : 'Hotel Details'}
              </h2>
              
              {flight && (
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{flight.airline}</h3>
                      <p className="text-gray-500">{flight.cabinClass}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary-600">₹{flight.price.toLocaleString()}</p>
                      <p className="text-gray-500 text-sm">per person</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-lg font-bold">{flight.departureTime}</p>
                      <p className="text-gray-600">{flight.from}</p>
                    </div>
                    <div className="flex-1 mx-4 text-center">
                      <p className="text-sm text-gray-500">{flight.duration}</p>
                      <div className="w-full h-0.5 bg-gray-300 relative">
                        <div className="absolute -top-1 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="absolute -top-1 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold">{flight.arrivalTime}</p>
                      <p className="text-gray-600">{flight.to}</p>
                    </div>
                  </div>
                </div>
              )}

              {hotel && (
                <div className="border rounded-lg p-4">
                  <div className="flex gap-4">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <p className="text-gray-500">{hotel.location}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary-600">₹{hotel.price.toLocaleString()}</p>
                      <p className="text-gray-500 text-sm">per night</p>
                    </div>
                  </div>
                  {checkIn && checkOut && (
                    <div className="mt-4 pt-4 border-t text-sm">
                      <p>Check-in: {checkIn}</p>
                      <p>Check-out: {checkOut} ({nights} nights)</p>
                      <p>Guests: {guests}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Traveler Details</h2>
              <form onSubmit={handleContinue}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={travelerDetails.firstName}
                      onChange={(e) => setTravelerDetails({ ...travelerDetails, firstName: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={travelerDetails.lastName}
                      onChange={(e) => setTravelerDetails({ ...travelerDetails, lastName: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={travelerDetails.email}
                      onChange={(e) => setTravelerDetails({ ...travelerDetails, email: e.target.value })}
                      className="input-field"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={travelerDetails.phone}
                      onChange={(e) => setTravelerDetails({ ...travelerDetails, phone: e.target.value })}
                      className="input-field"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Fare Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {flight ? `Flight (${travelers} traveler(s))` : `Hotel (${nights} night(s), ${guests} guest(s))`}
                  </span>
                  <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">₹{(totalPrice * 0.1).toFixed(0)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary-600">₹{(totalPrice * 1.1).toFixed(0)}</span>
                </div>
              </div>
              <button onClick={handleContinue} className="w-full btn-primary py-3">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingReviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <BookingReviewContent />
    </Suspense>
  );
}
