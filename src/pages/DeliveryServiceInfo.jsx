import React from "react";
import { FaShippingFast, FaUndo, FaHeadset, FaLock } from "react-icons/fa";

const DeliveryServiceInfo = () => {
  const services = [
    {
      icon: <FaShippingFast className="text-blue-400 text-4xl" />,
      title: "Fast Delivery",
      desc: "We deliver your toys quickly and safely to your doorstep.",
    },
    {
      icon: <FaUndo className="text-pink-400 text-4xl" />,
      title: "Easy Return",
      desc: "Hassle-free return policy for your peace of mind.",
    },
    {
      icon: <FaHeadset className="text-yellow-400 text-4xl" />,
      title: "24/7 Support",
      desc: "Our support team is always here to assist you anytime.",
    },
    {
      icon: <FaLock className="text-green-400 text-4xl" />,
      title: "Secure Payment",
      desc: "Your transactions are always encrypted and secure.",
    },
  ];

  return (
    <section className="my-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">
        Delivery & Service Info
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 backdrop-blur-lg bg-white/10 border border-gray-300 rounded-xl shadow hover:scale-105 transition-all"
          >
            <div className="flex justify-center mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryServiceInfo;
