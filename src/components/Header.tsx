import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex items-center justify-evenly px-8 py-4 bg-white shadow-md">
            <Link to="/" className="text-2xl font-bold font-serif">
                WALK IN PARIS
            </Link>
            <nav className="flex items-center space-x-6">
                <Link to="/shop" className="hover:text-gray-500">Shop</Link>
                <Link to="/lookbook" className="hover:text-gray-500">Lookbook</Link>
                <Link to="/bibliotheque" className="hover:text-gray-500">Bibliothèque</Link>
                <Link to="/collaborations" className="hover:text-gray-500">Collaborations</Link>
                <Link to="/boutique" className="hover:text-gray-500">La Boutique</Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 cursor-pointer" />
                <User className="w-5 h-5 cursor-pointer" />
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
