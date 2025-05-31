import React from "react";
import SectionHeading from "./SectionHeading";

interface TeamMemberProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  specialty,
  image,
}) => {
  return (
    <div className="group">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-500 text-sm mb-2">{role}</p>
          <p className="text-primary-700 font-medium mb-4">{specialty}</p>
          <a
            href="#"
            className="inline-flex items-center text-primary-700 font-medium group-hover:text-primary-800 transition-colors duration-300"
          >
            View Profile
            <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const teamData = [
  {
    name: "Rahul Nair",
    role: "Senior Partner",
    specialty: "Corporate Law",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Meera Krishnan",
    role: "Senior Partner",
    specialty: "Family Law",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Thomas",
    role: "Associate",
    specialty: "Property Law",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Menon",
    role: "Associate",
    specialty: "Criminal Law",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Legal Team"
          subtitle="Our experienced attorneys are dedicated to providing the highest quality legal representation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              specialty={member.specialty}
              image={member.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-primary-700 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-800 transition-colors duration-300 inline-block"
          >
            View All Attorneys
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
