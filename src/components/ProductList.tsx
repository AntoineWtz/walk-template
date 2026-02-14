import React from 'react';
import { Link } from 'react-router-dom';

type Product = { id: number; name: string; price: number; image: string };

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl p-4 shadow">
                    <div className="overflow-hidden rounded-xl h-56">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(p.price)}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                            <button className="px-3 py-2 bg-black text-white rounded-lg text-sm">Ajouter</button>
                            <Link to={`/product/${p.id}`} className="text-xs border px-3 py-2 rounded-lg">Détails</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;