import About from "@/components/sections/about/about";
import Blog from "@/components/sections/blog/blog";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Portfolio from "@/components/sections/portfolio/portfolio";
import Services from "@/components/sections/services/services";
import Testimonials from "@/components/sections/testimonials/testimonials";
import Workshop from "@/components/sections/workshop/workshop";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Portfolio />
        <About />
        <Workshop />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
    // <section className="flex flex-col items-center justify-center h-[calc(100vh-57px)]">
    //   <h1 className="text-4xl font-bold">
    //     Bienvenue sur le site de Mimo Workshop
    //   </h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    //   </p>
    // </section>
  );
}
