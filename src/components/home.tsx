import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import WorkProcess from "./WorkProcess";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <WorkProcess />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
