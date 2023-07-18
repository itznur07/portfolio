import React from "react";
import icon2 from "../../assets/icon2.png";

const WorkTogether = () => {
  return (
    <div className='rounded-3xl relative py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515]'>
      <div className="absolute top-0 left-10">
        <img src={icon2} alt='icon' />
      </div>
      <div className='mt-16 text-5xl text-white font-semibold leading-tight'>
        <p>Let's</p>
        <p>
          work <span className='text-[#19beff]'>together.</span>
        </p>
      </div>
    </div>
  );
};

export default WorkTogether;
