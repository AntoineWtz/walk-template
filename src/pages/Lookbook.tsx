import React from 'react';
import sliceImg1 from '../assets/img/homepage/slice1.jpg';
import sliceImg2 from '../assets/img/homepage/slice2.jpg';
import sliceImg3 from '../assets/img/homepage/slice3.jpg';
import sliceImg4 from '../assets/img/homepage/slice4.jpg';

const Lookbook: React.FC = () => {
    const images = [sliceImg1, sliceImg2, sliceImg3, sliceImg4];

    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Lookbook FW24</h1>
                <p className="text-sm text-gray-600 mt-2">Inspiration, silhouettes et ambiances de la dernière collection.</p>
            </div>

            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="overflow-hidden rounded-2xl shadow">
                            <img src={src} alt={`Look ${idx + 1}`} loading="lazy" className="w-full h-[380px] object-cover rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lookbook;