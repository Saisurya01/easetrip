import { HeroSearch } from '@/components/HeroSearch';
import { FeaturedTrips } from '@/components/FeaturedTrips';
import { OffersBanner } from '@/components/OffersBanner';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <OffersBanner />
      <FeaturedTrips />
    </>
  );
}
