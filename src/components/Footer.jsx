import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 py-10 mt-16 text-center md:text-left">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/*  Brand */}
        <div>
          <h3 className="text-3xl font-bold text-green-800 mb-3">GreenNest</h3>
          <p className="text-green-700">
            Bringing nature closer to your home with beautiful indoor plants.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-green-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-green-700">
            <li className="hover:text-green-900 cursor-pointer transition">About</li>
            <li className="hover:text-green-900 cursor-pointer transition">Contact</li>
            <li className="hover:text-green-900 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/*  Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-green-800 mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-6 text-green-700">
            <a href="#" className="hover:text-green-900 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-green-900 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-green-900 transition">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔸 Bottom text */}
      <div className="border-t border-green-300 mt-10 pt-4 text-sm text-green-700 text-center">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
