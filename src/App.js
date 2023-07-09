import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
    
      <Hero />
      <Navbar />
      <About />
      <Work />
      <Contact />
   
 
    </>
  );
}

export default App;

