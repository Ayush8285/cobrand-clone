export default function SoundSearchCard() {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-1">Sound search database</h3>
        <p className="text-sm text-gray-600">
          Gain access to Cobrand’s collection of over <span className="text-blue-600 font-bold">20 million social sounds</span>.
        </p>
        <div className="mt-4 flex gap-2">
          <input type="number" placeholder="10" className="border px-3 py-1 rounded-md w-20" />
          <input type="number" placeholder="1200" className="border px-3 py-1 rounded-md w-20" />
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md">Apply</button>
        </div>
      </div>
    );
  }
  