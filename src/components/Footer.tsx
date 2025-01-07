import React from 'react';
import { Twitter, Instagram, Flame } from 'lucide-react';
import logo from '../assets/img/logo-walk-monoblack.png';

const Footer = () => {
    return (
        <footer className="text-white">
            {/* Grid principale */}
            <div className="container mx-auto grid grid-cols-12 gap-6 pt-6 md:gap-12 justify-center">
                {/* Bloc réseaux sociaux */}
                <div className="bg-white border-t-2 border-l-2 border-r-2 border-black rounded-t-xl col-span-1 flex flex-col items-center justify-evenly space-y-4 py-4 px-4 shadow">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Flame size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Twitter size={24} />
                    </a>
                    <img src={logo} alt="Walk in Paris Logo" loading="lazy" className="w-30 h-30 object-contain" />
                </div>

                {/* Bloc des liens principaux */}
                <div className="bg-black rounded-t-xl col-span-11 grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-8 shadow">
                    {/* Colonne "Walk in Paris" */}
                    <div>
                        <h3 className="font-bold mb-4">Walk in Paris</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
                            <li><a href="/collaborations" className="hover:text-gray-400">Collaborations</a></li>
                            <li><a href="/store" className="hover:text-gray-400">La Boutique</a></li>
                        </ul>
                    </div>

                    {/* Colonne "Service client" */}
                    <div>
                        <h3 className="font-bold mb-4">Service client</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/retours" className="hover:text-gray-400">Livraison & retours</a></li>
                            <li><a href="/about" className="hover:text-gray-400">À propos</a></li>
                        </ul>
                    </div>

                    {/* Colonne "Mentions légales" */}
                    <div>
                        <h3 className="font-bold mb-4">Mentions légales</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/mentions-legales" className="hover:text-gray-400">Mentions légales</a></li>
                            <li><a href="/cookies" className="hover:text-gray-400">Gestion des cookies</a></li>
                            <li><a href="/cgv" className="hover:text-gray-400">Conditions générales de vente</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
