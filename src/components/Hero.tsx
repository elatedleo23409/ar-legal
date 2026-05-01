import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-paper-100 border-b border-ink-200 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #0D0B08 1px, transparent 1px), radial-gradient(circle at 80% 80%, #0D0B08 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container mx-auto px-6 lg:px-10 py-28 md:py-40 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="font-eyebrow text-gold-400 mb-8 text-center">
              Established in Kochi &middot; Estd. 2000
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-serif font-medium text-ink-900 tracking-tight leading-[1.05] mb-10">
              Your firewall against
              <br />
              <em className="not-italic text-ink-900 relative inline-block">
                all legal impasses
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold-400"></span>
              </em>
            </h1>
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-12 font-serif italic">
              Representing individuals, families, and enterprises across Kerala
              for more than two decades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center bg-ink-900 text-paper-100 px-8 py-4 font-serif text-[15px] tracking-wide border border-ink-900 hover:bg-ink-800 transition-colors duration-300"
              >
                About the Firm
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/#practice-areas"
                className="group inline-flex items-center bg-transparent text-ink-900 px-8 py-4 font-serif text-[15px] tracking-wide border border-ink-900 hover:bg-ink-900 hover:text-paper-100 transition-colors duration-300"
              >
                Practice Areas
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-ink-200">
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-medium text-ink-900">
                25<span className="text-gold-400">+</span>
              </p>
              <p className="font-eyebrow text-ink-500 mt-2">Years</p>
            </div>
            <div className="text-center border-x border-ink-200">
              <p className="font-serif text-3xl md:text-4xl font-medium text-ink-900">
                1000<span className="text-gold-400">+</span>
              </p>
              <p className="font-eyebrow text-ink-500 mt-2">Clients</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-medium text-ink-900">
                8
              </p>
              <p className="font-eyebrow text-ink-500 mt-2">Practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
