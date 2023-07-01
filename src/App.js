import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
   
 
    </>
  );
}

export default App;

