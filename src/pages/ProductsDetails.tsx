import React, { useState } from 'react';
import storeImg3 from '../assets/img/store/store3.jpg';

const ProductsDetails: React.FC = () => {
    const [qty, setQty] = useState<number>(1);
    const [size, setSize] = useState<string>('M');

    const product = {
        id: 1,
        name: 'Veste Le Meurice',
        price: 129,
        image: storeImg3,
        description:
            "Veste inspirée du vestiaire rétro, coupe oversized, matière douce et finitions couture. Disponible en plusieurs tailles.",
    };

    return (
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-6 overflow-hidden rounded-2xl shadow">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl font-semibold mb-4">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</p>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Taille</label>
                    <select value={size} onChange={(e) => setSize(e.target.value)} className="border rounded-md px-3 py-2">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>

                <div className="mb-6 flex items-center space-x-4">
                    <label className="text-sm">Quantité</label>
                    <div className="flex items-center border rounded-md overflow-hidden">
                        <button className="px-3 py-2" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                        <div className="px-4">{qty}</div>
                        <button className="px-3 py-2" onClick={() => setQty((q) => q + 1)}>+</button>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-black text-white rounded-xl">Ajouter au panier</button>
                    <button className="px-6 py-3 border rounded-xl">Acheter maintenant</button>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;