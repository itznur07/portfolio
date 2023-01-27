import React, { useContext } from "react";
import { ColorContext } from "../context/GlobalState";

// import icons
import { AiFillMediumCircle } from 'react-icons/ai';
import { BsCodeSquare } from "react-icons/bs";
import { MdOutlineVideoSettings } from 'react-icons/md';
import MentionButton from "./MentionButton";

const LoveToDo = () => {


  return (
    <>
      <div className='container mx-auto'>
        <div className='md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10'>
            <Card icon={<BsCodeSquare />} name='Coding' />
            <Card icon={<MdOutlineVideoSettings />} name='Content Creation' />
            <Card icon={<AiFillMediumCircle />} name='Bloging' />
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <MentionButton name='LoveTo Do' />
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

// todo card

const Card = ({ icon, name }) => {

  const { color } = useContext(ColorContext);

  return (
    <div style={{borderColor: color}} className='md:w-80 w-72 h-48 py-5 bg-[#1d293a] rounded md:flex items-center justify-center cursor-pointer hover:bg-white group transition ease-linear duration-200 border  border-opacity-30'>
      <div className="flex flex-col items-center gap-y-5">
        <span style={{color: color}} className='text-7xl'>{icon}</span>
        <h1 className='text-2xl text-[#fff] group-hover:text-black font-semibold'>{name}</h1>
      </div>
    </div>
  );
};

export default LoveToDo;
