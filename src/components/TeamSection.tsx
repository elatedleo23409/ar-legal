import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { team } from "../lib/team";

interface TeamMemberProps {
  slug: string;
  name: string;
  role: string;
  specialty?: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  slug,
  name,
  role,
  specialty,
  image,
}) => {
  return (
    <Link href={`/team/${slug}`} className="group block">
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-paper-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
      <div className="pt-6">
        <p className="font-eyebrow text-gold-400 mb-2">{role}</p>
        <h3 className="text-xl font-serif font-medium text-ink-900 mb-2 tracking-tight">
          {name}
        </h3>
        {specialty && <p className="text-ink-600 font-serif italic mb-5">{specialty}</p>}
        <span className="inline-flex items-center text-ink-900 font-serif text-sm tracking-wide border-b border-ink-300 group-hover:border-gold-400 pb-1 transition-colors duration-300">
          View Profile
          <span className="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-paper-50 py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="The People"
          title="Meet Our Team"
          subtitle="The advocates who carry the firm's standards forward, every day, on every matter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member) => (
            <TeamMember
              key={member.slug}
              slug={member.slug}
              name={member.name}
              role={member.role}
              specialty={member.specialty}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
