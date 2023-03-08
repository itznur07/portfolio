import React from "react";
import Button from "./Button";
import MentionButton from "./MentionButton";

// import icons
import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMaterialui,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useSelector } from "react-redux";

const MySkill = () => {
  const { color } = useSelector((state) => state.datas);

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
              <Card
                icon={<FaReact />}
                name='React'
                lavel='Junior'
                color={`${color}`}
              />
              <Card
                icon={<SiTailwindcss />}
                name='Tailwindcss'
                lavel='Junior'
                color={`${color}`}
              />
              <Card
                icon={<TbBrandNextjs />}
                name='Nextjs'
                lavel='Begainner'
                color={`${color}`}
              />
              <Card
                icon={<SiExpress />}
                name='Expressjs'
                lavel='Begainner'
                color={`${color}`}
              />
              <Card
                icon={<SiMongodb />}
                name='MongoDB'
                lavel='Begainner'
                color={`${color}`}
              />
              <Card
                icon={<SiMaterialui />}
                name='MaterialUI'
                lavel='Begainner'
                color={`${color}`}
              />
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
    <div style={{borderColor: color}} className='flex items-center justify-between rounded cursor-pointer w-80 px-5 h-20 py-5 bg-[#1d293a] border border-opacity-25'>
      <div style={{color: color}} className={`text-5xl `}>{icon}</div>
      <div className='space-y-3 text-right'>
        <h1 className='text-xl text-white font-bold'>{name}</h1>
        <span className='text-sm text-[#ddd] font-medium '>{lavel}</span>
      </div>
    </div>
  );
};

export default MySkill;
