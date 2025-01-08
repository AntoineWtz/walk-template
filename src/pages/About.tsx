import React from 'react';
import aboutImg1 from '../assets/img/about/about1.jpg';
import aboutImg2 from '../assets/img/about/about2.jpg';
import aboutImg3 from '../assets/img/about/about3.jpg';
import aboutImg4 from '../assets/img/about/about4.jpg';

const About = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            {/* Titre principal */}
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Notre Histoire</h1>
            </div>

            {/* Image principale */}
            <div className="col-span-1 md:col-span-6 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <img
                    src={aboutImg1}
                    alt="Walk in Paris"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Texte détaillé en colonnes */}
            <div className="col-span-1 md:col-span-6 md:row-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-2xl p-6 shadow text-justify">
                <p className="text-base leading-relaxed">
                    <strong>Walk in Paris</strong> se définit comme une marque de streetwear lazy chic. La marque
                    s'inspire de l'élégance des années 70 et de la culture hip-hop des années 90, le tout guidé
                    par le rêve américain vu d'outre-Atlantique, dans la Ville Lumière, Paris.
                </p>
                <p className="text-base leading-relaxed">
                    Walk in Paris est bien plus qu'une marque. Également définie comme un "label" ou un "collectif",
                    ses activités s'étendent au monde de la musique, avec l'organisation de nombreux événements
                    et la sortie d'un album réunissant de nombreux artistes francophones : <em>"Walk Tape Vol.1"</em>.
                </p>
                <p className="text-base leading-relaxed">
                    Mais aussi au monde de l'art via sa muse <strong>Enfant Précoce</strong>, artiste peintre. Walk in
                    Paris est un voyage au cœur des époques, des disciplines artistiques et de l'univers cosmopolite
                    d'une ville comme Paris.
                </p>
            </div>

            {/* Image paysage sous le texte */}
            <div className="col-span-1 md:col-span-6 md:row-span-2 md:col-start-7 overflow-hidden rounded-2xl shadow aspect-[16/9]">
                <img
                    src={aboutImg4}
                    alt="Walk in Paris Landscape"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Section Walk Tape Vol.1 */}
            <div className="col-span-1 md:col-span-6 md:row-span-4 bg-white rounded-2xl p-6 shadow flex items-center">
                <img
                    src={aboutImg2}
                    alt="Walk Tape Vol.1"
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
                    className="w-1/3 h-auto rounded-2xl shadow-lg mr-6"
                />
                <div>
                    <h2 className="text-xl font-bold mb-4">Enfant Précoce</h2>
                    <p className="text-sm">
                        Plongez dans l'univers artistique d'Enfant Précoce, notre muse et artiste peintre,
                        symbole d'une créativité audacieuse et d'une inspiration sans limites.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
