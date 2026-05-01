import React from "react";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About Us | A R Legal Associates",
  description:
    "A R Legal Associates is a Kochi-based law firm with over two decades of experience advising individuals, families, and businesses across Kerala.",
};

const principles = [
  {
    title: "Precision",
    body: "Every document, every pleading, every contract is reviewed with the assumption that small details matter. They almost always do.",
  },
  {
    title: "Discretion",
    body: "Our clients trust us with sensitive matters. That trust shapes how we communicate, how we negotiate, and how we litigate.",
  },
  {
    title: "Clarity",
    body: "Legal advice is only useful if you understand it. We explain the situation, the options, and the trade-offs in plain terms.",
  },
  {
    title: "Persistence",
    body: "Cases are won by the side that stays prepared and shows up on time, every time. That is the standard we hold ourselves to.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper-100 min-h-screen font-serif">
      <Navbar />

      <section className="bg-paper-100 border-b border-ink-200">
        <div className="container mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-eyebrow text-gold-400 mb-6">About Us</p>
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 text-ink-900 tracking-tight leading-[1.05]">
              A practice grounded in precision and discretion.
            </h1>
            <div className="h-px w-12 bg-gold-400 mx-auto mb-8"></div>
            <p className="text-xl text-ink-600 leading-relaxed font-serif italic">
              Your firewall against all legal impasses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-50">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-prose mx-auto">
            <p className="font-eyebrow text-gold-400 mb-5">The Firm</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-ink-900 tracking-tight leading-[1.1]">
              Counsel, with the weight of two decades behind it.
            </h2>
            <div className="h-px w-12 bg-gold-400 mb-8"></div>
            <div className="prose-justify space-y-6 text-ink-700 leading-relaxed text-lg">
              <p>
              A R Legal Associates is a litigation and advisory firm founded by 
              Advocate Rajeswary Kappachery, with over two decades of continuous legal practice. 
              The firm appears before the High Court of Kerala, the High Court of Karnataka, 
              and courts and tribunals across Kerala, representing individuals, businesses, 
              corporate entities, media houses, and public institutions.
              </p>
              <p>
              The firm has developed a clear niche in three areas: 
              Intellectual Property Rights and Entertainment Law, where it advises production houses, 
              broadcasting channels, and creative professionals; Economic Offences, 
              where it handles complex financial and enforcement matters; and Technology and Startup Law, 
              where it works with new-age companies navigating an evolving legal landscape. 
              Beyond these areas of specialisation, the firm maintains a broad practice across civil, 
              commercial, and constitutional matters, and takes on constitutional work where the 
              cause of justice calls for it.
              </p>
              <p>
              At its core, A R Legal Associates is a litigation-first firm, 
              one that believes in anticipating problems before they arise 
              and giving clients counsel they can rely on for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-eyebrow text-gold-400 mb-5">Principles</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-ink-900 tracking-tight leading-[1.1]">
                Our approach.
              </h2>
              <div className="mt-6 h-px w-12 bg-gold-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-200 border border-ink-200">
              {principles.map((p, i) => (
                <div key={p.title} className="bg-paper-50 p-10">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-serif font-medium text-2xl text-ink-900 tracking-tight">
                      {p.title}
                    </h3>
                    <span className="font-eyebrow text-ink-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-px w-8 bg-gold-400 mb-5"></div>
                  <p className="prose-justify text-ink-700 leading-relaxed font-serif">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-900 text-paper-100 relative">
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        ></div>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <p className="font-eyebrow text-gold-400 mb-5">At a Glance</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-paper-100 tracking-tight leading-[1.1]">
              The firm in numbers.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-ink-700">
              <div>
                <p className="font-serif text-5xl font-medium text-paper-100">
                  Since <span className="text-gold-400">2000</span>
                </p>
                <p className="font-eyebrow text-paper-300 mt-3">
                  Established in Kochi
                </p>
              </div>
              <div>
                <p className="font-serif text-5xl font-medium text-paper-100">
                  1000<span className="text-gold-400">+</span>
                </p>
                <p className="font-eyebrow text-paper-300 mt-3">
                  Clients Represented
                </p>
              </div>
              <div>
                <p className="font-serif text-5xl font-medium text-paper-100">
                  8
                </p>
                <p className="font-eyebrow text-paper-300 mt-3">
                  Practice Areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
