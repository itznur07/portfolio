import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.png";

const WorkTogether = () => {
  return (
    <>
      <Link to='/contact'>
        <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
          <div className='absolute top-0 left-10'>
            <img src={icon2} alt='icon' />
          </div>
          <div className='mt-16 text-5xl text-white font-semibold leading-tight'>
            <p>Let's</p>
            <p>
              work <span className='text-[#19beff]'>together.</span>
            </p>
          </div>
          <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
            <Link to='/contact'>
              <img src={icon} alt='icon' />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkTogether;
