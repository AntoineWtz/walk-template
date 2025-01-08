import React from "react";
import Flag from "react-world-flags";

const Dealer: React.FC = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            {/* Titre principal */}
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Nos Revendeurs</h1>
            </div>

            {/* Section France */}
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="FR" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">France</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <p>Le Bon Marché Rive Gauche - 22-24 R. de Sèvres, 75007 Paris</p>
                    <p>Galeries Lafayette - 40 Bd Haussmann, 75009 Paris</p>
                    <p>Citadium - 50-56 R. de Caumartin, 75009 Paris</p>
                    <p>Update Store - 3 R. des Capucins, 90000 Belfort</p>
                    <p>L'Appart - 38 R. Georges Clemenceau, 85000 La Roche-Sur-Yon</p>
                    <p>Motel Store - 6 R. de la Paix, 74000 Annecy</p>
                </div>
            </div>

            {/* Section Belgique */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="BE" className="w-6 h-6 rounded-full" />
                    <h2 className="text-xl font-bold">Belgique</h2>
                </div>
                <div>
                    <p>L'Original Namur - 6 R. de l'Ange, 5000 Namur</p>
                    <p>La Claque - R. Saint Adalbert 5a, 4000 Liège</p>
                    <p>Rough Rider's - Brabantdam 27, 9000 Gent</p>
                    <p>O'Street - 33 R. Emile Cuvelier, 5000 Namur</p>
                </div>
            </div>

            {/* Section Suisse */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="CH" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Suisse</h2>
                </div>
                <div>
                    <p>Cop 4 Rock - 15 R. du Fort-Barreau, 1201 Genève</p>
                    <p>Studio Neufcinq - 11 R. de la Porte-Neuve, 1950 Sion</p>
                </div>
            </div>

            {/* Section Luxembourg */}
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="LU" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Luxembourg</h2>
                </div>
                <p>Distrikt - Knauf Shopping Center - 19 Route de Bastogne, L-9638 Pommerloch</p>
            </div>

            {/* Section Italie */}
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="IT" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Italie</h2>
                </div>
                <p>Distanze - Via Cesare Battisti 14, 41121 Modena</p>
            </div>

            {/* Section États-Unis */}
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="US" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">États-Unis</h2>
                </div>
                <p>Urban Outfitters - 1627 Walnut St, Philadelphia, PA 19103</p>
            </div>

            {/* Section Arabie Saoudite */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="SA" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Arabie Saoudite</h2>
                </div>
                <div>
                    <p>Urbnlot - 3110 Anas Ibn Malik Rd, Al Malqa, Riyadh 13321</p>
                    <p>Nayazek - Westerly Department Store - Kingdom Centre, King Fahad Road, 12341 Riyadh</p>
                </div>
            </div>

            {/* Section Japon */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="JP" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Japon</h2>
                </div>
                <div>
                    <p>Takashimaya - 3-3-11 Dosho-machi, Chuo-ku 541-0045 Osaka</p>
                    <p>Styles - 26-7 Higashi Oogishima, Kawasaki-ku, 210-0869 Kanagawa</p>
                    <p>Adam & Ropé - 〒150-0042 Tokyo, Shibuya City, Udagawacho, 15−1 渋谷パルコ 3F</p>
                    <p>Hype Drop - 1-1-17 Kabukicho, Shinjuku-ku, 160-0021 Tokyo</p>
                </div>
            </div>

            {/* Section Chine */}
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center space-x-4 mb-4">
                    <Flag code="CN" className="w-6 h-6 rounded-sm" />
                    <h2 className="text-xl font-bold">Chine</h2>
                </div>
                <p>Eggsinn - 610000 Chengdu, Hong-Kong</p>
            </div>
        </div>
    );
};

export default Dealer;
