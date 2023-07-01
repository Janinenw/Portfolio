import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
      <div
        name='home'
        className='container flex justify-between items-center mx-auto px-8 md:px-10 lg:px-24 max-w-[1160px] h-screen'
      >
        <div className='mx-auto flex flex-col justify-center h-full font-mono'>
          <p
            data-aos-once='true'
            data-aos='fade-up'
            data-aos-duration='500'
            style={{marginBottom: '20px'}} 
          >
            <span style={{ color: "#1C4EC6" }}>def</span> 
            <span className='text-white'> greet</span>
            <span style={{color: "yellow"}}>()</span>
            <span className='text-white'> :</span>
          </p>
          
          <p>
            <span className='text-white'> print </span>
            <span style={{color: "orange"}}>"Hello world, my name is</span>
          </p>

          <h1
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='50'
            data-aos-once='true'
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 py-2'
          >
            <span style={{color: "orange"}}>Janine Wexler.</span>
          </h1>

          <h2
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='100'
            data-aos-once='true'
            className='max-w-[1000px] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-300'
          >
          </h2>

          <p
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='150'
            data-aos-once='true'
            className='text-teal-600 py-6 max-w-[600px]'
          >
            <span style={{color: "orange"}}>
            I am a Full-stack software engineer with a background in literature and education. I am passionate about exploring the intersection of pedagogy and technology to enhance user experiences."
            </span>
          </p>

          <p>
          <span className='text-white'> greet</span>
            <span style={{color: "yellow"}}>()</span>
          </p>

          
          </div>
        </div>
      
    );
};

export default Hero;