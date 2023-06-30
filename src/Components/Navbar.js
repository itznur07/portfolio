import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const { color } = useSelector((state) => state.datas);
  const [showMenu, setShowMenu] = useState(false); // state to control menu visibility

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='md:flex md:flex-row md:justify-between items-center flex flex-col md:gap-y-0 gap-y-7 justify-center md:py-6 py-5'>
        {/* div 1 */}
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <span
              className='text-xl font-semibold text-[#fff] px-3 py-2 rounded-full'
              style={{ backgroundColor: color }}
            >
              N
            </span>
          </Link>
          {/* hamburger icon for mobile view */}
          <div
            className='md:hidden cursor-pointer'
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke={color}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          }  md:flex  md:items-center justify-between`}
        >
          <nav>
            <ul className='flex flex-col md:flex-row items-center md:space-x-16 space-y-5 md:space-y-0 md:text-md text-md font-medium cursor-pointer'>
              <li className={`text-[#1d293a] hover:text-[${color}]`}>Home</li>
              <li className={`text-[#1d293a] hover:text-[${color}]`}>About</li>
              <li className={`text-[#1d293a] hover:text-[${color}]`}>Skills</li>
              <li className={`text-[#1d293a] hover:text-[${color}]`}>
                Project
              </li>
              <li className={`text-[#1d293a] hover:text-[${color}]`}>
                Contact
              </li>
            </ul>
          </nav>
        </div>
        {/* div 2 */}
        {/* div 3 */}
        <div
          className={`${showMenu ? "block" : "hidden"} md:block mt-5 md:mt-0`}
        >
          <a
            href='https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <Button name='Resume' cstyle={`border border-[${color}]`} />
          </a>
        </div>
        {/* div 3 */}
      </div>
    </div>
  );
};

export default Navbar;
