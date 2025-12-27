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
import { Route, Routes, Navigate} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/pentesting" element={<Pentesting />} />
          <Route path="/digitalmarketing" element={<Digitalmarketing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
