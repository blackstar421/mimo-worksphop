"use client";
import { WORKSHOP_IMAGES } from "@/constants/workshop";
import Image from "next/image";
import React, { useState } from "react";
import { BiPlayCircle } from "react-icons/bi";

const Workshop: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = () => {
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
  };

  const displayVideoThumbnail = () => {
    return (
      <div
        className="relative group cursor-pointer w-full h-64 rounded-lg overflow-hidden shadow-lg"
        onClick={openVideo}
      >
        <Image
          width={200}
          height={300}
          src="https://images.pexels.com/photos/3737691/pexels-photo-3737691.jpeg"
          alt="Vidéo de l'atelier"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <BiPlayCircle size={24} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-medium">
            Visite guidée de notre atelier (2:30)
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="workshop" className="py-20 bg-wood-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Visitez Notre Atelier</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Découvrez les coulisses de notre atelier, où tradition et innovation
            se rencontrent pour donner vie à vos projets en bois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Un espace dédié à l'excellence artisanale
            </h3>
            <p className="text-gray-300 mb-6">
              Notre atelier de 200m² situé à Fontainebleau réunit tous les
              équipements nécessaires à la réalisation de pièces d'exception.
              Des outils traditionnels aux machines modernes, nous disposons des
              moyens techniques pour répondre à tous vos projets, des plus
              simples aux plus complexes.
            </p>
            <p className="text-gray-300 mb-8">
              Chaque poste de travail est organisé pour garantir un flux de
              production optimal, de la préparation du bois brut jusqu'aux
              finitions les plus délicates. Notre équipe d'artisans qualifiés
              partage cet espace avec passion et rigueur.
            </p>

            <div className="hidden lg:block">{displayVideoThumbnail()}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {WORKSHOP_IMAGES.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  index === WORKSHOP_IMAGES.length - 1 ? "col-span-2" : ""
                }`}
              >
                <Image
                  width={200}
                  height={300}
                  src={image.value}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:hidden">{displayVideoThumbnail()}</div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90"
          onClick={closeVideo}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-amber-500"
            >
              Fermer ×
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Vidéo de présentation de l'atelier</p>
                {/* Placeholder for actual video embed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshop;
