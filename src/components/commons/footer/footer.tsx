import { FC } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Logo } from "../logo/logo";
import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = FOOTER_LINKS;

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "#" },
    { icon: <BsInstagram size={20} />, href: "#" },
    { icon: <BsLinkedin size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-wood-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <Logo />
            <p className="text-gray-400 mb-6">
              L'excellence de l'artisanat français en menuiserie depuis 1985.
              Notre atelier réalise des créations sur mesure et des
              restaurations de qualité pour particuliers et professionnels.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-wood-800 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-wood-700 transition-colors duration-300"
                  aria-label="Social media"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-serif font-bold mb-6 text-amber-500">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-wood-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Atelier Martin. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 text-sm"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 text-sm"
              >
                Conditions d'utilisation
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 text-sm"
              >
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
