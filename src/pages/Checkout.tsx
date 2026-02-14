import React from 'react';

const Checkout: React.FC = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Paiement & Livraison</h1>
                <p className="text-sm text-gray-600 mt-2">Complétez vos informations pour finaliser la commande.</p>
            </div>

            <form className="col-span-1 md:col-span-8 bg-white rounded-2xl p-6 shadow space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium">Nom complet</label>
                    <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Jean Dupont" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="jean@exemple.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Téléphone</label>
                        <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="06 12 34 56 78" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Adresse</label>
                    <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="32 rue Yves Toudic, 75010 Paris" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Ville" />
                    <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Code postal" />
                    <select className="mt-1 w-full border rounded-md px-3 py-2">
                        <option>France</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Moyen de paiement</label>
                    <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="pay" defaultChecked />
                            <span>Carte bancaire</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="pay" />
                            <span>PayPal</span>
                        </label>
                    </div>
                </div>

                <div className="pt-4">
                    <button className="px-6 py-3 bg-black text-white rounded-xl">Finaliser la commande</button>
                </div>
            </form>

            <aside className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">Votre commande</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Sous-total</span>
                    <strong>€ 198.00</strong>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Livraison</span>
                    <strong>€ 6.90</strong>
                </div>
                <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between text-base font-semibold">
                        <span>Total</span>
                        <span>€ 204.90</span>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Checkout;