import React from 'react';
import { Twitter, Instagram, Flame } from 'lucide-react';
import logo from '../assets/img/logo-walk-monoblack.png';

const Footer = () => {
    return (
        <footer className="text-white">
            {/* Grid principale */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:pt-6 md:gap-12 justify-center">
                {/* Bloc réseaux sociaux */}
                <div className="bg-white rounded-2xl md:rounded-b-none col-span-12 md:col-span-1 flex flex-row items-center justify-around md:flex-col md:justify-between py-4 px-4 shadow">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Flame size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-400"
                    >
                        <Twitter size={20} />
                    </a>
                    <img
                        src={logo}
                        alt="Walk in Paris Logo"
                        loading="lazy"
                        className="w-8 h-8 object-contain"
                    />
                </div>

                {/* Bloc des liens principaux */}
                <div className="bg-black rounded-t-2xl col-span-12 md:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-0 md:px-8 shadow">
                    {/* Mode mobile: seulement les titres */}
                    <div className="md:hidden flex flex-row justify-around">
                        <a href="/" className="text-xs font-bold hover:text-gray-400">Walk in Paris</a>
                        <a href="/account" className="text-xs font-bold hover:text-gray-400">Service Client</a>
                        <a href="/mentions-legales" className="text-xs font-bold hover:text-gray-400">Mentions légales</a>
                    </div>

                    {/* Mode desktop: colonnes détaillées */}
                    <div className="hidden md:block">
                        <ul className="space-y-2 text-sm text-center md:text-left">
                            <li><a href="/" className="text-base font-bold mb-4 hover:text-gray-400">Walk in Paris</a></li>
                            <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
                            <li><a href="/collaborations" className="hover:text-gray-400">Collaborations</a></li>
                            <li><a href="/store" className="hover:text-gray-400">La Boutique</a></li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <ul className="space-y-2 text-sm text-center md:text-left">
                            <li><a href="/account" className="text-base font-bold mb-4 hover:text-gray-400">Service Client</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/retour" className="hover:text-gray-400">Livraison & retours</a></li>
                            <li><a href="/about" className="hover:text-gray-400">À propos</a></li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <ul className="space-y-2 text-sm text-center md:text-left">
                            <li><a href="/mentions-legales" className="text-base font-bold mb-4 hover:text-gray-400">Mentions légales</a></li>
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
