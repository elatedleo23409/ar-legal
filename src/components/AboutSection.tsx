import React from "react";

interface StatItemProps {
  icon: string;
  title: string;
  subtitle: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, title, subtitle }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
      <span className="material-symbols-outlined text-primary-700">{icon}</span>
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About JusticeLaw
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, JusticeLaw has grown to become one of the most
              respected law firms in Kochi, with a reputation for excellence and
              client satisfaction.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced attorneys is dedicated to providing
              personalized legal solutions that address your specific needs and
              concerns.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <StatItem
                icon="verified"
                title="25+ Years"
                subtitle="Of Experience"
              />
              <StatItem icon="groups" title="1000+" subtitle="Clients Served" />
              <StatItem
                icon="military_tech"
                title="98%"
                subtitle="Success Rate"
              />
            </div>

            <a
              href="#"
              className="inline-flex items-center bg-primary-700 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-800 transition-colors duration-300 transform hover:-translate-y-1"
            >
              Meet Our Team
              <span className="material-symbols-outlined ml-2">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl h-[400px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-700/20"></div>
              <img
                src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt="JusticeLaw Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-primary-700 text-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="italic">
                &quot;Our mission is to provide exceptional legal services with
                integrity and dedication to our clients&#x27; success.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
