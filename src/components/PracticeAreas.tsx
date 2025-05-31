import React from "react";
import PracticeArea from "./PracticeArea";
import SectionHeading from "./SectionHeading";

const practiceAreasData = [
  {
    title: "Property Law",
    description:
      "Expert guidance on property transactions, disputes, and regulations in Kochi.",
    icon: "real_estate_agent",
  },
  {
    title: "Family Law",
    description:
      "Compassionate legal support for divorce, child custody, and domestic matters.",
    icon: "diversity_3",
  },
  {
    title: "Corporate Law",
    description:
      "Strategic legal counsel for businesses of all sizes on compliance and growth.",
    icon: "account_balance",
  },
  {
    title: "Criminal Law",
    description:
      "Strong defense strategies and representation in criminal proceedings.",
    icon: "gavel",
  },
  {
    title: "Employment Law",
    description:
      "Protecting rights and resolving disputes between employers and employees.",
    icon: "work",
  },
  {
    title: "Civil Litigation",
    description:
      "Effective representation in civil disputes and litigation proceedings.",
    icon: "health_and_safety",
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Practice Areas"
          subtitle="We offer comprehensive legal services across a wide range of practice areas to meet your personal and business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreasData.map((area, index) => (
            <PracticeArea
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
