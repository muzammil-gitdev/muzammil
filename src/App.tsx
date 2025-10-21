import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkProcess from "./components/WorkProcess";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <WorkProcess />
      <Contact />
      <h1>This is me</h1>
    </>
  );
}

export default App;
