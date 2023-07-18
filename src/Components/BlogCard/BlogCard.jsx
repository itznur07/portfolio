import React from "react";
import blogImg from "../../assets/gfonts.png";

const BlogCard = () => {
  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515]'>
      <div>
        <img src={blogImg} alt='blogImage' className='p-1' />
      </div>
      <div>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Read my article
        </p>
        <p className='text-2xl font-semibold text-white'>Blogs</p>
      </div>
    </div>
  );
};

export default BlogCard;
