import { BarChart3 } from "lucide-react"; // or your preferred icon library

const AnalyticsHero = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#f9f9f9] overflow-hidden text-center px-6">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-[60%] bg-gradient-to-br from-blue-300 via-purple-200 to-transparent opacity-60 rounded-full blur-3xl z-0"></div>

      {/* Badge */}
      <div className="relative z-10 mb-4 inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-lg font-semibold text-gray-900">
        <BarChart3 className="w-4 h-4" />
        Analytics
      </div>

      {/* Headline */}
      <h2 className="relative z-10 text-4xl md:text-7xl font-bold text-gray-900 leading-tight max-w-4xl">
        Decisions driven by data, <br className="hidden sm:block" /> not assumptions.
      </h2>
    </div>
  );
};

export default AnalyticsHero;
