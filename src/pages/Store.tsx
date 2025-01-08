import React from 'react';
import logo from '../assets/img/logo-walk-monoblack.png';
import storeImg1 from '../assets/img/store/store1.jpg';
import storeImg2 from '../assets/img/store/store2.jpg';
import storeImg3 from '../assets/img/store/store3.jpg';
import storeImg4 from '../assets/img/store/store4.jpg';
import storeImg5 from '../assets/img/store/store5.jpg';
import storeImg6 from '../assets/img/store/store6.jpg';
import storeImg7 from '../assets/img/store/store7.jpg';
import storeImg8 from '../assets/img/store/store8.jpg';
import storeImg9 from '../assets/img/store/store9.jpg';
import storeImg10 from '../assets/img/store/store10.jpg';
import storeImg11 from '../assets/img/store/store11.jpg';

const Store = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-rows-16 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            {/* Titre de la page */}
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">La Boutique</h1>
            </div>

            {/* Trois premiers blocs */}
            {/*  carrée */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <img
                    src={storeImg1}
                    alt="Store 1"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            {/* Informations de l'adresse */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 bg-white p-6 rounded-2xl shadow">
                <img
                    src={logo}
                    alt="Walk in Paris Logo"
                    loading="lazy"
                    className="w-48 h-48 object-contain mx-auto"
                />
                <p className="text-base md:text-lg text-center font-bold mb-8">32 rue Yves Toudic, 75010 Paris</p>
                <ul className="text-base md:text-lg text-left">
                    <li><strong>Lundi :</strong> 14:00 - 19:00</li>
                    <li><strong>Mardi au samedi :</strong> 11:00 - 14:00 / 15:00 - 19:00</li>
                    <li><strong>Dimanche :</strong> 14:00 - 19:30</li>
                </ul>
            </div>
            {/* Carte Google Maps */}
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

            {/* Galerie d's en bento grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
                <div className="col-span-12 md:col-span-6 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg2}
                        alt="Store 2"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg5}
                        alt="Store 5"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-6 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg3}
                        alt="Store 3"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-6 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg6}
                        alt="Store 6"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg4}
                        alt="Store 4"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 md:row-span-4 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg7}
                        alt="Store 7"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 md:row-span-4 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg8}
                        alt="Store 8"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg9}
                        alt="Store 9"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg10}
                        alt="Store 10"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="col-span-12 md:col-span-4 md:row-span-3 overflow-hidden rounded-2xl shadow">
                    <img
                        src={storeImg11}
                        alt="Store 11"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Store;
