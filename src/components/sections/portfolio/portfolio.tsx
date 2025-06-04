import React from "react";
import PortfolioTabs from "./portfolio-tabs";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Nos Réalisations</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez une sélection de nos créations et restaurations, reflétant
            notre savoir-faire et la qualité de notre travail artisanal.
          </p>
        </div>
        <PortfolioTabs />
      </div>
    </section>
  );
};

export default Portfolio;
