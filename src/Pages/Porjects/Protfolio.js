import React from "react";
import { FaGithub, FaServer } from "react-icons/fa";
import icon from "../../assets/icon.svg";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";

const Protfolio = () => {
  const projectData = [
    {
      id: 1,
      title: "Khelagor",
      image: projectImg1,
      description: "Toys Products Types Website Using MERN Stack",
      tags: ["React", "Expressjs", "MongoDB", "tailwind", "firebase", "router"],
      repoLink: "https://github.com/itznur07/magic-playtime-client",
      serverLink: "https://github.com/itznur07/magic-playtime-server",
      livelink: "https://magic-playtime.web.app/",
    },
    {
      id: 2,
      title: "Edoofy",
      image: projectImg2,
      description: "Online Educational Platform Using MERN Stack",
      tags: ["React", "Expressjs", "MongoDB", "tailwind", "vite"],
      repoLink: "https://github.com/itznur07/edoofy-client",
      serverLink: "https://github.com/itznur07/edoofy-server",
      livelink: "https://edoofy-13bd9.web.app/",
    },
    {
      id: 3,
      title: "Bistro",
      image: projectImg3,
      description: "Restaurant Website Using MERN Stack",
      tags: ["React", "Expressjs", "MongoDB", "firebase", "tailwind"],
      repoLink: "https://github.com/itznur07/bistro-resturent-client",
      serverLink: "https://github.com/itznur07/bistro-resturent-server",
      livelink: "https://bistro-boss-auth-db7f4.web.app/",
    },
  ];

  return (
    <div className='max-w-6xl md:mx-auto mx-10'>
      <div className='mt-10'>
        <h1 className='text-7xl font-bold uppercase text-center text-[#f5f5f5]'>
          MY WORK
        </h1>
      </div>
      {projectData.map((project) => (
        <div
          key={project.id}
          className='max-w-6xl mx-auto my-5 rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group shadow shadow-black'
        >
          {/* Project Image */}
          <div className='w-full aspect-w-16 aspect-h-9 bg-[#1D1D1D] border border-white border-opacity-5 rounded-3xl overflow-hidden'>
            <img
              src={project.image}
              alt='project-cover'
              className='object-cover w-full h-full'
            />
          </div>

          {/* Project Description and Title */}
          <div className='mt-7'>
            <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
              {project.description}
            </p>
            <p className='text-2xl font-semibold text-white'>{project.title}</p>
          </div>

          {/* Project Tags */}
          <div className='flex flex-wrap mt-4 md:space-x-2 gap-5'>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className='text-white bg-gradient-to-r from-[#262626] to-[#151515] px-3 py-1 rounded-lg text-xs border border-white border-opacity-30 '
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className='absolute flex items-center bottom-5 right-4 space-x-3'>
            <a
              href={project.livelink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={icon}
                alt='icon'
                className='w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity ease-in-out duration-200'
              />
            </a>
            <a
              href={project.serverLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaServer className='text-white text-xl' />
            </a>
            <a
              href={project.repoLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-white text-xl' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Protfolio;
