import React from "react";
import PracticeArea from "./PracticeArea";
import SectionHeading from "./SectionHeading";
import { practiceAreas } from "../lib/practiceAreas";

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="bg-paper-100 py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Practice Areas"
          subtitle="A focused practice across the matters most often faced by individuals, families, and businesses in Kerala."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200 max-w-6xl mx-auto border border-ink-200">
          {practiceAreas.map((area, idx) => (
            <PracticeArea
              key={area.slug}
              index={idx}
              slug={area.slug}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
