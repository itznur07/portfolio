import React from "react";
import { AiOutlineFork } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTop";


const Footer = () => {
  return (
    <>
      <div className='container mx-auto bg-[#1d293a] py-3'>
        <div className='flex gap-x-5 items-center justify-center md:justify-between md:mx-24 md:py-2'>
          {/* div 1 */}
          <div>
            <h1 className='text-xl font-bold text-white'>@Itznur07</h1>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='flex md:gap-x-10 gap-x-6 text-white text-md'>
            <div>
              <a
                className='flex space-x-1'
                href='https://github.com/itznur07/portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <FaStar />
                <span className='uppercase'>Star</span>
              </a>
            </div>
            <div>
              <a
                className='flex space-x-1'
                href='https://github.com/itznur07/portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineFork />
                <span className='uppercase'>Fork</span>
              </a>
            </div>
            <div><ScrollToTopButton /></div>
          </div>
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

export default Footer;
