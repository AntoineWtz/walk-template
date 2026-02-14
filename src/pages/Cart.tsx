import React, { useMemo, useState } from 'react';
import storeImg2 from '../assets/img/store/store2.jpg';

type CartItem = { id: number; name: string; price: number; qty: number; image: string };

const Cart: React.FC = () => {
    const [items, setItems] = useState<CartItem[]>([
        { id: 1, name: 'Survêtement Noir', price: 89, qty: 1, image: storeImg2 },
        { id: 2, name: 'T-shirt Logo', price: 39, qty: 2, image: storeImg2 },
    ]);

    const updateQty = (id: number, qty: number) => {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
    };
    const remove = (id: number) => setItems((prev) => prev.filter((it) => it.id !== id));

    const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
    const shipping = subtotal > 150 ? 0 : 6.9;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Mon Panier</h1>
            </div>

            <div className="col-span-1 md:col-span-8 bg-white rounded-2xl p-6 shadow">
                {items.length === 0 ? (
                    <p className="text-gray-600">Votre panier est vide.</p>
                ) : (
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <strong className="block">{item.name}</strong>
                                    <p className="text-sm text-gray-600">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.price)}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="px-2" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                                    <div className="px-3">{item.qty}</div>
                                    <button className="px-2" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                                </div>
                                <div className="w-32 text-right">
                                    <p className="font-semibold">
                                        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.price * item.qty)}
                                    </p>
                                    <button className="text-sm text-red-500 mt-2" onClick={() => remove(item.id)}>Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">Récapitulatif</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Sous-total</span>
                    <strong>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(subtotal)}</strong>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Livraison</span>
                    <strong>{shipping === 0 ? 'Offerte' : new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(shipping)}</strong>
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between text-base font-semibold mb-4">
                        <span>Total</span>
                        <span>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(total)}</span>
                    </div>
                    <a href="/checkout" className="block text-center px-4 py-3 bg-black text-white rounded-xl">Passer à la caisse</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;