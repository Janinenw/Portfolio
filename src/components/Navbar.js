import React, { useState } from 'react';
import { navData } from '../data/NavData';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleClick} className='md:hidden p-4 fixed top-0 right-0 z-50'>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </div>
      <aside className={`font-mono fixed h-screen top-0 left-0 z-50 bg-customgray text-slate-200 flex flex-col items-start justify-between py-8 px-4 md:px-6 lg:px-8 w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>

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
    </>
  );
};

export default Navbar;