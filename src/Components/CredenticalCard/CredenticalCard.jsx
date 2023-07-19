import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import signImg from "../../assets/sign.png";

const CredenticalCard = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
      <div>
        <img src={signImg} alt='signature' className='p-1' />
      </div>
      <div>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          More about me
        </p>
        <p className='text-2xl font-semibold text-white'>Credentials</p>
      </div>
      <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
        <Link to='/about'>
          {" "}
          <img src={icon} alt='icon' />
        </Link>
      </div>
    </div>
  );
};

export default CredenticalCard;
