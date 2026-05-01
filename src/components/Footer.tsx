import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { practiceAreas } from "../lib/practiceAreas";
import { featureFlags } from "../lib/featureFlags";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-900 text-paper-200 pt-20 pb-10 relative">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
      ></div>

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-ink-700">
          <div className="md:col-span-4">
            <Logo variant="light" size="md" />
            <p className="mt-8 text-paper-300 font-serif italic text-lg leading-relaxed max-w-xs">
              Your firewall against all legal impasses.
            </p>
            <div className="flex mt-8 space-x-3">
              {[
                { icon: "linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/company/a-r-legal-associates/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-ink-700 text-paper-300 flex items-center justify-center hover:border-gold-400 hover:text-gold-300 transition-colors duration-300"
                >
                  <i className={`fa-brands fa-${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-eyebrow text-gold-400 mb-6">Practice Areas</p>
            <ul className="space-y-3 font-serif">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-paper-300 hover:text-paper-100 transition-colors duration-200"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-eyebrow text-gold-400 mb-6">The Firm</p>
            <ul className="space-y-3 font-serif">
              <li>
                <Link
                  href="/about"
                  className="text-paper-300 hover:text-paper-100 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              {featureFlags.showTeam && (
                <li>
                  <Link
                    href="/#team"
                    className="text-paper-300 hover:text-paper-100 transition-colors duration-200"
                  >
                    People
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/#contact"
                  className="text-paper-300 hover:text-paper-100 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-eyebrow text-gold-400 mb-6">Office</p>
            <ul className="space-y-4 font-serif text-paper-300">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-gold-400 mr-3 text-base">
                  location_on
                </span>
                <span>
                  Nurul Huda Masjid Building, 
                  <br />
                  opposite Specialist Hospital, 
                  <br />
                  Near North Railway Station,
                  <br />
                  Ernakulam North, Kochi, Kerala 682018
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-gold-400 mr-3 text-base">
                  call
                </span>
                <span>
                  +91 9495701999
                  <br />
                  +91 9895701999
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-gold-400 mr-3 text-base">
                  email
                </span>
                <span>office.cochin@arlegal.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-400 text-sm font-serif">
            &copy; {new Date().getFullYear()} A R Legal Associates. All rights
            reserved.
          </p>
          <p className="text-ink-400 text-sm font-serif italic">
            Advocates &middot; Counsellors &middot; Kochi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
