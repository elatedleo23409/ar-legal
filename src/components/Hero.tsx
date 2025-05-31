import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="md:w-2/3 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experienced Legal Advocates In Kochi
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Dedicated to protecting your rights and securing your future with
            personalized legal solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              Schedule Consultation
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
