import React from "react";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="flex items-start">
      <span className="material-symbols-outlined text-primary-700 mr-3">
        {icon}
      </span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        {children}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Schedule a consultation with our experienced attorneys to discuss
              your legal needs.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  >
                    <option value="">Select a Service</option>
                    <option value="property">Property Law</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="employment">Employment Law</option>
                    <option value="civil">Civil Litigation</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-700 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-800 transition-colors duration-300 transform hover:-translate-y-1 w-full md:w-auto"
              >
                Schedule Consultation
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Our Office</h3>
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden h-64 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31421.975568509367!2d76.25945394999999!3d9.9312329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c1aaaaf10d3%3A0x6e2ea01cf06d1c8e!2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1623825891578!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
              <div className="space-y-4">
                <ContactInfoItem icon="location_on" title="Address">
                  <p className="text-gray-600">
                    123 Legal Avenue, Kochi, Kerala 682001, India
                  </p>
                </ContactInfoItem>
                <ContactInfoItem icon="call" title="Phone">
                  <p className="text-gray-600">+91 98765 43210</p>
                </ContactInfoItem>
                <ContactInfoItem icon="email" title="Email">
                  <p className="text-gray-600">info@justicelaw.com</p>
                </ContactInfoItem>
                <ContactInfoItem icon="schedule" title="Office Hours">
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </ContactInfoItem>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
