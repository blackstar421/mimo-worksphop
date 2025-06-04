"use client";
import { forwardRef, useImperativeHandle, useState } from "react";
import { IProjectItem } from "@/interfaces/ui";
import { Button } from "@heroui/button";
import { WORK_CATEGORIES } from "@/constants/portfolio";
import Link from "next/link";
import Image from "next/image";

export interface PortfolioItemModalRef {
  openModal: () => void;
}

interface IProps {
  details: IProjectItem;
}

const PortfolioItemModal = forwardRef<PortfolioItemModalRef, IProps>(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = () => {
      setIsOpen(true);
    };

    const onClose = () => {
      setIsOpen(false);
    };

    useImperativeHandle(ref, () => {
      return {
        openModal: onOpen,
      };
    });
    if (!isOpen) {
      return null;
    }
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 transition-opacity duration-300">
        <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
          <Button
            onPress={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white"
          >
            &times;
          </Button>

          <div className="w-full md:w-1/2">
            <Image
              width={300}
              height={200}
              src={props.details.image}
              alt={props.details.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <h3 className="text-2xl font-serif font-bold text-wood-900 mb-4">
              {props.details.title}
            </h3>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                {
                  WORK_CATEGORIES.find(
                    (c) => c.value === props.details.category
                  )?.name
                }
              </span>
            </div>
            <p className="text-gray-600 mb-6">{props.details.description}</p>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
            >
              Projet similaire ? Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

PortfolioItemModal.displayName = "PortfolioItemModal";
export default PortfolioItemModal;
