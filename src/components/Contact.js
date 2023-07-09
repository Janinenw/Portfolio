import React from 'react';
import { ContactInfo } from '../data/ContactInfo';

const Contact = () => {
  return (
    <div
      name='contact'
      className='container flex flex-col md:flex-row justify-between items-center mx-auto px-8 py-10 md:px-10 lg:px-20 md:h-screen max-w-[1160px] font-mono text-slate-200 gap-8 my-24'
    >
      <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='150'
        data-aos-once='true'
      >
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'>
          Contact Info
        </h1>
        {ContactInfo.map((item, index) => (
          <div key={index}>
            <p className='my-8 mx-auto w-full max-w-5xl leading-normal'>
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
      <div
        className='w-full'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='150'
        data-aos-once='true'
      >
      </div>
    </div>
  );
};

export default Contact;