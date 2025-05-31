"use client";

import React from "react";

export default function Home() {
  return (
    <div id="webcrumbs">
      <div className="bg-white min-h-screen font-sans">
        {/* Navbar, Hero Section, About, etc. will go here */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="text-primary-700 h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-primary-800">
                  AR Legal Associates
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-8 text-gray-700">
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  About
                </a>
                <details className="relative group">
                  <summary className="list-none cursor-pointer font-medium hover:text-primary-700 transition-colors duration-300 flex items-center">
                    Practice Areas
                    <span className="material-symbols-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 w-48 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                    >
                      Property Law
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                    >
                      Family Law
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                    >
                      Corporate Law
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-primary-50 rounded-md transition-colors duration-200"
                    >
                      Criminal Law
                    </a>
                  </div>
                </details>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  Attorneys
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="#"
                  className="bg-primary-700 text-white px-5 py-2 rounded-md hover:bg-primary-800 transition-colors duration-300"
                >
                  Free Consultation
                </a>
              </div>
              <details className="md:hidden relative">
                <summary className="list-none">
                  <span className="material-symbols-outlined text-3xl cursor-pointer">
                    menu
                  </span>
                </summary>
                <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-md p-4 w-48 z-50">
                  <div className="flex flex-col space-y-3">
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      Practice Areas
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      Attorneys
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="bg-primary-700 text-white px-4 py-2 rounded-md text-center hover:bg-primary-800 transition-colors duration-300"
                    >
                      Free Consultation
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </nav>
        <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="md:w-2/3 mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Experienced Legal Advocates In Kochi
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Dedicated to protecting your rights and securing your future
                with personalized legal solutions.
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
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Practice Areas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive legal services across a wide range of
                practice areas to meet your personal and business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      real_estate_agent
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Property Law</h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance on property transactions, disputes, and
                    regulations in Kochi.
                  </p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      diversity_3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Family Law</h3>
                  <p className="text-gray-600 mb-4">
                    Compassionate legal support for divorce, child custody, and
                    domestic matters.
                  </p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      account_balance
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Corporate Law</h3>
                  <p className="text-gray-600 mb-4">
                    Strategic legal counsel for businesses of all sizes on
                    compliance and growth.
                  </p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      gavel
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Criminal Law</h3>
                  <p className="text-gray-600 mb-4">
                    Strong defense strategies and representation in criminal
                    proceedings.
                  </p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      work
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Employment Law</h3>
                  <p className="text-gray-600 mb-4">
                    Protecting rights and resolving disputes between employers
                    and employees.
                  </p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary-700">
                      health_and_safety
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Civil Litigation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Effective representation in civil disputes and litigation
                    proceedings.
                  </p>
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
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About JusticeLaw
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1995, JusticeLaw has grown to become one of the
                  most respected law firms in Kochi, with a reputation for
                  excellence and client satisfaction.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experienced attorneys is dedicated to providing
                  personalized legal solutions that address your specific needs
                  and concerns.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-primary-700">
                        verified
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">25+ Years</h4>
                      <p className="text-gray-500 text-sm">Of Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-primary-700">
                        groups
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">1000+</h4>
                      <p className="text-gray-500 text-sm">Clients Served</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-primary-700">
                        military_tech
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">98%</h4>
                      <p className="text-gray-500 text-sm">Success Rate</p>
                    </div>
                  </div>
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
                    &quot;Our mission is to provide exceptional legal services
                    with integrity and dedication to our clients&#x27;
                    success.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from those who have trusted us with their legal matters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Arjun Menon"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Arjun Menon</h4>
                    <p className="text-gray-500 text-sm">Business Owner</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <span className="text-primary-700 text-4xl leading-none">
                    &quot;
                  </span>
                  <p className="italic mt-2">
                    JusticeLaw provided exceptional guidance during our company
                    acquisition. Their attention to detail and strategic advice
                    made the process smooth and successful.
                  </p>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Priya Sharma"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-gray-500 text-sm">
                      Real Estate Developer
                    </p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <span className="text-primary-700 text-4xl leading-none">
                    &quot;
                  </span>
                  <p className="italic mt-2">
                    I&#x27;ve worked with JusticeLaw for over 5 years on
                    numerous property transactions. Their expertise in local
                    regulations has been invaluable to my business.
                  </p>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Thomas Joseph"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Thomas Joseph</h4>
                    <p className="text-gray-500 text-sm">Family Client</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <span className="text-primary-700 text-4xl leading-none">
                    &quot;
                  </span>
                  <p className="italic mt-2">
                    During a difficult divorce, the compassionate team at
                    JusticeLaw helped me navigate the process while ensuring my
                    children&#x27;s interests were protected.
                  </p>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
              </div>
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
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Legal Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our experienced attorneys are dedicated to providing the highest
                quality legal representation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/42.jpg"
                      alt="Rahul Nair"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Rahul Nair</h3>
                    <p className="text-gray-500 text-sm mb-2">Senior Partner</p>
                    <p className="text-primary-700 font-medium mb-4">
                      Corporate Law
                    </p>
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
              <div className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Meera Krishnan"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      Meera Krishnan
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">Senior Partner</p>
                    <p className="text-primary-700 font-medium mb-4">
                      Family Law
                    </p>
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
              <div className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="David Thomas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">David Thomas</h3>
                    <p className="text-gray-500 text-sm mb-2">Associate</p>
                    <p className="text-primary-700 font-medium mb-4">
                      Property Law
                    </p>
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
              <div className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/31.jpg"
                      alt="Anita Menon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Anita Menon</h3>
                    <p className="text-gray-500 text-sm mb-2">Associate</p>
                    <p className="text-primary-700 font-medium mb-4">
                      Criminal Law
                    </p>
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
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Legal Insights &amp; Resources
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest articles on legal matters relevant
                to Kochi residents and businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="Understanding Kerala&#x27;s Property Registration Process"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">June 15, 2023</span>
                    <span className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
                      Property Law
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Understanding Kerala&#x27;s Property Registration Process
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to navigating property registration in
                    Kerala, including required documents and potential
                    challenges.
                  </p>
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="Recent Changes to Family Court Procedures in Kochi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">May 28, 2023</span>
                    <span className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
                      Family Law
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Recent Changes to Family Court Procedures in Kochi
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about the latest updates to family court procedures
                    and how they might affect your case.
                  </p>
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="Small Business Compliance Guide for Kerala Entrepreneurs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">
                      April 10, 2023
                    </span>
                    <span className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
                      Corporate Law
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Small Business Compliance Guide for Kerala Entrepreneurs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential legal compliance requirements for starting and
                    operating a small business in Kerala.
                  </p>
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
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Schedule a consultation with our experienced attorneys to
                  discuss your legal needs.
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
                    <div className="flex items-start">
                      <span className="material-symbols-outlined text-primary-700 mr-3">
                        location_on
                      </span>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">
                          123 Legal Avenue, Kochi, Kerala 682001, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="material-symbols-outlined text-primary-700 mr-3">
                        call
                      </span>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="material-symbols-outlined text-primary-700 mr-3">
                        email
                      </span>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">info@justicelaw.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="material-symbols-outlined text-primary-700 mr-3">
                        schedule
                      </span>
                      <div>
                        <h4 className="font-semibold">Office Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
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
        <footer className="bg-gray-900 text-white"></footer>
      </div>
    </div>
  );
}
