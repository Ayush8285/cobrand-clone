import AnalyticsHero from "../components/analytics/AnalyticsHero";
import SongAnalyticsTable from "../components/analytics/SongAnalyticsTable";
import SoundSearchCard from "../components/analytics/SoundSearchCard";
import TrendDetectionCard from "../components/analytics/TrendDetectionCard";
import MeasureGrowthCard from "../components/analytics/MeasureGrowthCard";

export default function AnalyticsPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-12 py-8">
      <AnalyticsHero />
      <SongAnalyticsTable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <SoundSearchCard />
        <TrendDetectionCard />
      </div>
      <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto grid gap-6">
        {/* Add the growth card */}
        <MeasureGrowthCard />
        
        {/* You can add more cards here */}
      </div>
    </div>
    </div>
  );
}
