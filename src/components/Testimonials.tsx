import React from "react";
import SectionHeading from "./SectionHeading";

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  testimonial,
  avatar,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <div className="text-gray-700">
        <span className="text-primary-700 text-4xl leading-none">&quot;</span>
        <p className="italic mt-2">{testimonial}</p>
      </div>
      <div className="mt-4 flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined">
            star
          </span>
        ))}
      </div>
    </div>
  );
};

const testimonialData = [
  {
    name: "Arjun Menon",
    role: "Business Owner",
    testimonial:
      "JusticeLaw provided exceptional guidance during our company acquisition. Their attention to detail and strategic advice made the process smooth and successful.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Real Estate Developer",
    testimonial:
      "I've worked with JusticeLaw for over 5 years on numerous property transactions. Their expertise in local regulations has been invaluable to my business.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Thomas Joseph",
    role: "Family Client",
    testimonial:
      "During a difficult divorce, the compassionate team at JusticeLaw helped me navigate the process while ensuring my children's interests were protected.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from those who have trusted us with their legal matters."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors duration-300"
          >
            View More Success Stories
            <span className="material-symbols-outlined ml-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
