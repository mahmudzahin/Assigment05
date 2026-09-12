import React from 'react';
import logo from '../../assets/logo-text.png';

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-auto w-auto rounded-xl object-contain"
              />

            </div>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#github"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#twitter"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <FaXTwitter size={17} />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-900">
              PRODUCT
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-900">
              COMPANY
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-900">
              LEGAL
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#privacy"
              className="flex items-center gap-1 text-sm text-slate-500 transition hover:text-slate-900"
            >
              Privacy
              <ArrowUpRight size={13} />
            </a>

            <a
              href="#terms"
              className="flex items-center gap-1 text-sm text-slate-500 transition hover:text-slate-900"
            >
              Terms
              <ArrowUpRight size={13} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;