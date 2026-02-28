# TravelEase - Flight & Hotel Booking Platform

A full-stack travel booking web application built with Next.js, TypeScript, Tailwind CSS, and Firebase. This is an EaseMyTrip clone with real flight/hotel search, booking, payment simulation, and admin management.

![TravelEase](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800)

## Features

### User Features
- **Flight Search** - Search flights by origin, destination, date, travelers, and cabin class
- **Hotel Search** - Search hotels by destination, check-in/out dates, and guests
- **Featured Trips** - Browse curated travel packages
- **Booking Flow** - Review details, enter traveler info, simulate payment
- **My Bookings** - View and cancel your bookings
- **User Authentication** - Sign up and login with email/password

### Admin Features
- **Dashboard** - View total flights, hotels, and listings count
- **Manage Flights** - Add, edit, delete flights
- **Manage Hotels** - Add, edit, delete hotels
- **Protected Routes** - Only admin users can access

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Backend | Firebase (Firestore, Auth, Storage) |
| Deployment | Render / Vercel |

## Project Structure

```
travel_ease/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── login/             # Login page
│   │   ├── signup/             # Signup page
│   │   ├── flights/           # Flight search & results
│   │   ├── hotels/             # Hotel search & results
│   │   ├── featured-trips/     # Featured trips
│   │   ├── booking/            # Booking flow (review, payment, confirmation)
│   │   ├── my-bookings/       # User's bookings
│   │   └── admin/              # Admin dashboard
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSearch.tsx
│   │   ├── FeaturedTrips.tsx
│   │   └── OffersBanner.tsx
│   ├── lib/                   # Firebase & Auth configuration
│   │   ├── firebase.ts         # Firebase initialization
│   │   ├── firebaseService.ts  # Firestore CRUD operations
│   │   └── AuthContext.tsx    # Authentication context
│   ├── store/                 # Zustand state management
│   │   └── bookingStore.ts
│   ├── types/                 # TypeScript interfaces
│   │   └── index.ts
│   └── data/                  # Mock data (backup)
│       └── mockData.ts
├── scripts/
│   └── seed.ts                # Seed data to Firebase
├── public/                    # Static assets
├── Dockerfile                  # Docker configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json                # Dependencies
```

## Firebase Configuration

The project uses Firebase with the following services:
- **Firebase Auth** - User authentication
- **Cloud Firestore** - Database for flights, hotels, bookings
- **Firebase Storage** - For hotel images (future use)

### Firestore Collections

```javascript
// users
{
  name: string,
  email: string,
  role: "admin" | "user",
  createdAt: string
}

// flights
{
  airline: string,
  from: string,
  to: string,
  departureTime: string,
  arrivalTime: string,
  duration: string,
  price: number,
  stops: number,
  cabinClass: string,
  createdAt: string
}

// hotels
{
  name: string,
  location: string,
  price: number,
  rating: number,
  amenities: string[],
  image: string,
  createdAt: string
}

// bookings
{
  userId: string,
  type: "flight" | "hotel",
  flight: Flight,
  hotel: Hotel,
  checkIn?: string,
  checkOut?: string,
  travelers?: number,
  guests?: number,
  totalPrice: number,
  date: string,
  status: "confirmed" | "cancelled",
  travelerDetails: TravelerDetails,
  createdAt: string
}

// featuredTrips
{
  name: string,
  description: string,
  price: number,
  image: string,
  duration: string,
  createdAt: string
}
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd travel_ease
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Enable Cloud Firestore
   - Copy your Firebase config

4. **Update Firebase Config**
   Edit `src/lib/firebase.ts` with your Firebase credentials:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other config
};
```

5. **Seed Data to Firebase**
```bash
npx tsx scripts/seed.ts
```

6. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Creating Admin User

1. Sign up with email: `admin@travelease.com`
2. Go to Firebase Console → Firestore → users collection
3. Manually update the user's `role` to `"admin"`

Or modify `src/lib/AuthContext.tsx` to automatically assign admin role based on email.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import repository
4. Deploy with default settings

### Option 2: Render
1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Configure:
   - Build Command: `npm ci`
   - Start Command: `npm start`
6. Deploy

### Option 3: Docker
```bash
docker build -t travel-ease .
docker run -p 3000:3000 travel-ease
```

## Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Homepage | Public |
| `/login` | User login | Public |
| `/signup` | User registration | Public |
| `/flights` | Flight search | Public |
| `/hotels` | Hotel search | Public |
| `/featured-trips` | Featured packages | Public |
| `/my-bookings` | User's bookings | Auth required |
| `/admin` | Admin dashboard | Admin only |

## Screenshots

### Homepage
- Hero search section with flight/hotel toggle
- Offers banner
- Featured trips section
- Navigation with authentication

### Flight Search
- Origin/destination city selection
- Date pickers for departure/return
- Traveler count and cabin class
- Search results with airline, time, price

### Hotel Search
- Destination selection
- Check-in/check-out dates
- Guest count
- Results with ratings, amenities, price

### Booking Flow
- Review booking details
- Traveler information form
- Payment simulation (UPI/Card)
- Confirmation with booking ID

### Admin Panel
- Dashboard with stats
- Flight management (CRUD)
- Hotel management (CRUD)

## Future Enhancements

- Real payment gateway integration (Razorpay/Stripe)
- Email notifications via Firebase Functions
- Coupon/discount system
- User wallet system
- Refund workflow
- Booking analytics dashboard
- Real-time chat support

## License

This project is for educational purposes.

## Author

Built with ❤️ using Next.js and Firebase
