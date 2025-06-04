import React, { FC } from "react";
import ServiceCard from "@/components/commons/service-card/service-card";
import { SERVICES_LIST } from "@/constants/services";

const Services: FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Nos Services</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Nous proposons une gamme complète de services de menuiserie
            artisanale, adaptés à vos besoins et réalisés avec excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
