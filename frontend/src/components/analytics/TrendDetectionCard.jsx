export default function TrendDetectionCard() {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-1">AI trend detection</h3>
        <p className="text-sm text-gray-600">
          Spot emerging trends and turn trendsetters into collaboration opportunities.
        </p>
  
        <div className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-lg">
          <h4 className="text-md font-semibold mb-1">🎵 If We Ever Broke Up</h4>
          <div className="flex justify-between text-sm">
            <span>👯 8.3k Creators</span>
            <span>🎥 106M Views</span>
            <span>❤️ 6.3M Likes</span>
          </div>
        </div>
      </div>
    );
  }
  