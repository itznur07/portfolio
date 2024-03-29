import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { FiFileMinus } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // state to control menu visibility

  return (
    <div className='max-w-6xl md:mx-auto mx-4 z-50  '>
      <div className='md:flex md:flex-row items-center flex flex-col justify-between md:gap-y-0 gap-y-7 md:py-6 py-5'>
        {/* div 1 */}
        <div className='md:w-auto w-full md:flex md:justify-between  md:items-center flex justify-between items-center  '>
          <Link to='/'>
            <span className='text-4xl font-bold shadow-inner text-[#f5f5f5] rounded-full'>
              N.
            </span>
          </Link>
          {/* hamburger icon for mobile view */}
          <div
            className='md:hidden cursor-pointer text-white'
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <FaWindowClose size={24} /> : <FaBars size={24} />}
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } md:flex md:items-center justify-between md:mt-0 mt-4`}
        >
          <nav>
            <ul className='flex flex-col md:flex-row items-center md:space-x-16 space-y-5 md:space-y-0 md:text-md text-md font-medium cursor-pointer '>
              <li className={`text-[#676767] `}>
                <Link to='/' onClick={() => setShowMenu(false)}>
                  Home
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to='/projects' onClick={() => setShowMenu(false)}>
                  Projects
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to='/services' onClick={() => setShowMenu(false)}>
                  Services
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to='/about' onClick={() => setShowMenu(false)}>
                  About
                </Link>
              </li>
              <li className={`text-[#676767] `}>
                <Link to='/contact' onClick={() => setShowMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* div 2 */}
        <div className='flex gap-5'>
          {/* div 3 */}
          <div
            className={`${showMenu ? "block" : "hidden"} md:block mt-5 md:mt-0`}
          >
            <a
              href='https://calendly.com/nuruddinalways99/30min'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 px-4 py-2  text-[#000] bg-[#fff]  font-bold rounded-lg transition ease-linear duration-200 delay-75'
              onClick={() => setShowMenu(false)}
            >
              <IoCalendarOutline /> <span> Meeting </span>
            </a>
          </div>
          {/* div 3 */}
          {/* div 3 */}
          <div
            className={`${showMenu ? "block" : "hidden"} md:block mt-5 md:mt-0`}
          >
            <a
              href='https://drive.google.com/file/d/1-skp_kHpV30aCxrugwwAXXrvLQI5luz7/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 px-4 py-2   text-[#000] bg-[#fff]  font-bold rounded-lg transition ease-linear duration-200 delay-75'
              onClick={() => setShowMenu(false)}
            >
              <FiFileMinus /> <span>My Resume</span>
            </a>
          </div>
          {/* div 3 */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
