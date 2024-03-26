'use client'
import NavLinks from "./nav-links";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

function PopUp({ closePopUp }: Readonly<{ closePopUp: () => void }>) {
    return (
        <div className="fixed z-10 bg-white p-4 rounded shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="my-3">
                <Image
                    src="/profile_picture.jpg"
                    alt="profile"
                    className="object-none object-fill w-24 h-24 rounded-full cursor-pointer"
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <div className="text-left">
                <h1>Valentin Peyratout</h1>
                <h2>23 ans</h2>
                <h2>Bordeaux</h2>
                <h2>Recherche une alternance de Développeur Web</h2>
            </div>
            <button onClick={closePopUp} className="mt-4 bg-black text-white px-3 py-1 rounded">
                Fermer
            </button>
        </div>
      );
}


export default function Header() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const [isElementVisible, setElementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setElementVisible(scrollY < 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const openPopUp = () => {
        setIsPopUpOpen(true);
    };

    const closePopUp = () => {
        setIsPopUpOpen(false);
    };
        return (
        <div className="fixed z-20 flex w-full flex-col items-center justify-between px-14 py-2 bg-white text-gray shadow-md md:flex-row">
            <div>
                <button onClick={openPopUp} className={`font-bolder flex flex-row gap-5 items-center transition-all duration-200 ${isElementVisible ? 'opacity-100 h-24' : 'opacity-0 pointer-events-none h-4'}`}>
                    <div>
                        <Image
                            src="/profile_picture.jpg"
                            alt="Val Photo"
                            className="object-none object-fill min-w-24 h-24 rounded-full cursor-pointer"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                    <div className="text-left">
                        <h1>Valentin Peyratout</h1>
                        <h2>Full Stack Developper</h2>
                    </div>

                </button>
                
            </div>
            {isPopUpOpen && <PopUp closePopUp={closePopUp} />}
            <div className="flex">
                <NavLinks/>
            </div>
            
        </div>
    )

}