import { FC } from "react";
import ScrollIndicator from "../../commons/scroll-indicator/scroll-indicator";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <header className="relative bg-[url('/images/atelier_bois.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
      <div className="bg-black/60 p-6 text-center h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Des meubles sur mesure, conçus avec passion.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Chez <span className="font-semibold">Mimo Workshop</span>, chaque
          pièce est unique, fabriquée à la main avec soin et respect des
          matériaux.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#realisations"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Voir nos réalisations
          </Link>
          <Link
            href="#contact"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Demander un devis
          </Link>
        </div>
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default Hero;
