import React from "react";
import myWork from "../../assets/my-works.png";

const Showcase = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515]'>
      <div>
        <img src={myWork} alt='work-imag' className='p-1' />
      </div>
      <div>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Showcase
        </p>
        <p className='text-2xl font-semibold text-white'>Projects</p>
      </div>
    </div>
  );
};

export default Showcase;
