import { IServiceCard } from "@/interfaces/ui";
import Link from "next/link";
import { FC } from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const ServiceCard: FC<IServiceCard> = (props) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
      <div className="mb-4">{props.icon}</div>
      <h3 className="text-xl font-serif font-bold text-wood-900 mb-3">
        {props.title}
      </h3>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <Link
        href="#contact"
        className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
      >
        En savoir plus <MdOutlineChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
