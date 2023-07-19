import React from "react";
import { AiOutlineFork } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTop";

const Footer = () => {
  return (
    <>
      <div className='container mx-auto mt-10  py-3  bg-gradient-to-r from-[#262626] to-[#171717]'>
        <div className='flex gap-x-5 items-center justify-between md:justify-between max-w-6xl mx-auto md:py-2'>
          {/* div 1 */}
          <div>
            <h1 className='text-xl font-bold text-white'>NUR.</h1>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='flex items-center space-x-5 text-white text-md'>
            <div className='flex items-center space-x-2'>
              <a
                className='flex space-x-1'
                href='https://github.com/itznur07/portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <FaStar fontWeight={700}/>
                <span className='uppercase'>Star</span>
              </a>
            </div>
            <div>
              <a
                className='flex items-center space-x-2 font-bold'
                href='https://github.com/itznur07/portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineFork />
                <span className='uppercase'>Fork</span>
              </a>
            </div>
            <div>
              <ScrollToTopButton />
            </div>
          </div>
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

export default Footer;
