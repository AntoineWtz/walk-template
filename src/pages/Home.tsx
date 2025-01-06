import React from 'react';
import homepage1 from '../assets/img/homepage1.jpg';
import homepage2 from '../assets/img/homepage2.jpg';
import homepage3 from '../assets/img/homepage3.jpg';
import homepage4 from '../assets/img/homepage4.jpg';

const Home = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6 px-6 py-3">
            {/* Première grande image (4 colonnes de gauche) */}
            <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-lg">
                <img
                    src={homepage1}
                    alt="Collection Homme"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Texte, boutons, et image2 (8 colonnes de droite, alignés horizontalement) */}
            <div className="col-span-8 flex items-center bg-white p-6 shadow-md rounded-lg">
                {/* Texte et boutons */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">
                        Lancement de la collection Automne/Hiver 2024
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="/shop/fw24"
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                        >
                            La collection
                        </a>
                        <a
                            href="/lookbook/fw24"
                            className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100"
                        >
                            Lookbook FW24
                        </a>
                    </div>
                </div>
                {/* Image 2 */}
                <div className="flex-shrink-0 ml-6">
                    <img
                        src={homepage2}
                        alt="Image Automne/Hiver"
                        className="w-48 h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Troisième image (4 colonnes de droite sous le bloc texte) */}
            <div className="col-span-4 overflow-hidden rounded-lg shadow-lg">
                <img
                    src={homepage3}
                    alt="Boutique"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Quatrième image (carré de 4 colonnes, à gauche de l'image 3) */}
            <div className="col-span-4 overflow-hidden rounded-lg shadow-lg">
                <img
                    src={homepage4}
                    alt="Découvrez nos Survêtements"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Home;
