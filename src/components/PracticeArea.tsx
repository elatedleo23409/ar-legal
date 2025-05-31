import React from "react";

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="p-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
          <span className="material-symbols-outlined text-3xl text-primary-700">
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-primary-700 font-medium group-hover:text-primary-800 transition-colors duration-300"
        >
          Learn More
          <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
};

export default PracticeArea;
