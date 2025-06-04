import { IServiceCard } from "@/interfaces/ui";
import { FiPenTool } from "react-icons/fi";
import { LuRuler, LuPencil, LuHammer, LuMaximize } from "react-icons/lu";
import { RiPaletteLine } from "react-icons/ri";

export const SERVICES_LIST: IServiceCard[] = [
  {
    icon: <LuRuler size={40} className="text-amber-700" />,
    title: "Menuiserie sur Mesure",
    description:
      "Conception et réalisation de meubles et éléments d'agencement adaptés à vos espaces et besoins spécifiques.",
  },
  {
    icon: <RiPaletteLine size={40} className="text-amber-700" />,
    title: "Restauration",
    description:
      "Restauration d'objets et meubles anciens avec respect des techniques traditionnelles et des matériaux d'origine.",
  },
  {
    icon: <LuPencil size={40} className="text-amber-700" />,
    title: "Conception",
    description:
      "De l'esquisse au plan technique, nous élaborons des solutions personnalisées selon vos envies et contraintes.",
  },
  {
    icon: <LuHammer size={40} className="text-amber-700" />,
    title: "Fabrication",
    description:
      "Réalisation entièrement artisanale dans notre atelier, avec des essences de bois sélectionnées pour leur qualité.",
  },
  {
    icon: <LuMaximize size={40} className="text-amber-700" />,
    title: "Agencement",
    description:
      "Optimisation de vos espaces intérieurs avec des solutions d'aménagement fonctionnelles et esthétiques.",
  },
  {
    icon: <FiPenTool size={40} className="text-amber-700" />,
    title: "Pose",
    description:
      "Installation soignée de vos meubles et aménagements par notre équipe qualifiée, dans les règles de l'art.",
  },
];
