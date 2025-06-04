"use client";
import { IContactForm } from "@/interfaces/form";
import { ContactFormSchema } from "@/lib/yup/contact.schema";
import { Button } from "@heroui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BiCheck, BiPhone, BiSend } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { PiNavigationArrow } from "react-icons/pi";

const Contact: FC = () => {
  const formMethods = useForm<IContactForm>({
    resolver: yupResolver(ContactFormSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after submission
      formMethods.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <BiPhone size={20} className="text-amber-700" />,
      title: "Téléphone",
      content: "+33 1 45 67 89 10",
      link: "tel:+33145678910",
    },
    {
      icon: <CgMail size={20} className="text-amber-700" />,
      title: "Email",
      content: "contact@ateliermartin.fr",
      link: "mailto:contact@ateliermartin.fr",
    },
    {
      icon: <PiNavigationArrow size={20} className="text-amber-700" />,
      title: "Adresse",
      content: "15 rue des Artisans, 77300 Fontainebleau",
      link: "https://maps.google.com",
    },
    {
      icon: <BsClock size={20} className="text-amber-700" />,
      title: "Horaires",
      content: "Lun-Ven: 9h-18h / Sam: 9h-12h",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-wood-900 mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Une question, un projet ou besoin d&apos;un devis ? N&apos;hésitez
            pas à nous contacter, nous vous répondrons dans les meilleurs
            délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BiCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-wood-900 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous contacterons très
                  rapidement.
                </p>
              </div>
            ) : (
              <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom complet<span className="text-red-500">*</span>
                      </label>
                      <input
                        {...formMethods.register("name")}
                        placeholder="Nom complet"
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        {...formMethods.register("email")}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Téléphone<span className="text-red-500">*</span>
                      </label>
                      <input
                        placeholder="Téléphone"
                        type="tel"
                        id="phone"
                        {...formMethods.register("phone")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Sujet<span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        {...formMethods.register("subject")}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="information">Information</option>
                        <option value="rendez-vous">
                          Prise de rendez-vous
                        </option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      {...formMethods.register("message")}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className={`w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center ${
                      isSubmitting ? " cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <BiSend size={18} className="mr-2" />
                        Envoyer votre message
                      </>
                    )}
                  </Button>
                </form>
              </FormProvider>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-serif font-bold text-wood-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-amber-700 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md h-96">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">
                  Carte de localisation de l&apos;atelier
                </p>
                {/* Placeholder for actual map integration */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
