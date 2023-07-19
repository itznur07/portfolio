import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import icon from "../../assets/icon.svg";
const SocialProfile = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
      <div className='flex justify-center bg-[#1D1D1D] border border-white border-opacity-5 text-white  rounded-3xl p-5 items-center space-x-4'>
        <div className='bg-gradient-to-r from-[#262626] to-[#171717] p-4 rounded-full border border-white border-opacity-10 shadow hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-[#0A66C2]'>
          <FaLinkedinIn size={24} />
        </div>
        <div className='bg-gradient-to-r from-[#262626] to-[#171717] p-4 rounded-full border border-white border-opacity-10 shadow hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-black'>
          <FaGithubAlt size={24} />
        </div>
        <div className='bg-gradient-to-r from-[#262626] to-[#171717] p-4 rounded-full border border-white border-opacity-10 shadow hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-blue-500'>
          <FaTwitter size={24} />
        </div>
      </div>
      <div className='mt-7'>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Stay with me
        </p>
        <p className='text-2xl font-semibold text-white'>Profiles</p>
      </div>
      <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
        <img src={icon} alt='icon' />
      </div>
    </div>
  );
};

export default SocialProfile;
