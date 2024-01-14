import React from "react";
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
      tags: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
        "https://www.svgrepo.com/show/331488/mongodb.svg",
        "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      ],
      repoLink: "https://github.com/itznur07/magic-playtime-client",
      serverLink: "https://github.com/itznur07/magic-playtime-server",
      livelink: "https://magic-playtime.web.app/",
    },
    {
      id: 2,
      title: "Edoofy",
      image: projectImg2,
      description: "Online Educational Platform Using MERN Stack",
      tags: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
        "https://www.svgrepo.com/show/331488/mongodb.svg",
        "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      ],
      repoLink: "https://github.com/itznur07/edoofy-client",
      serverLink: "https://github.com/itznur07/edoofy-server",
      livelink: "https://edoofy-13bd9.web.app/",
    },
    {
      id: 3,
      title: "Bistro",
      image: projectImg3,
      description: "Restaurant Website Using MERN Stack",
      tags: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
        "https://www.svgrepo.com/show/331488/mongodb.svg",
        "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      ],
      repoLink: "https://github.com/itznur07/bistro-resturent-client",
      serverLink: "https://github.com/itznur07/bistro-resturent-server",
      livelink: "https://bistro-boss-auth-db7f4.web.app/",
    },
  ];

  return (
    <div className='max-w-6xl md:mx-auto mx-2'>
      <div className='mt-10'>
        <h1 className='text-3xl font-bold uppercase  text-[#f5f5f5]'>
          WEB APPS
        </h1>
      </div>
      <div className="flex items-center gap-[16px] flex-wrap">
        {projectData.map((project) => (
          <div
            key={project.id}
            className='max-w-[350px] my-10 rounded-3xl py-5 px-4 bg-gradient-to-r from-[#262626] to-[#151515] relative group shadow shadow-black'
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
              <p className='text-2xl font-semibold text-white'>
                {project.title}
              </p>
            </div>

            {/* Project Tags */}
            <div className='flex flex-wrap mt-4 '>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className='flex items-center justify-center text-white bg-gradient-to-r from-[#262626] to-[#151515] px-3 py-1 rounded-lg text-xs border border-white border-opacity-30 '
                >
                  <img className='w-[20px] ' src={tag} alt='img' />
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className='absolute flex items-center bottom-2 right-4 space-x-3'>
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
            </div>
          </div>
        ))}
      </div>
      <div className='mt-10'>
        <h1 className='text-3xl font-bold uppercase  text-[#f5f5f5]'>
          MOBILE APPS
        </h1>
      </div>
      <div className="flex items-center gap-[16px] flex-wrap">
        {projectData.map((project) => (
          <div
            key={project.id}
            className='max-w-[350px] my-10 rounded-3xl py-5 px-4 bg-gradient-to-r from-[#262626] to-[#151515] relative group shadow shadow-black'
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
              <p className='text-2xl font-semibold text-white'>
                {project.title}
              </p>
            </div>

            {/* Project Tags */}
            <div className='flex flex-wrap mt-4 '>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className='flex items-center justify-center text-white bg-gradient-to-r from-[#262626] to-[#151515] px-3 py-1 rounded-lg text-xs border border-white border-opacity-30 '
                >
                  <img className='w-[20px] ' src={tag} alt='img' />
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className='absolute flex items-center bottom-2 right-4 space-x-3'>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
