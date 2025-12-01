import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 p-6 sm:p-10 rounded-xl shadow-lg">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
          Contact Us
        </h2>

        <p className="text-center text-white mb-10 text-sm sm:text-base">
          Have questions? We're here to help! Fill out the form and we’ll get back to you.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <form className="space-y-6 w-full">
            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-purple-300"
              ></textarea>
            </div>

            <button className="w-full backdrop-blur-lg bg-white/10 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 w-full">
            <div className="p-5 sm:p-6 backdrop-blur-lg bg-white/10 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">
                📍 Office Address
              </h3>
              <p className="text-white text-sm sm:text-base">
                123 Toy Street, Dhaka, Bangladesh
              </p>
            </div>

            <div className="p-5 sm:p-6 backdrop-blur-lg bg-white/10 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">
                📞 Phone
              </h3>
              <p className="text-white text-sm sm:text-base">+880 1234 567 890</p>
            </div>

            <div className="p-5 sm:p-6 backdrop-blur-lg bg-white/10 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">
                📧 Email
              </h3>
              <p className="text-white text-sm sm:text-base">
                support@kidstoyshop.com
              </p>
            </div>

            <div className="p-5 sm:p-6 backdrop-blur-lg bg-white/10 rounded-xl shadow">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">
                ⏰ Working Hours
              </h3>
              <p className="text-white text-sm sm:text-base">
                Sat–Thu: 9:00 AM - 8:00 PM
              </p>
              <p className="text-white text-sm sm:text-base">Friday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
