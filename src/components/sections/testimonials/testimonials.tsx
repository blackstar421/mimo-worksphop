"use client";
import { TESTIMONIALS } from "@/constants/testimonial";
import Image from "next/image";
import { useState, useEffect, useRef, FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsQuote } from "react-icons/bs";

const Testimonials: FC = () => {
  const testimonials = TESTIMONIALS;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Ce que disent nos clients</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            La satisfaction de nos clients est notre priorité. Découvrez leurs
            témoignages sur notre travail et notre service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div
            className="relative overflow-hidden bg-wood-50 rounded-lg shadow-lg p-8 md:p-12"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            <div className="absolute top-8 left-8 opacity-20">
              <BsQuote size={64} className="text-amber-700" />
            </div>

            <div className="relative z-10">
              <div
                className={`transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      width={200}
                      height={300}
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-700"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-wood-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-amber-700">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-wood-900 hover:text-amber-700 transition-colors z-20"
          >
            <BiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-wood-900 hover:text-amber-700 transition-colors z-20"
          >
            <BiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex
                    ? "bg-amber-700"
                    : "bg-gray-300 hover:bg-amber-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
