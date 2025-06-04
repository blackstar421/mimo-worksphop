import { QUALITIES } from "@/constants/qualities";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiCheck } from "react-icons/bi";

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-wood-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                width={200}
                height={300}
                src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg"
                alt="Artisan menuisier travaillant"
                className="w-full h-auto"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-64 h-64 bg-amber-700 rounded-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 bg-wood-800 rounded-lg -z-10"></div>
          </div>

          <div>
            <div className="text-center mb-16">
              <h2>Notre Histoire & Notre Expertise</h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
            </div>
            <div className="relative lg:hidden mb-6">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  width={200}
                  height={300}
                  src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg"
                  alt="Artisan menuisier travaillant"
                  className="w-full h-auto"
                />
              </div>
              <div className=" absolute -bottom-6 -right-6 w-64 h-64 bg-amber-700 rounded-lg -z-10"></div>
              <div className=" absolute -top-6 -left-6 w-32 h-32 bg-wood-800 rounded-lg -z-10"></div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Fondé en 1985 par Jean Martin, notre atelier de menuiserie
              perpétue les traditions artisanales tout en intégrant les
              techniques modernes. Depuis plus de 35 ans, nous mettons notre
              savoir-faire au service de projets uniques, alliant esthétique et
              fonctionnalité.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Aujourd&apos;hui, c&apos;est Thomas Martin qui dirige
              l&apos;atelier, perpétuant l&apos;héritage familial avec la même
              passion et exigence. Notre équipe de quatre artisans qualifiés
              travaille avec minutie pour réaliser vos projets les plus
              ambitieux.
            </p>

            <div className="space-y-3 mb-8">
              {QUALITIES.map((quality, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BiCheck size={18} className="text-amber-700" />
                  </div>
                  <p className="ml-3 text-gray-700">{quality}</p>
                </div>
              ))}
            </div>

            <Link
              href="#workshop"
              className="inline-block bg-wood-800 hover:bg-wood-900 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
            >
              Découvrir notre atelier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
