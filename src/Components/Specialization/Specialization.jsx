import React from "react";
import { FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import icon from "../../assets/icon.svg";

const Specialization = () => {
  const skills = [
    { toolName: "Javascript", icon: <SiJavascript />, lavel: "Intermediate" },
    { toolName: "Next.JS", icon: <SiNextdotjs />, lavel: "Intermediate" },
    {
      toolName: "React",
      icon: <FaReact className='animate-spin' />,
      lavel: "Intermediate",
    },
    { toolName: "Node.JS", icon: <FaNode />, lavel: "Intermediate" },
    { toolName: "ExpressJS", icon: <SiExpress />, lavel: "Intermediate" },
    { toolName: "MongoDB", icon: <SiMongodb />, lavel: "Intermediate" },
    { toolName: "Firebase", icon: <SiFirebase />, lavel: "Intermediate" },
    { toolName: "Tailwind", icon: <SiTailwindcss />, lavel: "Advanced" },
  ];

  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
      <div>
        <div className='grid grid-cols-12 gap-5'>
          {skills.map((skill) => (
            <div
              className='md:col-span-3 col-span-4 flex items-center space-x-1 bg-gradient-to-r from-[#262626] hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-black p-2 rounded-3xl border border-white border-opacity-10 text-white'
              key={skill.toolName}
            >
              <span className='text-md'>{skill.icon}</span>
              <span>{skill.toolName}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Specialization
        </p>
        <p className='text-2xl font-semibold text-white'>Skills</p>
      </div>
      <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
        <img src={icon} alt='icon' />
      </div>
    </div>
  );
};

export default Specialization;
