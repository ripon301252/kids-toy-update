import React from "react";
import { FaHeart, FaHome, FaPaw, FaUsers } from "react-icons/fa";

const WhyCome = () => {
  const reasons = [
    {
      icon: <FaHeart className="text-pink-500 text-3xl" />,
      title: "Premium & Safe Toys",
      desc: "We provide high-quality, child-safe toys that meet international safety standards.",
    },
    {
      icon: <FaPaw className="text-orange-500 text-3xl" />,
      title: "Best Prices Guaranteed",
      desc: "We offer toys at the most affordable prices so every child can enjoy their favorite items.",
    },
    {
      icon: <FaHome className="text-blue-500 text-3xl" />,
      title: "Wide Variety of Toys",
      desc: "From action figures to learning toys — explore thousands of options for every age group.",
    },
    {
      icon: <FaUsers className="text-green-500 text-3xl" />,
      title: "Fast Delivery & Support",
      desc: "Your orders are delivered quickly, with 24/7 customer support for any help you need.",
    },
  ];

  return (
    <section className="my-16 text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us?</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, i) => (
          <div
            key={i}
            className="p-6 backdrop-blur-lg bg-white/10 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 border border-gray-300"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="text-lg text-white font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-white text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCome;
