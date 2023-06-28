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
          className='text-teal-600'
        >
          def greet(): print("Hello world,
     my name is ")

        </p>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='50'
          data-aos-once='true'
          className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 py-2'
        >
          Janine Wexler.
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
        I am a Full-stack software engineer with a background in literature and education. I am passionate about exploring the intersection of pedagogy and technology to enhance user experiences. 
        </p>

<p>
        greet()
        </p>
        <div className='w-full flex justify-start gap-4'>
          <button
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            className='px-8 py-4 bg-teal-600 hover:bg-teal-700 text-slate-200 font-bold mt-12 flex items-center space-x-3 font-mono rounded'
          >
            <Link to='work' smooth={true} duration={700} offset={-125}>
              My Work
            </Link>
          </button>
          <a
           
            className='px-8 py-4 bg-teal-600 hover:bg-teal-700 text-slate-200 font-bold mt-12 flex items-center space-x-3 font-mono rounded'
            target='_blank'
            rel='noopener noreferrer'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='250'
            data-aos-once='true'
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;