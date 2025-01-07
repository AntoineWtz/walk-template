import React from 'react';
import homepage1 from '../assets/img/homepage1.jpg';
import homepage2 from '../assets/img/homepage2.jpg';
import homepage3 from '../assets/img/homepage3.jpg';
import homepage4 from '../assets/img/homepage4.jpg';
import sliceImg1 from '../assets/img/slice1.jpg';
import sliceImg2 from '../assets/img/slice2.jpg';
import sliceImg3 from '../assets/img/slice3.jpg';
import sliceImg4 from '../assets/img/slice4.jpg';
import logo from '../assets/img/logo-walk-monoblack.png';

import { Book, Newspaper, ShoppingBagIcon, StoreIcon } from 'lucide-react';

const Home = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:grid-rows-16 md:gap-12">
            {/* Première grande image */}
            <div className="overflow-hidden rounded-2xl shadow md:col-span-4 md:row-span-6">
                <img
                    src={homepage1}
                    alt="Collection Le Meurice"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Texte, boutons, et image2 */}
            <div className="flex flex-col items-center bg-white p-6 shadow rounded-2xl md:col-span-8 md:row-span-4 md:flex-row">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-0 md:pr-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Collection Automne/Hiver 2024
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="/shop/fw24"
                            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-700"
                        >
                            La Collection
                        </a>
                        <a
                            href="/lookbook/fw24"
                            className="px-6 py-3 border border-black text-black rounded-xl hover:bg-gray-100"
                        >
                            Lookbook FW24
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={homepage2}
                        alt="Image Automne/Hiver"
                        loading="lazy"
                        className="w-full h-auto rounded-2xl"
                    />
                </div>
            </div>

            {/* Troisième image */}
            <div className="overflow-hidden rounded-2xl shadow md:col-start-9 md:col-span-4 md:row-start-5 md:row-span-6">
                <img
                    src={homepage3}
                    alt="Boutique"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Quatrième image */}
            <div className="overflow-hidden rounded-2xl shadow md:col-start-5 md:col-span-4 md:row-start-5 md:row-span-4">
                <img
                    src={homepage4}
                    alt="Découvrez nos Survêtements"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Carré avec icônes */}
            <div className="grid grid-cols-2 gap-6 md:gap-12 md:col-span-4 md:row-start-7 md:row-span-4">
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-red-200">
                    <ShoppingBagIcon size="32" />
                    <p className="font-semibold">Shop</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-blue-200">
                    <Book size="32" />
                    <p className="font-semibold">Lookbook</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-green-200">
                    <Newspaper size="32" />
                    <p className="font-semibold">Library</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-orange-200">
                    <StoreIcon size="32" />
                    <p className="font-semibold">Boutique</p>
                </div>
            </div>

            {/* Rectangle central */}
            <div className="overflow-hidden bg-white rounded-2xl shadow text-white flex items-center justify-center md:col-start-5 md:col-span-4 md:row-start-9 md:row-span-2">
                <img
                    src={logo}
                    alt="Logo Walk in Paris"
                    loading='lazy'
                    className="w-40 h-auto"
                />
            </div>

            {/* Deux grandes images côte à côte */}
            <div className="grid grid-cols-4 gap-6 md:gap-12 md:col-span-12">
                <img
                    src={sliceImg1}
                    alt="Boutique Walk in Paris"
                    loading='lazy'
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow"
                />
                <img
                    src={sliceImg2}
                    alt="Boutique Walk in Paris"
                    loading='lazy'
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow"
                />
                <img
                    src={sliceImg3}
                    alt="Boutique Walk in Paris"
                    loading='lazy'
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow"
                />
                <img
                    src={sliceImg4}
                    alt="Boutique Walk in Paris"
                    loading='lazy'
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow"
                />
            </div>
        </div>
    );
};

export default Home;
