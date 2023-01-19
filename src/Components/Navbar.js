import React from "react";

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between py-6 mx-24'>
        <div className='cursor-pointer'>
          <span className='text-xl font-semibold text-[#fff] px-3 py-2 rounded-full bg-[#0eb761]'>
            N
          </span>
        </div>
        <div>
          <nav>
            <ul className='flex items-center gap-16 text-md text-[#fff] font-medium cursor-pointer'>
              <li className='hover:text-[#0eb761]'>Home</li>
              <li className='hover:text-[#0eb761]'>About</li>
              <li className='hover:text-[#0eb761]'>Portfolio</li>
              <li className='hover:text-[#0eb761]'>Contact</li>
            </ul>
          </nav>
        </div>
        <div className='cursor-pointer'>
          <button className='text-[#fff] text-md font-medium border border-[#0eb761] px-3 py-2 rounded-md'>
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
