import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Crads";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home" style={{ maxWidth: "100vw" }}>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
