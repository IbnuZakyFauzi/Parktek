import React from 'react';
import Logo from '../components/Logo';

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] bg-gray-100 w-full px-4 md:px-12 lg:px-32 py-10">
            <Logo className="mb-4 scale-125" />
            <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">
                Tentang <span className="text-color_blue1">PARKTEK</span>
            </h1>
            <div className="w-full">
                <p className="text-xl text-gray-700 mb-6 text-center leading-relaxed">
                    <span className="font-bold text-color_blue1">PARKTEK</span> adalah solusi digital inovatif untuk manajemen parkir modern. Kami menyediakan sistem parkir berbasis teknologi yang memudahkan pemilik lahan parkir maupun pengguna dalam melakukan pemantauan, pembayaran, dan pengelolaan parkir secara real-time.
                </p>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                    Dengan fitur-fitur seperti pelacakan lokasi parkir, berbagai metode pembayaran digital, dashboard keuangan, serta dukungan tim IT berpengalaman, PARKTEK hadir untuk memberikan pengalaman parkir yang lebih aman, cepat, dan efisien.
                </p>
            </div>
        </div>
    );
}