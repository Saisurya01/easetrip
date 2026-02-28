'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { getBookingsByUser, cancelBooking } from '@/lib/firebaseService';
import { Booking } from '@/types';

export default function MyBookingsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    async function fetchBookings() {
      if (!user) return;
      
      try {
        const data = await getBookingsByUser(user.uid);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const handleCancel = async (bookingId: string) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      try {
        await cancelBooking(bookingId);
        setBookings(prev => 
          prev.map(b => b.id === bookingId ? { ...b, status: 'cancelled' } : b)
        );
      } catch (error) {
        console.error('Error cancelling booking:', error);
      }
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h2>
            <p className="text-gray-600 mb-6">Start exploring and book your next trip!</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => router.push('/flights')} className="btn-primary">
                Search Flights
              </button>
              <button onClick={() => router.push('/hotels')} className="btn-secondary">
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
        
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    booking.type === 'flight' ? 'bg-primary-100' : 'bg-blue-100'
                  }`}>
                    {booking.type === 'flight' ? (
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {booking.flight?.airline || booking.hotel?.name}
                    </h3>
                    <p className="text-gray-500">
                      {booking.flight 
                        ? `${booking.flight.from} → ${booking.flight.to}`
                        : booking.hotel?.location
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Booking ID</p>
                    <p className="font-medium">{booking.id}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-medium">{booking.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Status</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {booking.status === 'confirmed' ? 'Confirmed' : 'Cancelled'}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary-600">₹{booking.totalPrice.toLocaleString()}</p>
                  </div>
                  
                  {booking.status === 'confirmed' && (
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
