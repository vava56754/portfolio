'use client'
import Carousel from "../ui/image-title"
import Square from "../ui/square"
import Image from "next/image"
import React, { useState } from 'react';


export default function Page() {
    const [selectedImage, setSelectedImage] = useState(null);

        const openModal = (imageSrc: any, event: any) => {
            event.stopPropagation();
            setSelectedImage(imageSrc);
        };

        const closeModal = (event: any) => {
            event.stopPropagation();
            setSelectedImage(null) ;
        };

    return (
        <div>
            <Carousel src="/project.jpg" alt="project" ligne1="Mes Projets" ligne2="" />
            
            <div className="m-16 text-center text-2xl border-b-4  border-black">
                <h1 className="my-4">Mes Projets</h1>
            </div>
            <div className="flex flex-col justify-center md:flex-row my-32 gap-8">
                <Square
                title="Bio International"
                content={                   
                    <div className="container mx-auto p-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Contexte</h2>
                                <p className="mb-2">Ce projet remonte au BTS. Il s'agit d'un de mes projets de stage, que j'ai décidé de refaire avec de nouvelles technologies plus adaptées et de mettre en pratique mes nouvelles connaissances.</p>
                                <p className="mb-2">Le projet consistait à réaliser un site web où l'on pouvait réserver des produits cosmétiques et avoir une présentation de l'entreprise. L'entreprise ne souhaitant pas de paiement en ligne, m'a indiqué d'informer les utilisateurs par mail que leurs commandes peuvent être prises et compte, validées (lorsque le paiement est réalisé) et livrées à leur domicile.</p>
                                <p>Les produits appartiennent à une maison (marque).</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Aperçu</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/menu.png", event)}>
                                            <Image
                                                src="/biointer/menu.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={400}
                                                priority
                                            />

                                        </div>
                                        
                                        <p className="mt-2">Page d'accueil avec un défilement d'images et du texte de présentation.</p>
                                    </div>
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/produit-1.png",event)}>
                                            <Image
                                                src="/biointer/produit-1.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={400}
                                                priority
                                            />
                                        </div>  
                                        <p className="mt-2">Page des produits où l'on peut trier par type (crème, shampoing) ou partie du corps (cheveux, visage, main).</p>
                                    </div>
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/produit-2.png", event)}>
                                            <Image
                                                src="/biointer/produit-2.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/produit-3.png", event)}>
                                            <Image
                                                src="/biointer/produit-3.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={600}
                                                height={100}
                                                priority
                                            />
                                        </div>
                                        
                                        <p className="mt-2">Page d'un des produits avec le nom la quantité a réserver, et les details qui le concerne.</p>
                                    </div>
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/produit-4.png", event)}>
                                            <Image
                                                src="/biointer/produit-4.png"
                                                alt="Val Photo"
                                                className="dark:invert  rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />
                                        </div>
                                        
                                        <p className="mt-2">Recherche dynamique d'un produit.</p>
                                    </div>
                                    <div className="mb-4 relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/biointer/admin-produit.png", event)}>
                                            <Image
                                                src="/biointer/admin-produit.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />

                                        </div>
                                        
                                        <p className="mt-2">Interface administrateur pour gérer les produits.</p>
                                        <p className="mt-2">Il y a aussi une interface pour gérer les types, les maisons et les commandes à valider.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                        
                }/>

                <Square
                    title="Ce site"
                    content={
                        <div className="container mx-auto p-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Contexte</h2>
                                <p className="mb-2">J'ai décidé de me mettre au défi, de réaliser mon site portfolio en React et plus précisément en NextJs</p>
                                <p className="mb-2">Une technologie que je n'avais jamais utilisée auparavant, à laquelle j'ai pu m'adapter facilement et bien comprendre ses principes.</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="mb-4 text-left">
                                        <p className="mt-2">J'ai essayé d'être le plus générique possible en créant des composants réutilisables sur chaque page.</p>
                                    </div>
                                    <div className="mb-4 text-left">
                                        <p className="mt-2">Je l'ai rendu dynamique et fluide pour une meilleure expérience utilisateur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }/>
                <Square
                    title="A venir"
                    content={
                        <div className="container mx-auto p-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Contexte</h2>
                                <p className="mb-2">Je suis musicien et j'utilise un logiciel DAW (Digital Audio Workstation)  comme Ableton, FL Studio qui permet de traiter, d'enregistrer des pistes audio mais aussi des pistes MIDI (langage informatique pour la musique).</p>
                                <p className="mb-2">Je voudrais donc créer une solution web DAW qui soit accessible depuis un navigateur proposant les mêmes fonctionnnalités qu'un logiciel classique.</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Problématiques</h2>
                                <p className="mt-2 mb-4">En effet plusieurs problématiques se posent :</p>
                                <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-">
                                    <div className="mb-4 text-left">
                                        <p className="mt-2">La première est de savoir quelles ressources demandent un logiciel classique de DAW pour pouvoir l'adapter sur un navigateur et pour garder une solution fluide.</p>
                                    </div>
                                    <div className="mb-4 text-left">
                                        <p className="mt-2">La deuxième consiste à gérer l'enregistrement audio en temps réel, sans trop de décalage de son pour avoir une bonne expérience lorsque que l'on enregistre une guitare ou d'autres instruments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Apercu d'un DAW (Ableton)</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-baseline">
                                    <div className="mb-4 text-left relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/ableton/ensemble.png", event)}>
                                            <Image
                                                src="/ableton/ensemble.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />

                                        </div>
                                        
                                        <p className="mt-2">Vue d'ensemble du logiciel Ableton.</p>
                                    </div>
                                    
                                    <div className="mb-4 text-left relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/ableton/editeur.png", event)}>
                                            <Image
                                                src="/ableton/editeur.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />

                                        </div>
                                        
                                        <p className="mt-2">Editeur où l'on enregistre, coupe, colle les pistes et où l'on peut aussi gérer les volumes de chaque piste.</p>
                                    </div>
                                    <div className="mb-4 text-left relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/ableton/nav.png", event)}>
                                            <Image
                                                src="/ableton/nav.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={700}
                                                height={100}
                                                priority
                                            />
                                        </div>
                                        
                                        <p className="mt-2">Navigation du logiciel pour accéder à différents instruments, effets ou autre.</p>
                                    </div>
                                    
                                    <div className="mb-4 text-left relative">
                                        <div className="hover-overlay" onClick={(event) => openModal("/ableton/effet.png", event)}>
                                            <Image
                                                src="/ableton/effet.png"
                                                alt="Val Photo"
                                                className="dark:invert rounded-md cursor-pointer"
                                                width={900}
                                                height={200}
                                                priority
                                            />

                                        </div>
                                        
                                        <p className="mt-2 mb-8">Editeur où l'on ajoute les effets à la chaine et des instruments virtuels si c'est une piste MIDI.</p>
                                    </div>
                                </div>
                                <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Technologies</h2>
                                <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-">
                                    <div className="mb-4 text-left">
                                        <p className="mt-2">Les technologies les plus adaptées, d'après mes recherches, seraient Redux(React) et le Web Assembly, tout en utilisant des API déjà existantes comme WEB AUDIO API (pour traiter des sons synthétiques), ou WEB MIDI API (traiter le langage midi).</p>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                }/>
            </div>
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <Image
                            src={selectedImage}
                            alt="Enlarged Image"
                            className="dark:invert rounded-md cursor-pointer"
                            width={1920}
                            height={1080}
                            priority
                        />
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}

        </div>
    )
}