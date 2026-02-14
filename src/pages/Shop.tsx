import React, { useMemo, useState } from 'react';
import storeImg2 from '../assets/img/store/store2.jpg';
import storeImg3 from '../assets/img/store/store3.jpg';
import storeImg4 from '../assets/img/store/store4.jpg';
import storeImg5 from '../assets/img/store/store5.jpg';
import ProductList from '../components/ProductList';

type Product = { id: number; name: string; price: number; image: string };

const Shop: React.FC = () => {
    const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

    const products: Product[] = useMemo(
        () => [
            { id: 1, name: 'Survêtement Noir', price: 89, image: storeImg2 },
            { id: 2, name: 'Veste Le Meurice', price: 129, image: storeImg3 },
            { id: 3, name: 'Hoodie Oversize', price: 79, image: storeImg4 },
            { id: 4, name: 'T-shirt Logo', price: 39, image: storeImg5 },
        ],
        []
    );

    const sorted = useMemo(() => {
        if (sort === 'price-asc') return [...products].sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') return [...products].sort((a, b) => b.price - a.price);
        return products;
    }, [products, sort]);

    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Boutique — Collections</h1>
                <p className="text-sm text-gray-600 mt-2">Pièces sélectionnées — livraison et retours standard.</p>
            </div>

            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-gray-600">{products.length} produits disponibles</p>
                    <div className="flex items-center space-x-3">
                        <label className="text-sm text-gray-600">Trier</label>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value as any)}
                            className="border rounded-md px-3 py-1 text-sm"
                        >
                            <option value="popular">Popularité</option>
                            <option value="price-asc">Prix croissant</option>
                            <option value="price-desc">Prix décroissant</option>
                        </select>
                    </div>
                </div>

                <ProductList products={sorted} />
            </div>
        </div>
    );
};

export default Shop;