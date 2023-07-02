import React from "react";
import MentionButton from "./MentionButton";

// import icons
import { useSelector } from "react-redux";

const MySkill = () => {
  const { color, skills } = useSelector((state) => state.datas);

  return (
    <>
      <div id="skills" className='max-w-7xl mx-auto mt-20'>
        <div className='md:flex items-center md:justify-between justify-center md:mx-0 h-auto md:space-y-0 space-y-10 md:space-x-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:ml-0 md:flex-none flex items-center justify-center'>
            <MentionButton name='Skills' />
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:space-y-10'>
            <div className='flex flex-wrap md:justify-start justify-center gap-10 md:mx-0 mx-16 md:mt-0 mt-10'>
              {skills.map((tool) => (
                <Card
                  icon={tool.icon}
                  name={tool.toolName}
                  lavel={tool.lavel}
                  color={`${color}`}
                />
              ))}
            </div>
            {/* skill card */}
          </div>
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

// skill card
const Card = ({ icon, name, lavel, color }) => {
  return (
    <div
      style={{ borderColor: color }}
      className='flex items-center justify-between rounded w-80 px-5 h-20 py-5 bg-[#fff] border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer'
    >
      <div style={{ color: color }} className={`text-5xl `}>
        {icon}
      </div>
      <div className='space-y-3 text-right'>
        <h1 className='text-xl text-[#1d293a] font-bold'>{name}</h1>
        <span className='text-sm text-[#1d293a] font-medium '>{lavel}</span>
      </div>
    </div>
  );
};

export default MySkill;
