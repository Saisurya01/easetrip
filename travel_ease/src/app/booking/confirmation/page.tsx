'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, Suspense } from 'react';
import { getAllFlights, getAllHotels, createBooking } from '@/lib/firebaseService';
import { useAuth } from '@/lib/AuthContext';
import { Booking, Flight, Hotel } from '@/types';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  
  const bookingId = searchParams.get('bookingId') || '';
  const totalPrice = parseInt(searchParams.get('totalPrice') || '0');
  const firstName = searchParams.get('firstName') || '';
  const lastName = searchParams.get('lastName') || '';
  const email = searchParams.get('email') || '';
  const flightId = searchParams.get('flightId');
  const hotelId = searchParams.get('hotelId');
  const travelers = searchParams.get('travelers');
  const guests = searchParams.get('guests');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const nights = searchParams.get('nights');

  const [flight, setFlight] = useState<Flight | null>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (flightId) {
          const flights = await getAllFlights();
          const foundFlight = flights.find(f => f.id === flightId);
          setFlight(foundFlight || null);
        }
        if (hotelId) {
          const hotels = await getAllHotels();
          const foundHotel = hotels.find(h => h.id === hotelId);
          setHotel(foundHotel || null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [flightId, hotelId]);

  const finalAmount = Math.round(totalPrice * 1.1);

  useEffect(() => {
    async function saveBooking() {
      if (!user) return;
      
      const booking: Omit<Booking, 'id'> = {
        userId: user.uid,
        type: flight ? 'flight' : 'hotel',
        flight: flight || undefined,
        hotel: hotel || undefined,
        checkIn: checkIn || undefined,
        checkOut: checkOut || undefined,
        travelers: travelers ? parseInt(travelers) : undefined,
        guests: guests ? parseInt(guests) : undefined,
        totalPrice: finalAmount,
        date: new Date().toISOString().split('T')[0],
        status: 'confirmed',
        travelerDetails: {
          firstName,
          lastName,
          email,
          phone: '',
        },
      };
      
      try {
        await createBooking(booking);
      } catch (error) {
        console.error('Error saving booking:', error);
      }
    }
    
    if (user && (flight || hotel)) {
      saveBooking();
    }
  }, [user, flight, hotel]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please login to continue</h2>
          <button onClick={() => router.push('/login')} className="btn-primary">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">Your booking has been successfully processed.</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Booking ID</p>
            <p className="text-xl font-bold text-primary-600">{bookingId}</p>
          </div>

          <div className="text-left border-t pt-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
            
            {flight && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Flight</span>
                  <span className="font-medium">{flight.airline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Route</span>
                  <span className="font-medium">{flight.from} → {flight.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{flight.departureTime} - {flight.arrivalTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers</span>
                  <span className="font-medium">{travelers}</span>
                </div>
              </div>
            )}

            {hotel && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hotel</span>
                  <span className="font-medium">{hotel.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{hotel.location}</span>
                </div>
                {checkIn && checkOut && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stay</span>
                    <span className="font-medium">{checkIn} to {checkOut} ({nights} nights)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium">{guests}</span>
                </div>
              </div>
            )}

            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount Paid</span>
                <span className="text-xl font-bold text-primary-600">₹{finalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6">
            <p>A confirmation email has been sent to {email}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.push('/my-bookings')}
              className="flex-1 btn-primary py-3"
            >
              View My Bookings
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex-1 btn-secondary py-3"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
