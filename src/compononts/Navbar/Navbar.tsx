
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
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md sm:px-6">

      <div className="mx-auto max-w-7xl">

     
        <div className="relative flex h-12 items-center md:hidden">

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-slate-700 transition hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          <a
            href="#home"
            onClick={() => handleLinkClick('Home')}
            className="absolute left-1/2 flex -translate-x-1/2 items-center"
          >
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-9 w-auto object-contain"
            />
          </a>

          <div className="ml-auto flex items-center gap-2">

            <a
              href="#signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-medium text-slate-700 transition hover:text-[#D91B7E] sm:text-sm"
            >
              Sign In
            </a>

            <a
              href="#signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-full bg-[#D91B7E] px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90 sm:px-4 sm:text-sm"
            >
              Sign Up
            </a>

          </div>
        </div>

        {/* =========================================
            DESKTOP HEADER
        ========================================= */}
        <div className="hidden h-12 grid-cols-3 items-center md:grid">

          <div className="flex justify-start">
            <a
              href="#home"
              onClick={() => handleLinkClick('Home')}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          <ul className="flex items-center justify-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.name
                      ? 'text-[#D91B7E]'
                      : 'text-slate-700 hover:text-[#D91B7E]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

      
          <div className="flex items-center justify-end gap-3">

            <a
              href="#signin"
              className="px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-[#D91B7E]"
            >
              Sign In
            </a>

            <a
              href="#signup"
              className="rounded-full bg-[#D91B7E] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Sign Up
            </a>

          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block py-1 text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.name
                      ? 'text-[#D91B7E]'
                      : 'text-slate-600 hover:text-[#D91B7E]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

