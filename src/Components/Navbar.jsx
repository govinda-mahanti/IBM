import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // For proper navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items in one place
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav
      className="px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-semibold text-lg">EMOTVR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-purple-300"
                    : "text-white hover:text-purple-200"
                } transition-colors font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Sign Up */}
          <div className="hidden md:block">
            <Link
              to="/signup"
              className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2"
            >
              <User size={18} />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-800 rounded-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-purple-300"
                      : "text-white hover:text-purple-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Sign Up */}
              <div className="pt-2">
                <Link
                  to="/signup"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

