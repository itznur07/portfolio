import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from "react-icons/fa";
import Button from "./Button";
import Icon from "./Icon";


const Banner = () => {
  return (
    <>
      <div className='w-full h-screen mx-24 flex items-center gap-20'>
        <div className='flex flex-col gap-y-16 items-center '>
          <div className='flex flex-col gap-6 text-xl text-[#0eb761] cursor-pointer'>
            <Icon icon={<FaGithub />} link={`https://github.com/itznur07`} />
            <Icon
              icon={<FaLinkedin />}
              link={`https://www.linkedin.com/in/itznur07/`}
            />
            <Icon icon={<FaTwitter />} link={`https://twitter.com/itznur07`} />
            <Icon icon={<FaMedium />} link={`https://itznur07.medium.com/`} />
            <Icon
              icon={<FaInstagram />}
              link={`https://www.instagram.com/itznur07/`}
            />
          </div>
          <div className='flex items-center gap-y-2 -rotate-90 text-xl text-[#0eb761] font-medium'>
            <span>SOCIAL</span>
            <AiOutlineLine />{" "}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-medium text-[#0eb761]'>Hello I'm</p>
          <p className='text-7xl font-bold text-[#fff]'>Nuruddin</p>
          <p className='text-2xl text-[#0eb761] font-medium mt-5'>
            Frontend Developer
          </p>
          <span className='text-xl text-[#fff] font-medium'>
            Web Developer <small className='text-md text-[#0eb761]'>•</small>{" "}
            Programmer <small className='text-md text-[#0eb761]'>•</small>{" "}
            Designer
          </span>
          <div className='flex items-center gap-4 mt-5'>
            <Button name='Get Resume' style={`bg-[#0eb761]`} />
            <Button name='About me' style={`border border-[#0eb761]`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
