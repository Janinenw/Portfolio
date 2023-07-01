import React, { useState } from 'react';
import { navData } from '../data/NavData';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <aside className='font-mono fixed h-screen top-0 left-0 z-50 bg-zinc-900 text-slate-200 flex flex-col items-start justify-between py-8 px-4 md:px-6 lg:px-8 w-64'>
    
      <ul className='space-y-4'>
        {navData.map((item, index) => (
          <li
            className='hover:decoration-teal-600 hover:underline hover:underline-offset-4 decoration-2 cursor-pointer'
            key={index}
          >
            <Link to={item.name} smooth={true} offset={-125} duration={700}>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          
            <Link to='contact' smooth={true} duration={700}>
              Contact
              
            </Link>
         
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;