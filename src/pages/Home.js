import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
