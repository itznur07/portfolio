import React from "react";

const Page = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex justify-center mt-10 max-w-3xl mx-auto'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-5 px-8 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-full text-white'
        />
      </div>
    </div>
  );
};

export default Page;
