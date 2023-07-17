import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialProfile = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#171717]'>
      <div className='flex justify-center bg-[#1D1D1D] border border-white border-opacity-5 text-white  rounded-3xl p-5 items-center space-x-4'>
        <div className="bg-[#212121] p-4 rounded-full border border-white border-opacity-10 shadow">
          <FaLinkedinIn size={24} />
        </div>
        <div className="bg-[#212121] p-4 rounded-full border border-white border-opacity-10 shadow">
          <FaGithubAlt size={24} />
        </div>
        <div className="bg-[#212121] p-4 rounded-full border border-white border-opacity-10 shadow">
          <FaTwitter size={24} />
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Stay with me
        </p>
        <p className='text-2xl font-semibold text-white'>Profiles</p>
      </div>
    </div>
  );
};

export default SocialProfile;
