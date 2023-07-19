import React from "react";

// import icons
import { useSelector } from "react-redux";

const MySkill = () => {
  const { color, skills } = useSelector((state) => state.datas);

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-[#bfaaff]  to-blue-400'>
      <div id='skills' className='max-w-7xl mx-auto'>
        <div className='md:flex items-center md:justify-between justify-center md:mx-0 h-auto md:space-y-0 space-y-10 md:space-x-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:ml-0 md:flex-none flex items-center justify-center'>
  
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
    </div>
  );
};

// skill card
const Card = ({ icon, name, color }) => {
  return (
    <div
      style={{ borderColor: color }}
      className='flex flex-col space-y-3 items-center w-36 h-36 rounded-xl p-5 bg-[#fff] border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer'
    >
      <div style={{ color: color }} className={`text-5xl `}>
        {icon}
      </div>
      <div className='space-y-3 text-right'>
        <h1 className='text-lg text-[#1d293a] font-medium'>{name}</h1>
      </div>
    </div>
  );
};

export default MySkill;
