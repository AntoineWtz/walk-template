import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex items-center justify-center gap-28 px-8 py-4">
            <Link to="/" className="text-3xl font-bold font-serif">
                WALK IN PARIS
            </Link>
            <nav className="flex items-center space-x-6 uppercase">
                <Link to="/shop" className="hover:bg-black hover:text-white rounded-md px-2">Shop</Link>
                <Link to="/lookbook" className="hover:bg-black hover:text-white rounded-md px-2">Lookbook</Link>
                <Link to="/library" className="hover:bg-black hover:text-white rounded-md px-2">Bibliothèque</Link>
                <Link to="/collaboration" className="hover:bg-black hover:text-white rounded-md px-2">Collaborations</Link>
                <Link to="/store" className="hover:bg-black hover:text-white rounded-md px-2">La Boutique</Link>
                <Link to="/about" className="hover:bg-black hover:text-white rounded-md px-2">Notre Histoire</Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 cursor-pointer hover:text-gray-500" />
                <User className="w-5 h-5 cursor-pointer hover:text-gray-500" />
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            </div>
        </header>
    );
};

export default Header;
