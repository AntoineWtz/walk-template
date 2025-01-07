import React from 'react';
import homepage1 from '../assets/img/homepage1.jpg';
import homepage2 from '../assets/img/homepage2.jpg';
import homepage3 from '../assets/img/homepage3.jpg';
import homepage4 from '../assets/img/homepage4.jpg';
import sliceImg1 from '../assets/img/slice1.jpg';
import sliceImg2 from '../assets/img/slice2.jpg';
import logo from '../assets/img/logo-walk-monoblack.png';

import { Book, Newspaper, ShoppingBagIcon, StoreIcon } from 'lucide-react';

const Home = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 grid-rows-12 gap-12 px-6 py-3 justify-center">

            {/* Première grande image (4 colonnes, 6 lignes) */}
            <div className="col-span-4 row-span-6 overflow-hidden rounded-2xl shadow">
                <img
                    src={homepage1}
                    alt="Collection Le Meurice"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Texte, boutons, et image2 (8 colonnes, 4 lignes) */}
            <div className="col-span-8 row-span-4 flex items-center bg-white p-6 shadow rounded-2xl">
                <div className="w-1/2 pr-6">
                    <h2 className="text-3xl font-bold mb-6">
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

                {/* Image */}
                <div className="w-1/2">
                    <img
                        src={homepage2}
                        alt="Image Automne/Hiver"
                        className="w-full h-auto"
                    />
                </div>
            </div>


            {/* Troisième image (4 colonnes à droite, 4 lignes) */}
            <div className="col-start-9 col-span-4 row-start-5 row-span-6 overflow-hidden rounded-2xl shadow">
                <img
                    src={homepage3}
                    alt="Boutique"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Quatrième image (4 colonnes à gauche de l'image 3, 4 lignes) */}
            <div className="col-start-5 col-span-4 row-start-5 row-span-4 overflow-hidden rounded-2xl shadow">
                <img
                    src={homepage4}
                    alt="Découvrez nos Survêtements"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Cinquième carré de 4 petits carrés avec des icons et des infos textuels */}
            <div className="col-span-4 row-start-7 row-span-4 grid grid-cols-2 grid-rows-2 gap-12">
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-red-200">
                    <ShoppingBagIcon size="48" />
                    <p className="font-semibold">Shop</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-blue-200">
                    <Book size="48" />
                    <p className="font-semibold">Lookbook</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-green-200">
                    <Newspaper size="48" />
                    <p className="font-semibold">Library</p>
                </div>
                <div className="flex flex-col items-center justify-evenly bg-white p-4 shadow rounded-2xl bg-orange-200">
                    <StoreIcon size="48" />
                    <p className="font-semibold">Boutique</p>
                </div>
            </div>

            {/* Sixième rectangle central mid */}
            <div className="col-start-5 col-span-4 row-start-9 row-span-2 overflow-hidden bg-white rounded-2xl shadow text-white flex items-center justify-center">
                <img
                    src={logo}
                    alt="Logo Walk in Paris"
                    className="w-40 h-auto"
                />
            </div>

            {/* 2 grandes images */}
            <div className="row-start-11 col-span-12 row-span-4 flex gap-12">
                <img
                    src={sliceImg1}
                    alt="Slice 1"
                    className="w-1/2 h-full object-cover rounded-2xl shadow"
                />
                <img
                    src={sliceImg2}
                    alt="Slice 2"
                    className="w-1/2 h-full object-cover rounded-2xl shadow"
                />
            </div>
        </div>
    );
};

export default Home;
