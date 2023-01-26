import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from "react-icons/fa";
import Button from "./Button";
import Icon from "./Icon";
import MentionButton from "./MentionButton";

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <div className='md:mx-24 mx-10 md:flex items-center md:my-0 my-10 md:gap-x-16 md:h-screen'>
        {/* div 1 */}
        <div className='md:flex md:flex-col flex flex-col-reverse md:gap-y-20 gap-y-5 items-center'>
          <div className='flex md:flex-col gap-6 text-xl text-[#0eb761] cursor-pointer'>
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
          <div>
            <MentionButton name='Social' />
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div className='flex flex-col md:gap-2 md:items-start items-center justify-center md:mt-0 mt-14'>
          <p className='text-xl font-medium text-[#0eb761]'>Hello I'm</p>
          <p className='md:text-7xl text-5xl font-bold text-[#fff]'>Nuruddin</p>
          <p className='md:text-2xl text-xl text-[#0eb761] font-medium mt-5'>
            Frontend Developer
          </p>
          <span className='md:text-xl text-sm text-[#fff] font-medium'>
            Web Developer <small className='text-md text-[#0eb761]'>•</small>{" "}
            Programmer <small className='text-md text-[#0eb761]'>•</small>{" "}
            Designer
          </span>
          <div className='flex items-center gap-4 mt-5'>
            <a
              href='https://drive.google.com/file/d/1ImNylwGYbKjIjaMq7UlpMFPigWhGldtj/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Button name='Get Resume' style={`bg-[#0eb761]`} />
            </a>
            <Button name='About me' style={`border border-[#0eb761]`} />
          </div>
        </div>
        {/* div 2 */}
      </div>
    </div>
  );
};

export default Banner;
