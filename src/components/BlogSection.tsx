import React from "react";
import SectionHeading from "./SectionHeading";

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  category,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500">{date}</span>
          <span className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-primary-700 font-medium group-hover:text-primary-800 transition-colors duration-300"
        >
          Read More
          <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
};

const blogData = [
  {
    title: "Understanding Kerala's Property Registration Process",
    description:
      "A comprehensive guide to navigating property registration in Kerala, including required documents and potential challenges.",
    date: "June 15, 2023",
    category: "Property Law",
    image:
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recent Changes to Family Court Procedures in Kochi",
    description:
      "Learn about the latest updates to family court procedures and how they might affect your case.",
    date: "May 28, 2023",
    category: "Family Law",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Small Business Compliance Guide for Kerala Entrepreneurs",
    description:
      "Essential legal compliance requirements for starting and operating a small business in Kerala.",
    date: "April 10, 2023",
    category: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Legal Insights & Resources"
          subtitle="Stay informed with our latest articles on legal matters relevant to Kochi residents and businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-white border border-primary-700 text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-300 inline-block"
          >
            Browse All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
