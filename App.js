
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import './App.css';


function App() {
  return (
     <Router>
      <Navbar />
      <Hero />
      
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    
    </Router>
    
  );
}

export default App;
