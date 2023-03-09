import React from "react";
import Button from "./Button";
import MentionButton from "./MentionButton";

// import icons
import { useSelector } from "react-redux";

const MySkill = () => {
  const { color, skills } = useSelector((state) => state.datas);

  return (
    <>
      <div className='container mx-auto'>
        <div className='md:flex items-center md:justify-between justify-center md:mx-24 md:mt-28 mt-20 md:h-96 h-auto md:space-y-0 space-y-10 md:space-x-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:ml-0 ml-36'>
            <MentionButton name='Skills' />
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:space-y-10'>
            {/* skill navbar */}
            <div className='flex md:gap-x-10 gap-x-3 md:ml-0 ml-10'>
              <Button name='Web' cstyle={`border border-[${color}]`} />
              <Button name='Other' cstyle={`border border-[${color}]`} />
              <Button name='Programming' cstyle={`border border-[${color}]`} />
              <Button name='Tools' cstyle={`border border-[${color}]`} />
            </div>
            {/* skill card */}
            <div className='flex flex-wrap gap-10 md:mx-0 mx-16 md:mt-0 mt-10'>
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
      className='flex items-center justify-between rounded cursor-pointer w-80 px-5 h-20 py-5 bg-[#1d293a] border border-opacity-25'
    >
      <div style={{ color: color }} className={`text-5xl `}>
        {icon}
      </div>
      <div className='space-y-3 text-right'>
        <h1 className='text-xl text-white font-bold'>{name}</h1>
        <span className='text-sm text-[#ddd] font-medium '>{lavel}</span>
      </div>
    </div>
  );
};

export default MySkill;
