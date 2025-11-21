import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Webdev from "./components/Webdev";
import Pentesting from "./components/Pentesting";
import Digitalmarketing from "./components/Digitalmarketing";
import Designing from "./components/Designing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <Services />
        <AboutUs />
        <Projects />
        <Pricing />
        <Testimonial/>
        <FAQ />
        <Webdev />
        <Pentesting />
        <Digitalmarketing />
        <Designing />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
