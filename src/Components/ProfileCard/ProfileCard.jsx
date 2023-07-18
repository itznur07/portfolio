import React from "react";
import personImg from "../../assets/person.png";

const ProfileCard = () => {
  return (
    <div className='bg-gradient-to-r from-[#262626] to-[#151515]  rounded-3xl p-10 md:mx-0 mx-5'>
      <div className='flex items-center space-x-6'>
        <div>
          <img
            src={personImg}
            className='rounded-tl-3xl rounded-br-3xl border border-[#8a8a8a]'
            alt='personmage'
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-md uppercase font-medium text-[#8a8a8a]'>
            A MERN Stack Developer
          </p>
          <span className='text-4xl text-white font-semibold'>
            <p>Nur</p>
            <p>Uddin.</p>
          </span>
          <p className='capitalize text-sm font-medium text-[#8a8a8a]'>
            A MERN stack developer with a passion for creating dynamic and
            user-friendly applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
