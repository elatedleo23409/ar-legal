import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <a
              href="#"
              className="hover:text-primary-700 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-primary-700 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <details className="relative group">
              <summary className="list-none cursor-pointer font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                Practice Areas
                <span className="material-symbols-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-300">
                  expand_more
                </span>
              </summary>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 w-48 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                >
                  Property Law
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                >
                  Family Law
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                >
                  Corporate Law
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                >
                  Criminal Law
                </a>
              </div>
            </details>
            <a
              href="#"
              className="hover:text-primary-700 transition-colors duration-300 font-medium"
            >
              Attorneys
            </a>
            <a
              href="#"
              className="hover:text-primary-700 transition-colors duration-300 font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-primary-700 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-primary-700 text-white px-5 py-2 rounded-md hover:bg-primary-800 transition-colors duration-300"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu */}
          <details className="md:hidden relative">
            <summary className="list-none">
              <span className="material-symbols-outlined text-3xl cursor-pointer">
                menu
              </span>
            </summary>
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-md p-4 w-48 z-50">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Practice Areas
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Attorneys
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="bg-primary-700 text-white px-4 py-2 rounded-md text-center hover:bg-primary-800 transition-colors duration-300"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
