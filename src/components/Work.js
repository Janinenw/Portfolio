import React from 'react';
import { ProjectData } from '../data/ProjectData';

const Work = () => {
  return (
    <div
      name='work'
      className='container mx-auto px-8 md:px-10 lg:px-24 my-24 max-w-[1160px] font-mono text-slate-200 md:h-screen'
    >
      <div className='flex w-full'>
        <h1
          className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
        >
          My Work
        </h1>
      </div>
      <div className='container grid justify-center grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 my-10'>
        {ProjectData.map((project) => (
          <div key={project.image} className='hover:bg-customvsblue hover:bg-opacity-30 border-2 border-customvsblue rounded'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.type === 'video' ? (
                <video width="100%" height="auto" controls src={project.link}></video>
              ) : (
                <img alt='gallery' className='h-56 lg:h-60 w-full object-cover' src={project.image} />
              )}
            </a>
            <div className='p-4'>
              <h2 className='tracking-widest text-sm font-semibold text-customvsblue'>
                {project.subtitle}
              </h2>
              <h1 className='text-xl tracking-widest font-medium text-white my-1'>
                {project.title}
              </h1>
              <p className='leading-relaxed'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
