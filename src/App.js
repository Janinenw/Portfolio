import { useEffect } from 'react';
import Hero from './components/Hero';
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
   
 
    </>
  );
}

export default App;

