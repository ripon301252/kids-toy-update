import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          About Us
        </h1>

        {/* Intro Section */}
        <p className="text-lg text-gray-300 text-center mb-10">
          Welcome to Kids Toy Store — your trusted destination for safe, fun,
          and creative toys. We believe every child deserves toys that inspire
          imagination, encourage learning, and bring joy.
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 shadow-md hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-3 text-pink-400">Our Mission</h2>
            <p className="text-gray-300">
              Our mission is to provide high-quality, safe, and educational toys
              that help children explore their creativity and develop essential
              life skills. We work hard to collect the best toys from trusted
              brands.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 shadow-md hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Vision</h2>
            <p className="text-gray-300">
              Our vision is to become one of the best kid-friendly toy platforms,
              making smiles and memories across every home. We dream of a world
              where learning and fun come together.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 p-6 rounded-xl border border-gray-700 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-green-400">Quality Toys</h3>
            <p className="text-gray-300">
              We ensure each toy is made with safe materials and premium
              craftsmanship.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-gray-700 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-red-400">Fast Delivery</h3>
            <p className="text-gray-300">
              We deliver your favorite toys quickly and safely to your doorstep.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-gray-700 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-purple-400">Trusted Sellers</h3>
            <p className="text-gray-300">
              All our toys come from verified and trusted toy manufacturers.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
