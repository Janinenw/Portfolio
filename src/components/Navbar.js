// import React, { useState } from 'react';
// import { Link } from 'react-scroll'; 
// import { navData } from '../data/NavData';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <div onClick={handleClick} className='p-4 fixed top-0 right-0 z-50'>
//         <svg
//           className='w-6 h-6 text-white'
//           fill='none'
//           stroke='currentColor'
//           viewBox='0 0 24 24'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             strokeWidth='2'
//             d='M4 6h16M4 12h16M4 18h16'
//           ></path>
//         </svg>
//       </div>
//       <aside className={`font-mono fixed h-screen top-0 left-0 z-50 bg-customgray text-slate-200 flex flex-col items-start justify-between w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
//         <ul className='space-y-4 w-full'>
//           {navData.map((item, index) => (
//             item.name !== 'resume'
//             ? (
//               <li
//                 className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
//                 key={index}
//               >
//                 <Link onClick={handleClick} to={item.name} smooth={true} offset={-125} duration={700} className='block w-full py-2 text-center'>
//                   {item.title}
//                 </Link>
//               </li>
//             )
//             : (
//               <li
//                 className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
//                 key={index}
//               >
//                 <a href={item.link} className='block w-full py-2 text-center'>
//                   {item.title}
//                 </a>
//               </li>
//             )
//           ))}
//           <li className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'>
//             <Link onClick={handleClick} to='contact' smooth={true} duration={700} className='block w-full py-2 text-center'>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </aside> 
//     </>
//   );
// };
// export default Navbar;

// possible code for transparent navbar
// export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-scroll'; 
// import { navData } from '../data/NavData';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <div onClick={handleClick} className='p-4 fixed top-0 right-0 z-50'>
//         <svg
//           className='w-6 h-6 text-white'
//           fill='none'
//           stroke='currentColor'
//           viewBox='0 0 24 24'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             strokeWidth='2'
//             d='M4 6h16M4 12h16M4 18h16'
//           ></path>
//         </svg>
//       </div>
//       <aside className={`font-mono fixed h-screen top-0 left-0 z-50 bg-gray-800 bg-opacity-75 text-slate-200 flex flex-col items-start justify-between w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
//         <ul className='space-y-4 w-full'>
//           {navData.map((item, index) => (
//             item.name !== 'resume'
//             ? (
//               <li
//                 className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
//                 key={index}
//               >
//                 <Link onClick={handleClick} to={item.name} smooth={true} offset={-125} duration={700} className='block w-full py-2 text-center'>
//                   {item.title}
//                 </Link>
//               </li>
//             )
//             : (
//               <li
//                 className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
//                 key={index}
//               >
//                 <a href={item.link} className='block w-full py-2 text-center'>
//                   {item.title}
//                 </a>
//               </li>
//             )
//           ))}
//           <li className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'>
//             <Link onClick={handleClick} to='contact' smooth={true} duration={700} className='block w-full py-2 text-center'>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </aside> 
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import { navData } from '../data/NavData';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleClick} className='p-4 fixed top-0 right-0 z-50'>
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
      <aside className={`font-mono fixed h-screen top-0 left-0 z-50 bg-customgray bg-opacity-75 md:bg-opacity-100 text-slate-200 flex flex-col items-start justify-between w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
   

        <ul className='space-y-4 w-full'>
          {navData.map((item, index) => (
            item.name !== 'resume'
            ? (
              <li
                className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
                key={index}
              >
                <Link onClick={handleClick} to={item.name} smooth={true} offset={-125} duration={700} className='block w-full py-2 text-center'>
                  {item.title}
                </Link>
              </li>
            )
            : (
              <li
                className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'
                key={index}
              >
                <a href={item.link} className='block w-full py-2 text-center'>
                  {item.title}
                </a>
              </li>
            )
          ))}
          <li className='cursor-pointer hover:bg-customlightgray transition-colors duration-200 w-full'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={700} className='block w-full py-2 text-center'>
              Contact
            </Link>
          </li>
        </ul>
      </aside> 
    </>
  );
};
export default Navbar;
