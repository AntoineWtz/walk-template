import React from 'react';
import aboutImg1 from '../assets/img/about/about1.jpg';
import aboutImg2 from '../assets/img/about/about2.jpg';
import aboutImg3 from '../assets/img/about/about3.jpg';
import aboutImg4 from '../assets/img/about/about4.jpg';
import storeImg1 from '../assets/img/store/store1.jpg';
import logo from '../assets/img/logo-walk-monoblack.png';

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
                    loading='lazy'
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
                    loading='lazy'
                    className="w-full h-full object-cover rounded-2xl"
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

export default About;
