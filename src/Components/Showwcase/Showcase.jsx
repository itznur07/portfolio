import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import myWork from "../../assets/my-works.png";

const Showcase = () => {
  return (
    <>
      <Link to='/projects'>
        <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
          <div className="flex items-center justify-center">
            <img src={myWork} alt='work-imag' className='p-1' />
          </div>
          <div>
            <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
              Showcase
            </p>
            <p className='text-2xl font-semibold text-white'>Projects</p>
          </div>
          <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
            <Link to='/projects'>
              <img src={icon} alt='icon' />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Showcase;
