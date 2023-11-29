import HomeHero from '@/components/features/home/HomeHero';
import ProviderExample from '@/components/features/home/ProviderExample';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <ProviderExample />
    </div>
  );
}
