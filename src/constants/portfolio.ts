import { WorkCategoryEnum } from "@/enum/categories.enum";
import { IOptionItem, IProjectItem } from "@/interfaces/ui";

export const WORK_CATEGORIES: IOptionItem[] = [
  { value: WorkCategoryEnum.all, name: "Tous" },
  { value: WorkCategoryEnum.furniture, name: "Meubles" },
  { value: WorkCategoryEnum.kitchen, name: "Cuisines" },
  { value: WorkCategoryEnum.interior, name: "Agencement" },
  { value: WorkCategoryEnum.restoration, name: "Restauration" },
];

export const PORTFOLIO_PROJECTS: IProjectItem[] = [
  {
    id: 1,
    title: "Bibliothèque sur Mesure",
    category: WorkCategoryEnum.furniture,
    image: "https://images.pexels.com/photos/2062432/pexels-photo-2062432.jpeg",
    description:
      "Bibliothèque en chêne massif avec échelle coulissante, réalisée sur mesure pour un salon parisien.",
  },
  {
    id: 2,
    title: "Cuisine Contemporaine",
    category: WorkCategoryEnum.kitchen,
    image: "https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg",
    description:
      "Aménagement complet d'une cuisine moderne alliant bois et matériaux contemporains.",
  },
  {
    id: 3,
    title: "Table Basse Noyer",
    category: WorkCategoryEnum.furniture,
    image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
    description:
      "Table basse en noyer américain avec finition à l'huile naturelle.",
  },
  {
    id: 4,
    title: "Agencement Boutique",
    category: WorkCategoryEnum.interior,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
    description:
      "Conception et réalisation de l'aménagement complet d'une boutique de vêtements.",
  },
  {
    id: 5,
    title: "Restauration Commode Louis XV",
    category: WorkCategoryEnum.restoration,
    image: "https://images.pexels.com/photos/6306386/pexels-photo-6306386.jpeg",
    description:
      "Restauration complète d'une commode d'époque avec reprise des marqueteries et bronzes.",
  },
  {
    id: 6,
    title: "Dressing sur Mesure",
    category: WorkCategoryEnum.interior,
    image: "https://images.pexels.com/photos/7195802/pexels-photo-7195802.jpeg",
    description:
      "Dressing complet avec portes coulissantes et aménagements intérieurs personnalisés.",
  },
];
