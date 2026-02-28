'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const totalPrice = parseInt(searchParams.get('totalPrice') || '0');
  const firstName = searchParams.get('firstName') || '';
  const lastName = searchParams.get('lastName') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const flightId = searchParams.get('flightId');
  const hotelId = searchParams.get('hotelId');
  const travelers = searchParams.get('travelers');
  const guests = searchParams.get('guests');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const nights = searchParams.get('nights');

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const bookingId = `TE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    const params = new URLSearchParams();
    params.set('bookingId', bookingId);
    params.set('totalPrice', totalPrice.toString());
    params.set('firstName', firstName);
    params.set('lastName', lastName);
    params.set('email', email);
    if (flightId) params.set('flightId', flightId);
    if (hotelId) params.set('hotelId', hotelId);
    if (travelers) params.set('travelers', travelers);
    if (guests) params.set('guests', guests);
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    if (nights) params.set('nights', nights);
    
    router.push(`/booking/confirmation?${params.toString()}`);
  };

  const finalAmount = Math.round(totalPrice * 1.1);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <div>
                <p className="text-gray-500">Total Amount</p>
                <p className="text-3xl font-bold text-primary-600">₹{finalAmount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Payable Amount</p>
                <p className="text-xl font-semibold">₹{finalAmount.toLocaleString()}</p>
              </div>
            </div>

            <form onSubmit={handlePayment}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === 'upi'
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                      <span className="font-medium">UPI</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="font-medium">Card</span>
                    </div>
                  </button>
                </div>
              </div>

              {paymentMethod === 'upi' && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@upi"
                    className="input-field"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter your UPI ID (e.g., mobilenumber@upi)</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                      placeholder="1234 5678 9012 3456"
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="MM/YY"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        placeholder="123"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  This is a dummy payment. No real money will be deducted.
                </p>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay ₹${finalAmount.toLocaleString()}`
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-8 text-center">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
