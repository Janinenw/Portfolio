import React from 'react';
import { AboutData } from '../data/AboutData';

const About = () => {
  const italicizeText = (text) => {
    const parts = text.split('Twin Peaks');
    return parts.map((part, index) =>
      index !== parts.length - 1 ? (
        <React.Fragment key={index}>
          {part}
          <i style={{ fontStyle: 'italic' }}>Twin Peaks</i>
        </React.Fragment>
      ) : (
        part
      )
    );
  };

  return (
    <div
      name='about'
      className='container flex flex-col md:flex-row justify-between items-center mx-auto px-8 py-10 md:px-10 lg:px-20 md:h-screen max-w-[1160px] font-mono text-slate-200 gap-8 my-8'
    >
      <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='150'
        data-aos-once='true'
      >
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'>
          About
        </h1>
        {AboutData.map((item, index) => (
          <div key={index}>
            <p className='my-8 mx-auto w-full max-w-5xl leading-normal'>
              {italicizeText(item.paragraph)}
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
        <img
          className='w-[300px] mx-auto outline outline-offset-2 outline-customvsblue'
          src={require('../assets/Janine-Wexler-About.png')}
          alt='Janine Wexler'
        />
      </div>
    </div>
  );
};

export default About;