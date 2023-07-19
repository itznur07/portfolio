import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import personImg from "../../assets/person.png";

const ProfileCard = () => {
  return (
    <>
      <Link to='/about'>
        <div className='w-full h-full bg-gradient-to-r from-[#262626] to-[#151515]  rounded-3xl p-10 md:mx-0 mx-5 relative group'>
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
            <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
              <Link to='/about'>
                <img src={icon} alt='icon' />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileCard;
