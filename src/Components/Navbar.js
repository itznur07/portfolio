import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='container mx-auto'>
      <div className='md:flex md:flex-row md:justify-between items-center flex flex-col md:gap-y-0 gap-y-7 justify-center md:mx-24 mx-10 md:py-6 py-5'>
        {/* div 1 */}
        <div>
          <Link to='/'>
            <span
              className='text-xl font-semibold text-[#fff] px-3 py-2 rounded-full'
              style={{ backgroundColor: color }}
            >
              N
            </span>
          </Link>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div>
          <nav>
            <ul className='flex items-center md:space-x-16 space-x-10 md:text-md text-md font-medium cursor-pointer'>
              <li className={`text-white hover:text-[${color}]`}>Home</li>
              <li className={`text-white hover:text-[${color}]`}>About</li>
              <li className={`text-white hover:text-[${color}]`}>Skills</li>
              <li className={`text-white hover:text-[${color}]`}>Project</li>
              <li className={`text-white hover:text-[${color}]`}>Contact</li>
            </ul>
          </nav>
        </div>
        {/* div 2 */}
        {/* div 3 */}
        <div>
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
