import React from "react";
import MainSlider from "./pages/home/components/carousel.jsx";
import AboutSection from "./pages/home/components/aboutSection.jsx";

import ServiceSection from "./pages/home/services.jsx";

import MarketSection from "./pages/home/components/marketSection.js";
import ProjectSection from "./pages/home/components/projectsSection.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import ContactSection from "./pages/home/contactSection.jsx";
import Footer from "./components/Footer/Footer.js";

function Home() {
  return (
    <>
      <NavBar />
      <MainSlider />
      <AboutSection />

      <ServiceSection />

      <MarketSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;