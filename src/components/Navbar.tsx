import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { practiceAreas } from "../lib/practiceAreas";
import { featureFlags } from "../lib/featureFlags";

const navLinkClass =
  "relative font-serif text-[15px] text-ink-700 hover:text-ink-900 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full";

const Navbar: React.FC = () => {
  return (
    <header className="bg-paper-100/95 backdrop-blur-sm border-b border-ink-200 sticky top-0 z-40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-5">
          <Logo size="md" />

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <details className="relative group">
              <summary className="list-none cursor-pointer flex items-center font-serif text-[15px] text-ink-700 hover:text-ink-900 transition-colors duration-200">
                Practice Areas
                <span className="material-symbols-outlined text-base ml-1 group-open:rotate-180 transition-transform duration-300">
                  expand_more
                </span>
              </summary>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-paper-50 border border-ink-200 shadow-xl py-3 w-64 z-50">
                <div className="px-5 pb-2 mb-2 border-b border-ink-200">
                  <p className="font-eyebrow text-gold-400">Our Practice</p>
                </div>
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    className="block px-5 py-2 font-serif text-ink-700 hover:text-ink-900 hover:bg-paper-200 transition-colors duration-200"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </details>
            {featureFlags.showTeam && (
              <Link href="/#team" className={navLinkClass}>
                People
              </Link>
            )}
            <Link href="/#contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>

          <details className="md:hidden relative">
            <summary className="list-none">
              <span className="material-symbols-outlined text-3xl cursor-pointer text-ink-900">
                menu
              </span>
            </summary>
            <div className="absolute right-0 mt-4 bg-paper-50 border border-ink-200 shadow-xl p-5 w-64 z-50">
              <div className="flex flex-col space-y-3 font-serif">
                <Link href="/" className="text-ink-700 hover:text-ink-900">
                  Home
                </Link>
                <Link href="/about" className="text-ink-700 hover:text-ink-900">
                  About
                </Link>
                <div className="border-t border-ink-200 pt-3">
                  <p className="font-eyebrow text-gold-400 mb-2">
                    Practice Areas
                  </p>
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="block py-1 text-ink-700 hover:text-ink-900"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
                {featureFlags.showTeam && (
                  <Link
                    href="/#team"
                    className="text-ink-700 hover:text-ink-900 border-t border-ink-200 pt-3"
                  >
                    People
                  </Link>
                )}
                <Link
                  href="/#contact"
                  className="text-ink-700 hover:text-ink-900"
                >
                  Contact
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
