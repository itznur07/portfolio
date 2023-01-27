import React, { useContext } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from "react-icons/fa";
import { ColorContext } from "../context/GlobalState";
import Button from "./Button";
import Icon from "./Icon";
import MentionButton from "./MentionButton";

const Banner = () => {
  const { color } = useContext(ColorContext);

  return (
    <div className='container mx-auto'>
      <div className='md:mx-24 mx-10 md:flex items-center md:my-0 my-16 md:gap-x-16 md:h-screen'>
        {/* div 1 */}
        <div className='md:flex md:flex-col flex flex-col-reverse md:gap-y-20 gap-y-5 items-center'>
          <div
            style={{ color: color }}
            className='flex md:flex-col gap-6 text-xl cursor-pointer'
          >
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
          <p style={{ color: color }} className='text-xl font-medium'>
            Hello I'm
          </p>
          <p className='md:text-7xl text-5xl font-bold text-[#fff]'>Nuruddin</p>
          <p style={{color: color}} className='md:text-2xl text-xl font-medium mt-5'>
            Frontend Developer
          </p>
          <span className='md:text-xl text-sm text-[#fff] font-medium'>
            Web Developer{" "}
            <small style={{ color: color }} className='text-md '>
              •
            </small>{" "}
            Programmer{" "}
            <small style={{ color: color }} className='text-md '>
              •
            </small>{" "}
            Designer
          </span>
          <div className='flex items-center gap-4 mt-5'>
            <a
              href='https://drive.google.com/file/d/1ImNylwGYbKjIjaMq7UlpMFPigWhGldtj/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Button name='Get Resume' cstyle={`bg-[${color}]`} />
            </a>
            <Button name='About me' cstyle={`border border-[${color}]`} />
          </div>
        </div>
        {/* div 2 */}
      </div>
    </div>
  );
};

export default Banner;
