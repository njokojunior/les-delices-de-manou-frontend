import React from "react";
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Hero from "./components/layouts/Hero";
import FeatureProducts from "./components/layouts/FeatureProducts";
import Main from "./components/layouts/Main";
import Testimonials from "./components/layouts/Testimonials";
import HowItWorks from "./components/layouts/HowItWorks";
import Contact from "./components/layouts/Contact";
import ContactForm from "./components/mail/ContactForm";
import ContactAddress from "./components/mail/ContactAddress";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Header>
        <Nav />
        <Hero />
      </Header>

      <Main>
        <FeatureProducts />
        <Testimonials />
        <HowItWorks />
        <Contact>
          <ContactForm />
          <ContactAddress />
        </Contact>
        <Footer />
      </Main>
    </>
  );
}

export default App;
