import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="md:flex flex-col md:flex-row md:justify-between items-start py-10 md:mx-20">

        {/* Brand + Contact */}
        <div className="mb-7 md:ml-0 mx-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold">KidsToy</span>
          </div>
          <p>Location: av. Washington 165, NY 54003</p>
          <p>Phone: +31 85 964 47 25</p>
          <p>Email: info@yourdomain.com</p>
          <p>Opening hours: 9.00 AM - 5.00 PM</p>

          {/* Social Links */}
          <div className="flex items-center mt-3 gap-3">
            <a
              href="https://www.facebook.com/mahfuzur.rahman.98284"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook text-4xl hover:scale-110 transition-transform duration-300 text-[#0090ff]"></i>
            </a>

            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter text-4xl hover:scale-110 transition-transform duration-300 text-white"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube text-4xl hover:scale-110 transition-transform duration-300 text-[#ff0000]"></i>
            </a>

            <a href="https://www.linkedin.com/in/mahfuzur-rahman-280471392/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in text-4xl hover:scale-110 transition-transform duration-300 text-[#0A66C2]"></i>

            </a>
          </div>
        </div>

        {/* Conditions */}
        <div className="mb-7 md:ml-0 mx-5">
          <h1 className="text-2xl font-semibold mb-2">Our Condition</h1>

          <a href="/terms" className="hover:underline my-2 block">
            Terms & Conditions
          </a>

          <a href="/privacy" className="hover:underline block">
            Privacy Policy
          </a>
        </div>

        {/* Useful Links */}
        <div className="mb-7 md:ml-0 mx-5">
          <h3 className="text-2xl mb-2 font-semibold">Useful Links</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Join Us</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div id="contact" className="md:ml-0 mx-5">
          <h3 className="text-2xl mb-2 font-semibold">Drop a Message</h3>

          <input
            className="my-3 py-2 px-4 rounded-md bg-white/10 text-white 
            placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            type="text"
            placeholder="Enter Your Email"
          />

          <div>
            <button className="btn backdrop-blur-lg bg-white/10 border-none shadow-none">
              <span className="text-white">Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-white/10 text-gray-300">
        © {new Date().getFullYear()} KidsToy — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
