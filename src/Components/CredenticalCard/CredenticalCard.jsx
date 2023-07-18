import React from "react";
import signImg from "../../assets/sign.png";

const CredenticalCard = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515]'>
      <div>
        <img src={signImg} alt='signature' className="p-1" />
      </div>
      <div>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          More about me
        </p>
        <p className='text-2xl font-semibold text-white'>Credentials</p>
      </div>
    </div>
  );
};

export default CredenticalCard;
