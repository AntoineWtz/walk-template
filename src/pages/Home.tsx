import React from 'react';
import homepage1 from '../assets/img/homepage/homepage1.jpg';
import homepage2 from '../assets/img/homepage/homepage2.jpg';
import homepage3 from '../assets/img/homepage/homepage3.jpg';
import homepage4 from '../assets/img/homepage/homepage4.jpg';
import sliceImg1 from '../assets/img/homepage/slice1.jpg';
import sliceImg2 from '../assets/img/homepage/slice2.jpg';
import sliceImg3 from '../assets/img/homepage/slice3.jpg';
import sliceImg4 from '../assets/img/homepage/slice4.jpg';
import logo from '../assets/img/logo-walk-monoblack.png';
import aboutImg2 from '../assets/img/about/about2.jpg';
import aboutImg3 from '../assets/img/about/about3.jpg';
import storeImg1 from '../assets/img/store/store1.jpg';

import { Book, Newspaper, ShoppingBagIcon, StoreIcon } from 'lucide-react';

const Home = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:grid-rows-16 md:gap-12 mt-16 lg:mt-0">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
                        Collection Automne/Hiver 2024
                    </h2>
                    <div className="flex mx-auto justify-center lg:justify-start space-x-4">
                        <a
                            href="/"
                            className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-700"
                        >
                            La Collection
                        </a>
                        <a
                            href="/"
                            className="px-4 py-2 border border-black text-black rounded-xl hover:bg-gray-100"
                        >
                            Lookbook FW24
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={homepage2}
                        alt="Collection Automne/Hiver"
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

            {/* Section Walk Tape Vol.1 */}
            <div className="col-span-1 md:col-span-6 md:row-span-4 bg-white rounded-2xl p-6 shadow flex items-center">
                <img
                    src={aboutImg2}
                    alt="Walk Tape Vol.1"
                    loading='lazy'
                    className="w-1/3 h-auto rounded-2xl mr-6"
                />
                <div>
                    <h2 className="text-xl font-bold mb-4">Walk Tape Vol.1</h2>
                    <p className="text-sm">
                        Découvrez notre album réunissant des artistes francophones emblématiques. Une bande-son
                        incontournable pour les amateurs de hip-hop et de culture urbaine.
                    </p>
                </div>
            </div>

            {/* Section Enfant Précoce */}
            <div className="col-span-1 md:col-span-6 md:row-span-4 bg-white rounded-2xl p-6 shadow flex items-center">
                <img
                    src={aboutImg3}
                    alt="Enfant Précoce"
                    loading='lazy'
                    className="w-1/3 h-auto rounded-xl shadow-lg mr-6"
                />
                <div>
                    <h2 className="text-xl font-bold mb-4">Enfant Précoce</h2>
                    <p className="text-sm">
                        Plongez dans l'univers artistique d'Enfant Précoce, notre muse et artiste peintre,
                        symbole d'une créativité audacieuse et d'une inspiration sans limites.
                    </p>
                </div>
            </div>

            {/* Section Revendeurs */}
            <div className="col-span-1 md:col-span-12 md:row-span-1 bg-white rounded-2xl p-6 shadow items-center justify-center">

                <h2 className="text-xl font-bold text-center mb-4">Découvrez nos revendeurs</h2>
                <p className="text-sm text-center mb-8">
                    Retrouvez nos collections dans notre boutique et chez les partenaires de Walk in Paris.
                </p>
                <div className='flex'>
                    <a
                        href="/dealer"
                        className="px-4 py-2 bg-black text-center text-white mx-auto w-1/5 rounded-xl hover:bg-gray-700"
                    >
                        Voir les revendeurs
                    </a>
                    <a
                        href="/shop"
                        className="px-4 py-2 text-center mx-auto w-1/5 border border-black text-black rounded-xl hover:bg-gray-100"
                    >
                        Notre boutique
                    </a>

                </div>

            </div>

            {/* Bloc Magasin */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <img
                    src={storeImg1}
                    alt="Store 1"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="col-span-1 md:col-span-4 md:row-span-4 bg-white p-6 rounded-2xl shadow">
                <a
                        href="/store">
                <img
                    src={logo}
                    alt="Walk in Paris Logo"
                    loading="lazy"
                    className="w-48 h-48 object-contain mx-auto"
                /></a>
                <p className="text-base md:text-lg text-center font-bold mb-8">32 rue Yves Toudic, 75010 Paris</p>
                <ul className="text-base md:text-lg text-left">
                    <li><strong>Lundi :</strong> 14:00 - 19:00</li>
                    <li><strong>Mardi au samedi :</strong> 11:00 - 14:00 / 15:00 - 19:00</li>
                    <li><strong>Dimanche :</strong> 14:00 - 19:30</li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-4 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <iframe
                    title="Walk in Paris - Localisation"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8974195264477!2d2.362491215928524!3d48.86864367928866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1e8fd6edc1%3A0xf74cb33aa902248a!2s32%20Rue%20Yves%20Toudic%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1693938880377!5m2!1sen!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-2xl"
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
