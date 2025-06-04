"use client";
import { WORK_CATEGORIES } from "@/constants/portfolio";
import { IProjectItem } from "@/interfaces/ui";
import { FC, useRef } from "react";
import PortfolioItemModal, {
  PortfolioItemModalRef,
} from "./portfolio-item-modal";
import Image from "next/image";

const PortfolioItem: FC<IProjectItem> = (props) => {
  const modalRef = useRef<PortfolioItemModalRef>(null);

  const handleModalOpen = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <div
      className="group relative cursor-pointer bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl"
      onClick={handleModalOpen}
    >
      <div className="aspect-w-4 aspect-h-3 overflow-hidden">
        <Image
          width={300}
          height={200}
          src={props.image}
          alt={props.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-white mb-2">
            {props.title}
          </h3>
          <p className="text-amber-200 text-sm">
            {WORK_CATEGORIES.find((c) => c.value === props.category)?.name}
          </p>
        </div>
      </div>
      <PortfolioItemModal ref={modalRef} details={props} />
    </div>
  );
};

export default PortfolioItem;
