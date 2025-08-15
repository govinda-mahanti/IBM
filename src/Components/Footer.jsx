import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-gray-200 py-12 px-6"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-purple-400">EMOTVR</h2>
          <p className="text-gray-400 max-w-xs">
            EMOTVR helps you find emotional balance through VR experiences,
            therapists, psychiatrists, and mindfulness sessions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-purple-300">Quick Links</h3>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About Us
          </a>
          <a href="#team" className="hover:text-purple-400 transition-colors">
            Our Team
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Extra Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-purple-300">Resources</h3>
          <a
            href="#privacy"
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-purple-400 transition-colors">
            Terms & Conditions
          </a>
          <a href="#faq" className="hover:text-purple-400 transition-colors">
            FAQs
          </a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-purple-300">Connect</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Email: support@emotvr.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EMOTVR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
