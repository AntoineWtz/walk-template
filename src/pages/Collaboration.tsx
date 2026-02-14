import React from 'react';
import aboutImg2 from '../assets/img/about/about2.jpg';
import aboutImg3 from '../assets/img/about/about3.jpg';

const Collaboration: React.FC = () => {
    const partners = [
        { name: 'Enfant Précoce', role: 'Artiste & muse' },
        { name: 'Walk Tape', role: 'Collectif musical' },
        { name: 'Le Meurice', role: 'Collab capsule' },
    ];

    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Collaborations</h1>
                <p className="text-sm text-gray-600 mt-2">Projets transverses — musique, art et capsules exclusives.</p>
            </div>

            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow flex items-center">
                <img src={aboutImg2} alt="Collab" className="w-1/3 rounded-2xl mr-6" />
                <div>
                    <h2 className="text-xl font-bold mb-2">Walk Tape</h2>
                    <p className="text-sm text-gray-600">Album collectif et événements musicaux réunissant la scène francophone.</p>
                </div>
            </div>

            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow flex items-center">
                <img src={aboutImg3} alt="Muse" className="w-1/3 rounded-2xl mr-6" />
                <div>
                    <h2 className="text-xl font-bold mb-2">Enfant Précoce</h2>
                    <p className="text-sm text-gray-600">Collaborations artistiques, expositions et éditions limitées.</p>
                </div>
            </div>

            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">Partenaires récents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {partners.map((p, i) => (
                        <div key={i} className="p-4 border rounded-lg">
                            <strong className="block">{p.name}</strong>
                            <span className="text-sm text-gray-600">{p.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collaboration;