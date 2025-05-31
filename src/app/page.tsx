"use client";

import React from "react";

// Import components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

/**
 * Home page component
 * @returns The rendered Home page
 */
export default function Home(): React.ReactNode {
  return (
    <div id="webcrumbs">
      <div className="bg-white min-h-screen font-sans">
        <Navbar />
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <Testimonials />
        <TeamSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
