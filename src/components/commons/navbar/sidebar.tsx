"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navbar";
import { Logo } from "../logo/logo";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const SidebarNav = ({ onClose }: { onClose: () => void }) => (
  <motion.aside
    className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] flex flex-col p-6 lg:hidden"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={sidebarVariants}
    transition={{ type: "tween", duration: 0.3 }}
  >
    <div className="mb-8 flex items-center justify-end">
      <p className="font-bold text-2xl text-black w-full">Mimo Workshop</p>
      <Button
        aria-label="Fermer la navigation"
        onPress={onClose}
        className="ml-4 text-black bg-white absolute top-0 h-12 w-12 -mr-18 cursor-pointer"
        size="sm"
      >
        ✕
      </Button>
    </div>
    <nav>
      <ul className="flex flex-col gap-4">
        {NAV_LINKS.map((n, key) => (
          <Fragment key={n.value}>
            <li>
              <Link
                href={n.value}
                className="text-neutral-800 hover:text-black transition-colors bg-white px-4 py-2 rounded-md"
                onClick={onClose}
              >
                {n.name}
              </Link>
            </li>
            {key < NAV_LINKS.length && <hr />}
          </Fragment>
        ))}
      </ul>
    </nav>
  </motion.aside>
);

const Sidebar: FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar open button */}
      <div
        className={`fixed transition-all ${
          isScrolled
            ? "bg-amber-700/50 py-3 shadow-md backdrop-filter backdrop-blur-md"
            : " bg-transparent py-4"
        } top-0 w-full z-[100] px-8 flex items-center justify-between`}
      >
        <div className="flex-shrink-0">
          <Logo dark={isScrolled} />
        </div>
        <Button
          aria-label="Ouvrir la navigation"
          onPress={() => setOpen(true)}
          type="button"
          className={`p-4 cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <BiMenu size={20} />
        </Button>
      </div>
      {/* Sidebar and backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 cursor-pointer bg-black/70 hover:bg-black/80 hover:ease-in hover:duration-300 z-[199] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            {/* Sidebar */}
            <SidebarNav onClose={() => setOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
