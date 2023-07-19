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
    <div>
      <div className='mt-10'>
        <h1 className='text-7xl font-bold uppercase text-center text-[#f5f5f5]'>
          MY WORK
        </h1>
      </div>
      {projectData.map((project) => (
        <div className='max-w-6xl mx-auto my-5 rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group shadow shadow-black'>
          <div className='flex justify-center bg-[#1D1D1D] border border-white border-opacity-5 text-white  rounded-3xl  items-center space-x-4'>
            <img
              src={project.image}
              alt='project-cover'
              className='w-full h-full object-cover rounded-3xl border border-white border-opacity-40 '
            />
          </div>
          <div className='mt-7'>
            <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
              {project.description}
            </p>
            <p className='text-2xl font-semibold text-white'>{project.title}</p>
          </div>
          {/* 2 */}
          <div className='absolute left-80 cursor-pointer'>
            {project.tags.map((tag, i) => (
              <span
                className='mr-5 text-white bg-gradient-to-r from-[#262626] to-[#151515] p-2 rounded-lg px-4 text-xs border border-white border-opacity-30 '
                key={i}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* 3 */}
          <div className='absolute bottom-10 right-7 cursor-pointer'>
            <div className='flex items-center space-x-5'>
              <a href={project.livelink} target="black">
                <img
                  src={icon}
                  alt='icon'
                  className='opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 '
                />
              </a>
              <span className='text-xl text-white'>
                <a href={project.serverLink} target='black'>
                  <FaServer></FaServer>
                </a>
              </span>
              <span className='text-xl text-white'>
                <a href={project.repoLink} target="black">
                  <FaGithub></FaGithub>
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Protfolio;
