import HeroSection from "../components/HeroSection";
import SongAnalyticsTable from "../components/SongAnalyticsTable";
import SoundSearchCard from "../components/SoundSearchCard";
import TrendDetectionCard from "../components/TrendDetectionCard";

export default function AnalyticsPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-12 py-8">
      <HeroSection />
      <SongAnalyticsTable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <SoundSearchCard />
        <TrendDetectionCard />
      </div>
    </div>
  );
}
