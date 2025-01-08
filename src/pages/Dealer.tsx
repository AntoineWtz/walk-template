import React from "react";
import Flag from "react-world-flags";

const Dealer: React.FC = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-12 md:gap-12 justify-center">
            {/* Titre principal */}
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Nos Revendeurs</h1>
            </div>

            {/* Section France */}
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-6">
                    <Flag code="FR" className="w-8 h-8 rounded-sm" />
                    <h2 className="text-2xl font-bold">France</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: "Le Bon Marché Rive Gauche", address: "22-24 R. de Sèvres, 75007 Paris" },
                        { name: "Galeries Lafayette", address: "40 Bd Haussmann, 75009 Paris" },
                        { name: "Citadium", address: "50-56 R. de Caumartin, 75009 Paris" },
                        { name: "Update Store", address: "3 R. des Capucins, 90000 Belfort" },
                        { name: "L'Appart", address: "38 R. Georges Clemenceau, 85000 La Roche-Sur-Yon" },
                        { name: "Motel Store", address: "6 R. de la Paix, 74000 Annecy" },
                        { name: "United Legend", address: "23 R. de la Nuée-Bleue, 67000 Strasbourg" },
                        { name: "Gaspard & Celestin", address: "7 bis R. du Président Wilson, 59140 Dunkerque" },
                        { name: "Impact Shop", address: "15 R. de Lépante, 06000 Nice" },
                        { name: "So Hype", address: "51 R. Jean Chatel, 97400 Saint-Denis, La Réunion" },
                        { name: "Boulet", address: "51 Grande Rue, 54000 Nancy" },
                        { name: "Saison Shop", address: "5 R. Francis Davso, 13001 Marseille" },
                        { name: "Le Stor'age", address: "92 R. Saint-Pierre, 14000 Caen" },
                        { name: "Fred Aston", address: "16 R. de Bordeaux, 37000 Tours" },
                        { name: "OG Store", address: "14 Cr. Sainte-Anne, 68000 Colmar" },
                        { name: "Excess", address: "18 R. du Château, 50100 Cherbourg-en-Cotentin" },
                        { name: "Printemps Brest", address: "59 R. Jean Jaurès, 29200 Brest" },
                    ].map((dealer, index) => (
                        <div key={index} className="border-b pb-4">
                            <strong className="block text-base font-semibold text-gray-900">{dealer.name}</strong>
                            <p className="text-sm text-gray-600">{dealer.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Belgique */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-6">
                    <Flag code="BE" className="w-8 h-8 rounded-full" />
                    <h2 className="text-2xl font-bold">Belgique</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { name: "L'Original Namur", address: "6 R. de l'Ange, 5000 Namur" },
                        { name: "La Claque", address: "R. Saint Adalbert 5a, 4000 Liège" },
                        { name: "Rough Rider's", address: "Brabantdam 27, 9000 Gent" },
                        { name: "O'Street", address: "33 R. Emile Cuvelier, 5000 Namur" },
                    ].map((dealer, index) => (
                        <div key={index} className="border-b pb-4">
                            <strong className="block text-base font-semibold text-gray-900">{dealer.name}</strong>
                            <p className="text-sm text-gray-600">{dealer.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Japon */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-6">
                    <Flag code="JP" className="w-8 h-8 rounded-sm" />
                    <h2 className="text-2xl font-bold">Japon</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { name: "Takashimaya", address: "3-3-11 Dosho-machi, Chuo-ku 541-0045 Osaka" },
                        { name: "Styles", address: "26-7 Higashi Oogishima, Kawasaki-ku, 210-0869 Kanagawa" },
                        { name: "Adam & Ropé", address: "〒150-0042 Tokyo, Shibuya City, Udagawacho, 15−1 渋谷パルコ 3F" },
                        { name: "Hype Drop", address: "1-1-17 Kabukicho, Shinjuku-ku, 160-0021 Tokyo" },
                    ].map((dealer, index) => (
                        <div key={index} className="border-b pb-4">
                            <strong className="block text-base font-semibold text-gray-900">{dealer.name}</strong>
                            <p className="text-sm text-gray-600">{dealer.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Luxembourg, Italie, États-Unis */}
            {[
                { code: "LU", name: "Luxembourg", dealers: [{ name: "Distrikt - Knauf Shopping Center", address: "19 Route de Bastogne, L-9638 Pommerloch" }] },
                { code: "IT", name: "Italie", dealers: [{ name: "Distanze", address: "Via Cesare Battisti 14, 41121 Modena" }] },
                { code: "US", name: "États-Unis", dealers: [{ name: "Urban Outfitters", address: "1627 Walnut St, Philadelphia, PA 19103" }] },
            ].map((country, index) => (
                <div key={index} className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                    <div className="flex items-center space-x-4 mb-6">
                        <Flag code={country.code} className="w-8 h-8 rounded-sm" />
                        <h2 className="text-2xl font-bold">{country.name}</h2>
                    </div>
                    <div>
                        {country.dealers.map((dealer, idx) => (
                            <div key={idx} className="border-b pb-4">
                                <strong className="block text-base font-semibold text-gray-900">{dealer.name}</strong>
                                <p className="text-sm text-gray-600">{dealer.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Section Arabie Saoudite et Suisse */}
            {[
                {
                    code: "SA", name: "Arabie Saoudite", dealers: [
                        { name: "Urbnlot", address: "3110 Anas Ibn Malik Rd, Al Malqa, Riyadh 13321" },
                        { name: "Nayazek", address: "Westerly Department Store - Kingdom Centre, King Fahad Road, 12341 Riyadh" }
                    ]
                },
                {
                    code: "CH", name: "Suisse", dealers: [
                        { name: "Cop 4 Rock", address: "15 R. du Fort-Barreau, 1201 Genève" },
                        { name: "Studio Neufcinq", address: "11 R. de la Porte-Neuve, 1950 Sion" }
                    ]
                },
            ].map((country, index) => (
                <div key={index} className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                    <div className="flex items-center space-x-4 mb-6">
                        <Flag code={country.code} className="w-8 h-8 rounded-sm" />
                        <h2 className="text-2xl font-bold">{country.name}</h2>
                    </div>
                    <div>
                        {country.dealers.map((dealer, idx) => (
                            <div key={idx} className="border-b pb-4">
                                <strong className="block text-base font-semibold text-gray-900 mt-4">{dealer.name}</strong>
                                <p className="text-sm text-gray-600">{dealer.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dealer;
