import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { featureFlags } from "../lib/featureFlags";

export default function Home(): React.ReactNode {
  return (
    <div className="bg-white min-h-screen font-serif">
      <Navbar />
      <Hero />
      <AboutSection />
      <PracticeAreas />
      {featureFlags.showTeam && <TeamSection />}
      <ContactSection />
      <Footer />
    </div>
  );
}
