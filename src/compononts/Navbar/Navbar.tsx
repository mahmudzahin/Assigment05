
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo-text.png';

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active navigation link
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveLink('Home')}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="DevStack Logo"
            className="w-auto h-10 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`transition-colors duration-200 ${
                  activeLink === link.name
                    ? 'text-red-500'
                    : 'text-black hover:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          {/* Sign In */}
          <a
            href="#signin"
            className="px-4 py-2 text-black "
          >
            Sign In
          </a>

          {/* Sign Up */}
          <a
            href="#signup"
            className="px-5 py-2 bg-[#D91B7E] rounded-full font-medium transition-colors"
          >
            Sign Up
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-5 border-t border-gray-800 pt-5">

          {/* Mobile Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-colors duration-200 ${
                  activeLink === link.name
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-6">

            {/* Sign In */}
            <a
              href="#signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition"
            >
              Sign In
            </a>

            {/* Sign Up */}
            <a
              href="#signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
            >
              Sign Up
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

