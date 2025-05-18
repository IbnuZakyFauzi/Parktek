export default function Locations() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Locations</h1>
      <p className="text-lg mb-4">Find PARKTEK locations near you</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Location {index + 1}</h2>
            <p className="text-gray-600">Address: 123 Main St, City, Country</p>
            <p className="text-gray-600">Contact: (123) 456-7890</p>
          </div>
        ))}
      </div>
    </div>
  );
}