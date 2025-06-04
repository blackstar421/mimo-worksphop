import { WorkCategoryEnum } from "@/enum/categories.enum";
import { ReactNode } from "react";

export interface IOptionItem {
  name: string;
  value: string;
}

export interface IServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IProjectItem {
  id: number;
  title: string;
  category: WorkCategoryEnum;
  image: string;
  description: string;
}

export interface ITestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}
