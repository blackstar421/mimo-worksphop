"use client";
import Link from "next/link";
import { Logo } from "../logo/logo";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed transition-all ${
        isScrolled
          ? "bg-amber-700/50 py-3 shadow-md backdrop-filter backdrop-blur-md"
          : " bg-transparent py-4"
      } top-0 w-full z-[100] px-8 flex items-center justify-between`}
    >
      <div className="flex-shrink-0">
        <Logo dark={isScrolled} />
      </div>
      <ul className="flex flex-row gap-4 list-none m-0 p-0">
        {NAV_LINKS.map((n, key) => (
          <li key={key}>
            <Link
              href={n.value}
              className="text-neutral-800 hover:text-black transition-colors bg-white px-4 py-2 rounded-md"
            >
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
