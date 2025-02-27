import { useState } from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaPinterest } from "react-icons/fa";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "Our Services",
    href: "#our-services",
    sublinks: [
      { name: "Link 1", href: "#our-services" },
      { name: "Link2", href: "#our-services" },
      { name: "Link3", href: "#our-services" },
    ],
  },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact-us" },
  { name: "About Us", href: "#about-us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center text-sm space-x-4">
        <span>www.registerkaro.in</span>
        <span>|</span>
        <span>+918447746183</span>
        <span>|</span>
        <div className="flex space-x-2">
          <a href="#" aria-label="Instagram" className="hover:text-blue-200 transition-colors">
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-200 transition-colors">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-200 transition-colors">
            <FiTwitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Other" className="hover:text-blue-200 transition-colors">
            <FaPinterest className="w-5 h-5" /> {/* Placeholder for the fourth icon */}
          </a>
        </div>
      </div>
    </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="relative flex items-center justify-center">
            {/* Link wrapping the logo */}
            <a href="#home">
              {/* GIF */}
              <img
                src="/anima.gif"
                alt="Animated Logo"
                className="absolute h-16 w-[16rem]"
              />

              {/* Static Logo */}
              <img
                src="/logo.png"
                alt="RegisterKaro"
                className="relative h-16 w-[16rem]"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.sublinks ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center text-gray-700 hover:text-primary font-medium"
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {item.sublinks.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                              role="menuitem"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#talk-expert"
              className="bg-[rgba(255,162,41,1)] text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Talk An Expert
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.sublinks ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4">
                          {item.sublinks.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <a
                  href="#talk-expert"
                  className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors block text-center"
                >
                  Talk An Expert
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
