import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 p-6 sm:p-10 rounded-xl shadow-lg">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
          Support Center
        </h2>

        <p className="text-center text-white mb-10 text-sm sm:text-base">
          We're here to help! Browse frequently asked questions or contact our support team.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4 sm:space-y-6 mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>

          {[
            {
              q: "How can I track my toy order?",
              a: "After placing your order, you will receive a tracking ID via email. Use it on our tracking page to check delivery updates.",
            },
            {
              q: "What is your return policy?",
              a: "You can return any toy within 7 days if it is unused and in original packaging.",
            },
            {
              q: "Do you provide international shipping?",
              a: "Yes, we deliver toys worldwide, but shipping charges may vary.",
            },
            {
              q: "How can I contact customer support?",
              a: "You can contact us through our support form or email us at support@kidstoyshop.com.",
            },
          ].map((item, idx) => (
            <details key={idx} className="p-4 backdrop-blur-lg bg-white/10 rounded-lg">
              <summary className="font-semibold cursor-pointer text-white">
                {item.q}
              </summary>
              <p className="mt-2 text-white text-sm sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>

        {/* Support Form */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 sm:mb-6">Need More Help?</h3>

          <form className="space-y-4 sm:space-y-6 w-full">
            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">Issue Type</label>
              <select className="w-full p-3 text-white border border-gray-400 rounded-lg focus:ring focus:ring-blue-300">
                <option className="text-white">Order Issue</option>
                <option className="text-white">Payment Problem</option>
                <option className="text-white">Account Support</option>
                <option className="text-white">Report a Bug</option>
                <option className="text-white">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-white text-sm sm:text-base">Describe Your Issue</label>
              <textarea
                rows="5"
                placeholder="Write your issue"
                className="w-full p-3 text-white bg-transparent border border-gray-400 rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            <button className="w-full backdrop-blur-lg bg-white/10 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
