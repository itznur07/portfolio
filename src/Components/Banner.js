import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { useSelector } from "react-redux";
import Button from "./Button";
import Icon from "./Icon";
import MentionButton from "./MentionButton";

const Banner = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='container mx-auto'>
      <div>
        <SiJavascript
          size={24}
          className='absolute text-yellow-500 md:top-52 md:left-44 top-44 left-32'
        />
        <SiReact
          size={28}
          className='absolute text-blue-500 md:top-64 top-52 md:left-96 left-72 md:ml-16 animate-spin'
        />
        <SiTailwindcss
          size={26}
          className='absolute text-[#38BDF8] md:bottom-56 bottom-32 md:ml-16 md:left-96'
        />
        <SiRedux
          size={24}
          className='absolute text-[#38BDF8] md:bottom-96 bottom-96 md:ml-16 md:left-64 left-20'
        />

        <SiNodedotjs
          size={24}
          className={`absolute text-[#5F9856] md:top-64 md:right-96 md:ml-16`}
        />
        <SiExpress
          size={24}
          className={`absolute text-[${mode?.text}] md:bottom-72 md:right-52`}
        />
        <SiMongodb
          size={26}
          className='absolute text-[#00ED64] md:bottom-56 md:ml-16 md:right-96'
        />
        <SiFirebase
          size={24}
          className='absolute text-[#FFCB2D] md:bottom-96  md:right-72'
        />
      </div>
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
          <p
            style={{ color: color }}
            className='md:text-2xl text-xl font-medium mt-5'
          >
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
              href='https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing'
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
