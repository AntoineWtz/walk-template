import React from 'react';
import { Newspaper } from 'lucide-react';
import homepage1 from '../assets/img/homepage/homepage1.jpg';

const Library: React.FC = () => {
    const posts = [
        { id: 1, title: 'La genèse du label', excerpt: "Retour sur la création et l'état d'esprit Walk in Paris.", image: homepage1 },
        { id: 2, title: 'Rencontres & événements', excerpt: 'Photos et récits de nos derniers événements.', image: homepage1 },
        { id: 3, title: 'Guide des tailles', excerpt: "Conseils d'entretien et guide pour choisir sa taille.", image: homepage1 },
    ];

    return (
        <div className="container mx-auto justify-center grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:gap-12 mt-16 lg:mt-0">
            <div className="col-span-1 md:col-span-12 text-center">
                <h1 className="text-2xl md:text-4xl font-bold">La Bibliothèque</h1>
                <p className="text-sm text-gray-600 mt-2">Articles, interviews et archives.</p>
            </div>

            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-6 shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article key={post.id} className="rounded-2xl overflow-hidden shadow bg-white">
                            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <Newspaper className="w-4 h-4" />
                                    <span>Actualité</span>
                                </div>
                                <h3 className="font-semibold">{post.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                                <div className="mt-4">
                                    <a className="text-sm text-black underline" href="#">Lire l'article</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library;