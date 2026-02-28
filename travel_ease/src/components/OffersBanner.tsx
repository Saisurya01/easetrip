'use client';

export function OffersBanner() {
  const offers = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Get up to 30% off on domestic flights',
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Hotel Deals',
      description: 'Book 2 nights, get 1 free on select hotels',
      color: 'bg-gradient-to-r from-primary-500 to-primary-700',
    },
    {
      id: 3,
      title: 'UPI Special',
      description: 'Flat ₹500 off on UPI payments',
      color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.color} rounded-xl p-6 text-white shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-white/90">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
