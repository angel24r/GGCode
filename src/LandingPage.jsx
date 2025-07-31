import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Helmet>
        <title>GG Code | Soluciones digitales modernas</title>
        <meta
          name="description"
          content="Impulsamos tu presencia digital con tecnología moderna. Landing pages, sitios web a la medida y más."
        />
        <meta name="author" content="GG Code" />
        <meta
          name="keywords"
          content="GG Code, desarrollo web, landing page, sitios personalizados, tecnología, Celaya"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* Open Graph / SEO */}
        <meta property="og:title" content="GG Code | Soluciones digitales modernas" />
        <meta
          property="og:description"
          content="Creamos landing pages y sitios web personalizados para negocios modernos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/GG-Code-logo.png" />
        <meta property="og:url" content="https://tusitio.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GG Code | Soluciones digitales modernas" />
        <meta
          name="twitter:description"
          content="Creamos landing pages y sitios web personalizados para negocios modernos."
        />
        <meta name="twitter:image" content="/GG-Code-logo.png" />
      </Helmet>

      <Navbar />

      <div id="inicio" className="pt-16">
        <Hero />
      </div>

      <div id="servicios">
        <Services />
      </div>

      <Benefits />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
