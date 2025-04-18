export default function MeasureGrowthCard() {
    return (
      <div className="w-full bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">📈 Measure your growth</h2>
        <p className="text-sm text-gray-600">
          Gain insights into your performance across platforms. Understand what's working, track follower growth, and optimize your content strategy with real-time analytics.
        </p>
  
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div>
            <span className="font-medium text-blue-600">+8.3K</span> New Followers
          </div>
          <div>
            <span className="font-medium text-green-600">↑ 12%</span> This Week
          </div>
        </div>
      </div>
    );
  }
  