import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { practiceAreas, getPracticeArea } from "../../../lib/practiceAreas";

type Params = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Not Found | A R Legal Associates" };
  return {
    title: `${area.title} | A R Legal Associates`,
    description: area.description,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const otherAreas = practiceAreas.filter((a) => a.slug !== area.slug);
  const idx = practiceAreas.findIndex((a) => a.slug === area.slug);

  return (
    <div className="bg-paper-100 min-h-screen font-serif">
      <Navbar />

      <section className="bg-paper-100 border-b border-ink-200">
        <div className="container mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#practice-areas"
              className="inline-flex items-center text-ink-500 hover:text-ink-900 transition-colors duration-200 mb-12 font-serif"
            >
              <span className="material-symbols-outlined text-base mr-1">
                arrow_back
              </span>
              All Practice Areas
            </Link>
            <div className="flex items-baseline justify-between mb-6">
              <p className="font-eyebrow text-gold-400">Practice Area</p>
              <span className="font-eyebrow text-ink-400">
                {String(idx + 1).padStart(2, "0")} /{" "}
                {String(practiceAreas.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-start gap-6 mb-8">
              <span className="material-symbols-outlined text-5xl text-gold-400 mt-2">
                {area.icon}
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-ink-900 tracking-tight leading-[1.05]">
                {area.title}
              </h1>
            </div>
            <div className="h-px w-12 bg-gold-400 mb-8"></div>
            <p className="text-xl text-ink-600 leading-relaxed font-serif italic max-w-2xl">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-prose mx-auto">
            <div className="prose-justify space-y-6 text-ink-700 leading-relaxed text-lg font-serif">
              {area.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-ink-200">
              <p className="font-eyebrow text-gold-400 mb-4">Scope</p>
              <h2 className="text-3xl font-serif font-medium mb-6 text-ink-900 tracking-tight">
                What we handle.
              </h2>
              <div className="h-px w-12 bg-gold-400 mb-8"></div>
              <ul className="divide-y divide-ink-200">
                {area.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start py-4 text-ink-800 font-serif text-lg"
                  >
                    <span className="font-eyebrow text-gold-400 mr-6 mt-1.5 min-w-[2rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 pt-12 border-t border-ink-200">
              <Link
                href="/#contact"
                className="group inline-flex items-center bg-ink-900 text-paper-100 px-8 py-4 font-serif text-[15px] tracking-wide border border-ink-900 hover:bg-ink-800 transition-colors duration-300"
              >
                Get in touch about this matter
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-100 py-20 border-t border-ink-200">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <p className="font-eyebrow text-gold-400 mb-4">Continue Reading</p>
            <h2 className="text-3xl font-serif font-medium mb-8 text-ink-900 tracking-tight">
              Other Practice Areas
            </h2>
            <div className="h-px w-12 bg-gold-400 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-200 border border-ink-200">
              {otherAreas.slice(0, 3).map((other) => (
                <Link
                  key={other.slug}
                  href={`/practice-areas/${other.slug}`}
                  className="block bg-paper-50 hover:bg-paper-200 transition-colors duration-300 p-8 group"
                >
                  <span className="material-symbols-outlined text-3xl text-ink-900 group-hover:text-gold-400 mb-5 block transition-colors duration-300">
                    {other.icon}
                  </span>
                  <h3 className="font-serif font-medium text-xl text-ink-900 mb-3 tracking-tight">
                    {other.title}
                  </h3>
                  <div className="h-px w-8 bg-gold-400 mb-4"></div>
                  <p className="text-ink-600 text-sm leading-relaxed font-serif">
                    {other.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
