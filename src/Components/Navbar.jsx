import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import logo from "../assets/logo.png";
import pic from "../assets/pic.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // get auth state from redux
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Persona", path: "/persona", protected: true },
    { label: "Therapist", path: "/therapist", protected: true },
    { label: "Psychiatrist", path: "/psychiatrist", protected: true },
    { label: "Yoga", path: "/yoga", protected: true },
  ];

  // handle nav click
  const handleNavClick = (link) => {
    if (link.protected && !isAuthenticated) {
      navigate("/signup");  // redirect to login/signup
    } else {
      navigate(link.path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-[#2B2B2B]/70 ">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-8 mr-[5px]" />
            <span className="text-white font-bold text-2xl">NeuroCare</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link)}
                className={`${
                  location.pathname === link.path
                    ? "text-purple-300"
                    : "text-white hover:text-purple-200"
                } transition-colors font-medium`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Profile / Sign Up */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <img
                src={pic}
                alt="profile"
                className="bg-white w-10 h-10 rounded-full border-2 border-purple-400 cursor-pointer"
                onClick={() => navigate("/profile")} // profile page route
              />
            ) : (
              <Link
                to="/signup"
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2"
              >
                <User size={18} />
                <span>Signup/Login</span>
              </Link>
            )}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2B2B2B]/90 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-purple-300"
                      : "text-white hover:text-purple-200"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Profile / Sign Up */}
              <div className="pt-2">
                {isAuthenticated ? (
                  <div
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="flex justify-center"
                  >
                    <img
                      src={pic}
                      alt="profile"
                      className=" bg-white w-10 h-10 rounded-full border-2 border-purple-400 cursor-pointer"
                    />
                  </div>
                ) : (
                  <Link
                    to="/signup"
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center justify-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} />
                    <span>Sign Up</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
