import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { team, getTeamMember } from "../../../lib/team";
import { featureFlags } from "../../../lib/featureFlags";

type Params = { slug: string };

export function generateStaticParams() {
  if (!featureFlags.showTeam) return [];
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Not Found | A R Legal Associates" };
  return {
    title: `${member.name} | A R Legal Associates`,
    description: `${member.role} at A R Legal Associates.`,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<Params>;
}) {
  if (!featureFlags.showTeam) notFound();

  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const hasBio = member.bio && member.bio.some((p) => p.trim() !== "");
  const hasSpecialty = member.specialty && member.specialty.trim() !== "";
  const singleEducation = member.education.length === 1;

  return (
    <div className="bg-paper-100 min-h-screen font-serif">
      <Navbar />

      <section className="bg-paper-100 border-b border-ink-200">
        <div className="container mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/#team"
              className="inline-flex items-center text-ink-500 hover:text-ink-900 transition-colors duration-200 mb-12 font-serif"
            >
              <span className="material-symbols-outlined text-base mr-1">
                arrow_back
              </span>
              All People
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="aspect-square overflow-hidden border border-ink-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="absolute -top-4 -left-4 w-full h-full border border-gold-400 -z-10"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-7 md:pt-4">
                <p className="font-eyebrow text-gold-400 mb-5">{member.role}</p>
                <h1 className="text-5xl md:text-6xl font-serif font-medium text-ink-900 tracking-tight leading-[1.05] mb-6">
                  {member.name}
                </h1>
                <div className="h-px w-12 bg-gold-400 mb-6"></div>
                {hasSpecialty && (
                  <p className="text-xl text-ink-600 mb-8 font-serif italic">
                    {member.specialty}
                  </p>
                )}
                {hasBio && (
                  <div className="prose-justify space-y-5 text-ink-700 leading-relaxed text-lg font-serif">
                    {member.bio!.filter((p) => p.trim() !== "").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-eyebrow text-gold-400 mb-4">Education</p>
                <h2 className="text-2xl font-serif font-medium mb-4 text-ink-900 tracking-tight">
                  Academic background
                </h2>
                <div className="h-px w-10 bg-gold-400 mb-6"></div>
                {singleEducation ? (
                  <p className="text-ink-700 font-serif text-lg leading-relaxed">
                    {member.education[0]}
                  </p>
                ) : (
                  <ul className="space-y-3 text-ink-700 font-serif text-lg">
                    {member.education.map((edu, i) => (
                      <li key={i} className="leading-relaxed">
                        &mdash; {edu}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <p className="font-eyebrow text-gold-400 mb-4">Bar Admission</p>
                <h2 className="text-2xl font-serif font-medium mb-4 text-ink-900 tracking-tight">
                  Practice authority
                </h2>
                <div className="h-px w-10 bg-gold-400 mb-6"></div>
                <p className="text-ink-700 leading-relaxed font-serif text-lg">
                  {member.bar}
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-ink-200">
              <Link
                href="/#contact"
                className="group inline-flex items-center bg-ink-900 text-paper-100 px-8 py-4 font-serif text-[15px] tracking-wide border border-ink-900 hover:bg-ink-800 transition-colors duration-300"
              >
                Get in touch
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
