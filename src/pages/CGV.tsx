import React from 'react';
import storeImg1 from '../assets/img/store/store1.jpg';
import logo from '../assets/img/logo-walk-monoblack.png';

const CGV: React.FC = () => {
    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0 text-justify">
            {/* Titre principal */}
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Conditions Générales de Vente</h1>
            </div>

            {/* Article 1 - Largeur complète */}
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 1 - Conditions générales de ventes</h2>
                <p>
                    Les présentes conditions de vente sont conclues d'une part par la SARL WALK IN PARIS, au
                    capital de 1000 euros, dont le siège social est au 66 boulevard Voltaire 75011 Paris, immatriculée
                    au RCS de Créteil sous le numéro 801 756 933, ci-après dénommée « Walk In Paris », et
                    d'autre part, par toute personne physique ou morale souhaitant procéder à un achat via le site
                    Internet www.walkinparis.fr dénommée ci-après « l'acheteur ».
                </p>
            </div>

            {/* Articles 2 à 5 */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 2 - Objet</h2>
                <p>
                    Les présentes conditions de vente visent à définir les relations contractuelles entre WALK IN
                    PARIS et l'acheteur ainsi que les conditions applicables à tout achat effectué par le biais du site
                    marchand www.walkinparis.fr.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 3 - Caractéristiques des biens et services proposés</h2>
                <p>
                    Les produits offerts sont ceux qui figurent dans le catalogue publié dans le site
                    www.walkinparis.fr, dans la limite des stocks disponibles.
                </p>
            </div>
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 4 - Tarifs</h2>
                <p>
                    Les prix figurant dans le catalogue sont des prix TTC en euros tenant compte de la TVA applicable
                    au jour de la commande. WALK IN PARIS se réserve de modifier ses prix à tout moment.
                </p>
            </div>
            <div className="col-span-1 md:col-span-8 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 5 - Aire géographique</h2>
                <p>
                    La vente en ligne des produits présentés sur le site www.walkinparis.fr est disponible en France
                    Métropolitaine, avec des livraisons effectuées par La Poste.
                </p>
            </div>

            {/* Articles 6 à 9 */}
            <div className="col-span-1 md:col-span-8 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 6 - Commandes</h2>
                <p>
                    L'acheteur doit remplir la fiche d'identification, compléter le bon de commande, valider sa
                    commande et effectuer le paiement. Une confirmation de commande sera envoyée par email.
                </p>
            </div>
            <div className="col-span-1 md:col-span-4 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 7 - Rétractation</h2>
                <p>
                    Les acheteurs bénéficient d'un délai de rétractation de 14 jours à compter de la livraison de leur
                    commande pour faire retour du produit au vendeur pour échange ou remboursement.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 8 - Modalité de paiement</h2>
                <p>
                    Les paiements sont effectués par carte bancaire ou PayPal via un système sécurisé.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 9 - Livraisons</h2>
                <p>
                    Les livraisons sont faites à l'adresse indiquée dans le bon de commande. En cas de dommage
                    pendant le transport, une réclamation doit être faite sous 3 jours.
                </p>
            </div>

            {/* Articles 10 à 15 */}
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 10 - Retours</h2>
                <p>
                    Tous les produits bénéficient de la garantie légale prévue par les articles 1641 et suivants du
                    Code civil. Les retours doivent être adressés à : SNA GZ, ZA de Sainte-Anne, 61190 TOUROUVE AU
                    PERCHE.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 11 - Responsabilité</h2>
                <p>
                    Le vendeur n'est tenu que par une obligation de moyens dans le processus de vente en ligne.
                </p>
            </div>
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 12 - Propriété intellectuelle</h2>
                <p>
                    Tous les éléments du site de WALK IN PARIS sont la propriété intellectuelle exclusive de WALK IN
                    PARIS.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 13 - Données à caractère personnel</h2>
                <p>
                    Les informations collectées peuvent faire l'objet d'un traitement automatisé.
                </p>
            </div>
            <div className="col-span-1 md:col-span-6 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 14 - Archivage et preuve</h2>
                <p>
                    WALK IN PARIS archivera les bons de commande et les factures sur un support fiable et durable.
                </p>
            </div>
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Article 15 - Règlement des litiges</h2>
                <p>
                    Les présentes conditions sont soumises à la loi française. En cas de litige, compétence est
                    attribuée aux tribunaux de Paris.
                </p>
            </div>

            {/* Trois premiers blocs */}
            {/*  carrée */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <img
                    src={storeImg1}
                    alt="Store 1"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            {/* Informations de l'adresse */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 bg-white p-6 rounded-2xl shadow">
                <img
                    src={logo}
                    alt="Walk in Paris Logo"
                    loading="lazy"
                    className="w-48 h-48 object-contain mx-auto"
                />
                <p className="text-base md:text-lg text-center font-bold mb-8">32 rue Yves Toudic, 75010 Paris</p>
                <ul className="text-base md:text-lg text-left">
                    <li><strong>Lundi :</strong> 14:00 - 19:00</li>
                    <li><strong>Mardi au samedi :</strong> 11:00 - 14:00 / 15:00 - 19:00</li>
                    <li><strong>Dimanche :</strong> 14:00 - 19:30</li>
                </ul>
            </div>
            {/* Carte Google Maps */}
            <div className="col-span-1 md:col-span-4 md:row-span-4 overflow-hidden rounded-2xl shadow">
                <iframe
                    title="Walk in Paris - Localisation"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8974195264477!2d2.362491215928524!3d48.86864367928866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1e8fd6edc1%3A0xf74cb33aa902248a!2s32%20Rue%20Yves%20Toudic%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1693938880377!5m2!1sen!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-2xl"
                ></iframe>
            </div>
        </div>
    );
};

export default CGV;
