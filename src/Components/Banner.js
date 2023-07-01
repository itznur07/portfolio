import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import bannerImg from "../../src/assets/banner-logo.svg";
import Button from "./Button";
import Icon from "./Icon";
import MentionButton from "./MentionButton";

const Banner = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='max-w-7xl mx-auto h-screen'>
      <div className='mt-20'>
        <div className='flex md:flex-row flex-col-reverse items-center justify-between'>
          <div className='flex'>
            {/* div 1 */}
            <div className='flex flex-col space-y-20 items-center'>
              <div
                style={{ color: color }}
                className='flex flex-col items-center space-y-5'
              >
                <Icon
                  icon={<FaGithub />}
                  link={`https://github.com/itznur07`}
                />
                <Icon
                  icon={<FaLinkedin />}
                  link={`https://www.linkedin.com/in/itznur07/`}
                />
                <Icon
                  icon={<FaTwitter />}
                  link={`https://twitter.com/itznur07`}
                />
                <Icon
                  icon={<FaMedium />}
                  link={`https://itznur07.medium.com/`}
                />
              </div>

              <div>
                <MentionButton name='Social' />
              </div>
            </div>
            {/* div 1 */}
            {/* div 2 */}
            <div className=''>
              <p style={{ color: color }} className='text-xl font-medium'>
                Hello I'm
              </p>
              <p className='md:text-7xl text-5xl font-bold text-[#1d293a]'>
                Nur Uddin
              </p>
              <p
                style={{ color: color }}
                className='md:text-2xl text-xl font-medium mt-5'
              >
                Frontend Developer
              </p>
              <span className='md:text-xl text-sm text-[#1d293a] font-medium'>
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
          <div className=''>
            <img src={bannerImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
