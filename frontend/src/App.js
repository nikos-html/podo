import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import FootProblems from "./components/FootProblems";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <FootProblems />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
