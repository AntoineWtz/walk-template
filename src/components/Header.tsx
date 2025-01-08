import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex items-center justify-between px-4 py-4 lg:justify-center lg:gap-28 lg:static fixed top-0 left-0 w-full bg-white lg:bg-transparent z-50">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold font-serif">
                WALK IN PARIS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 uppercase">
                <Link to="/shop" className="hover:bg-black hover:text-white rounded-md px-2">Shop</Link>
                <Link to="/lookbook" className="hover:bg-black hover:text-white rounded-md px-2">Lookbook</Link>
                <Link to="/library" className="hover:bg-black hover:text-white rounded-md px-2">Bibliothèque</Link>
                <Link to="/collaboration" className="hover:bg-black hover:text-white rounded-md px-2">Collaborations</Link>
                <Link to="/store" className="hover:bg-black hover:text-white rounded-md px-2">La Boutique</Link>
                <Link to="/about" className="hover:bg-black hover:text-white rounded-md px-2">Notre Histoire</Link>
            </nav>

            {/* Icons */}
            <div className="hidden lg:flex items-center space-x-4">
                <Search className="w-5 h-5 cursor-pointer hover:text-gray-500" />
                <User className="w-5 h-5 cursor-pointer hover:text-gray-500" />
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {menuOpen ? (
                        <X className="w-6 h-6 text-black" />
                    ) : (
                        <Menu className="w-6 h-6 text-black" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 z-50">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-black hover:text-gray-500"
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Links */}
                    <Link
                        to="/shop"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Shop
                    </Link>
                    <Link
                        to="/lookbook"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Lookbook
                    </Link>
                    <Link
                        to="/library"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Bibliothèque
                    </Link>
                    <Link
                        to="/collaboration"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Collaborations
                    </Link>
                    <Link
                        to="/store"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        La Boutique
                    </Link>
                    <Link
                        to="/about"
                        className="text-xl hover:bg-black hover:text-white rounded-md px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Notre Histoire
                    </Link>

                    <div className="flex items-center space-x-6 mt-8">
                        <Search className="w-6 h-6 cursor-pointer hover:text-gray-500" />
                        <User className="w-6 h-6 cursor-pointer hover:text-gray-500" />
                        <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-500" />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
