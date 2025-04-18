export default function SongAnalyticsTable() {
  const songs = [
    { title: "BACKBONE", creators: 302, creates: 21352, growth: "+2%", date: "Aug 8, 2024" },
    { title: "Discontent", creators: 3, creates: 1215, growth: "-8%", date: "Jul 14, 2023" },
    { title: "BACKBONE", creators: 302, creates: 21352, growth: "+2%", date: "Aug 8, 2024" },
    { title: "Discontent", creators: 3, creates: 1215, growth: "-8%", date: "Jul 14, 2023" },
    { title: "BACKBONE", creators: 302, creates: 21352, growth: "+2%", date: "Aug 8, 2024" },
    { title: "Discontent", creators: 3, creates: 1215, growth: "-8%", date: "Jul 14, 2023" },
    { title: "BACKBONE", creators: 302, creates: 21352, growth: "+2%", date: "Aug 8, 2024" },
    { title: "Discontent", creators: 3, creates: 1215, growth: "-8%", date: "Jul 14, 2023" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Song Analytics</h2>
      <p className="text-gray-500 text-sm mb-4">
        Discover impactful creators, superfans, and UGC content for any song.
      </p>
      <div className="overflow-x-auto" style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 150%)' }}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Title</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Creators</th>
              <th className="px-4 py-2">Creates</th>
              <th className="px-4 py-2">Growth</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {songs.map((song, i) => (
              <tr key={i} className="group">
                <td className="px-4 py-2 font-medium text-gray-700">{song.title}</td>
                <td className="px-4 py-2 text-sm">{song.date}</td>
                <td className="px-4 py-2 text-sm">{song.creators}</td>

                {/* 👇 Masked "Creates" */}
                <td className="px-4 py-2 text-sm relative">
                  <span className="text-gray-400 group-hover:hidden">••••••</span>
                  <span className="hidden group-hover:inline text-gray-700 transition duration-300">
                    {song.creates.toLocaleString()}
                  </span>
                </td>

                {/* 👇 Growth with conditional color */}
                <td
                  className={`px-4 py-2 text-sm font-medium ${song.growth.includes("-") ? "text-red-500" : "text-green-600"}`}
                >
                  {song.growth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
