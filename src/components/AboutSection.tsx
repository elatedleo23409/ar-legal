import React from "react";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="py-28 bg-paper-50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="font-eyebrow text-gold-400 mb-5">About the Firm</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-ink-900 tracking-tight leading-[1.1]">
              A practice grounded in
              <br />
              precision and discretion.
            </h2>
            <div className="h-px w-12 bg-gold-400 mb-8"></div>
            <div className="prose-justify space-y-5 text-ink-700 leading-relaxed text-lg font-serif">
              <p>
              A R Legal Associates is a full-service litigation and advisory firm which has been in continuous legal practice for over two decades. With an active presence before the High Court of Kerala, the High Court of Karnataka, and courts and tribunals across Kerala, A R Legal Associates represents a diverse clientele, ranging from individuals and closely-held businesses to corporate entities, media houses, technology companies, and public institutions. 
              </p>
              <p>
              Our approach is deeply rooted in a litigation-first mindset, anticipating disputes, mitigating risk, and crafting solutions that are not merely reactive, but legally sustainable over the long term.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 my-12 pt-8 border-t border-ink-200">
              <div>
                <p className="font-serif text-3xl font-medium text-ink-900">
                  Since 2000
                </p>
                <p className="font-eyebrow text-ink-500 mt-2">
                  Established in Kochi
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-ink-900">
                  1000<span className="text-gold-400">+</span>
                </p>
                <p className="font-eyebrow text-ink-500 mt-2">
                  Clients Represented
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center text-ink-900 font-serif text-[15px] tracking-wide border-b border-gold-400 pb-1 hover:border-ink-900 transition-colors duration-300"
            >
              Read More About Us
              <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 relative">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-ink-200 relative">
                <img
                  src="/assets/home_page.jpg"
                  alt="The Village Lawyer — Carl Bernhard Schlösser"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-ink-900/60 backdrop-blur-sm">
                  <p className="text-paper-200 text-xs font-serif italic text-right">
                    <em>The Village Lawyer</em> &mdash; Carl Bernhard Schlösser
                  </p>
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -top-4 -left-4 w-full h-full border border-gold-400 -z-10"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
