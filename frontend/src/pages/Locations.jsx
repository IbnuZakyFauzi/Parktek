import { FaMapMarkerAlt, FaPhone, FaExternalLinkAlt } from "react-icons/fa";

export default function Locations() {
  const locations = [
    {
      name: "Parkiran Teknik - Fakultas Teknik Universitas Indonesia",
      address: "Fakultas Teknik, Universitas Indonesia, Kampus UI Depok, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
      contact: "(021) 12345678",
      mapsUrl: "https://maps.app.goo.gl/4gGtvzkFuDCbQtuN9",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.7623668324263!2d106.82133427499154!3d-6.3615600936285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec192c30aa47%3A0x72f29bad0571e98c!2sFaculty%20of%20Engineering%20Universitas%20Indonesia!5e1!3m2!1sen!2sid!4v1747573966187!5m2!1sen!2sid",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-color_blue1 text-center">Lokasi PARKTEK</h1>
      <p className="text-lg mb-8 text-gray-700 text-center max-w-xl">
        Temukan lokasi PARKTEK terdekat untuk pengalaman parkir yang mudah dan aman.
      </p>
      <div className="flex justify-center w-full">
        <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* Info */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-color_blue1 text-2xl mr-2" />
              <h2 className="text-3xl font-semibold">{locations[0].name}</h2>
            </div>
            <p className="text-gray-700 mb-2 flex items-start text-lg">
              <span className="mr-2"><FaMapMarkerAlt /></span>
              {locations[0].address}
            </p>
            <p className="text-gray-700 mb-4 flex items-center text-lg">
              <FaPhone className="mr-2" /> {locations[0].contact}
            </p>
            <a
              href={locations[0].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-color_blue1 text-white rounded-full font-semibold hover:bg-blue-700 transition text-lg mb-4"
            >
              Lihat di Google Maps <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
          {/* Map */}
          <div className="flex-1 min-w-[300px] max-h-[350px] flex items-center justify-center bg-gray-200">
            <iframe
              title={locations[0].name}
              src={locations[0].embedUrl}
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-none w-full h-full border-0"
              style={{ minWidth: 300, minHeight: 250 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}