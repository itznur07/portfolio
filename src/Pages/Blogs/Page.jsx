import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import icon from "../../assets/icon.svg";
import cover1 from "../../assets/svg/service-cover-1.webp";
import cover2 from "../../assets/svg/service-cover-2.webp";
import cover3 from "../../assets/svg/service-cover-3.webp";

const Page = () => {
  const blogs = [
    {
      id: 1,
      cover: cover1,
      title: "Mobile Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 799,
    },
    {
      id: 2,
      cover: cover2,
      title: "Web Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 355,
    },
  ];

  const bundles = [
    {
      id: 1,
      cover: cover3,
      title: "Mobile & Web Version",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 1599,
    },
  ];

  const allBlogs = [
    {
      id: 1,
      cover: cover1,
      title: "Mobile Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 799,
    },
    {
      id: 2,
      cover: cover2,
      title: "Web Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 355,
    },
    {
      id: 3,
      cover: cover1,
      title: "Food Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 799,
    },
    {
      id: 4,
      cover: cover2,
      title: "E-commerce Apps",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.",
      price: 1299,
    },
  ];

  return (
    <div className='max-w-6xl md:mx-auto mx-2 mb-16'>
      {/* service search bar */}
      <div className='flex justify-center mt-14 max-w-2xl mx-auto'>
        <input
          type='text'
          placeholder='Search...'
          className='border-[#2A2A2A] border rounded-lg w-full py-3 px-8 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none  text-white'
        />
      </div>

      {/* service navbar */}
      <div className='flex items-center justify-between mt-24'>
        <div>
          <h1 className='text-white font-bold text-3xl'>Best Sellers</h1>
        </div>
        <div className='flex items-center cursor-pointer group'>
          <h1 className='text-[#878787] font-bold text-xl'>More</h1>
          <IoIosArrowForward
            size={24}
            color='#878787'
            className='mt-1 group-hover:pl-1'
          />
        </div>
      </div>

      {/* services card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {blogs.map((blog) => (
          <div
            className='border border-[#2A2A2A] relative group rounded-3xl p-5 bg-gradient-to-r from-[#262626] to-[#151515] mb-8 md:mb-0'
            key={blog.id}
          >
            <img src={blog.cover} alt='cover' className='w-full h-56 mt-5' />
            <div className='mt-8 mx-2 mr-3 flex'>
              <div className='pr-9'>
                <h1 className='text-md font-semibold text-white '>
                  {blog.title}
                </h1>
                <p className='mt-3 text-sm text-[#878787] leading-snug'>
                  {blog.content.slice(0, 100)}
                </p>
                <div className=' items-center justify-between mt-5 hidden'>
                  <div className='cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
                    <img src={icon} alt='icon' />
                  </div>
                </div>
              </div>
              <div className=''>
                <p className='bg-white text-sm font-bold px-2 py-1 rounded-xl'>
                  ${blog.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* bundle templates navbar */}
      <div className='flex items-center justify-between mt-24'>
        <div>
          <h1 className='text-white font-bold text-3xl'>Bundles</h1>
        </div>
      </div>

      {/* bundles services card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {bundles.map((blog) => (
          <div
            className='border border-[#2A2A2A] relative group rounded-3xl p-5 bg-gradient-to-r from-[#262626] to-[#151515] mb-8 md:mb-0 '
            key={blog.id}
          >
            <div className='flex flex-col justify-start'>
              <div className=' group-hover:translate-x-12 items-center justify-between absolute right-16 top-4 cursor-pointer opacity-0 group-hover:opacity-90 group-hover:transition-opacity ease-linear duration-500  delay-100 group-hover:flex '>
                <img src={icon} width={40} alt='icon' />
              </div>
              <div>
                <button className='bg-white text-sm font-bold px-2 py-1 rounded-xl'>
                  ${blog.price}
                </button>
              </div>
              <div className='pr-9 mt-5'>
                <h1 className='text-lg font-semibold text-white '>
                  {blog.title}
                </h1>
                <p className='mt-2 text-md text-[#878787] leading-snug'>
                  {blog.content.slice(0, 100)}
                </p>
                <div className=' items-center justify-between mt-5 hidden'>
                  <div className='cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
                    <img src={icon} alt='icon' />
                  </div>
                </div>
              </div>
            </div>
            <img src={blog.cover} alt='cover' className='w-full mt-10 ' />
          </div>
        ))}
      </div>

      {/* all templates navbar */}
      <div className='flex items-center justify-between mt-24'>
        <div>
          <h1 className='text-white font-bold text-3xl'>All Services</h1>
        </div>
      </div>

      {/* all services card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {allBlogs.map((blog) => (
          <div
            className='border border-[#2A2A2A] relative group rounded-3xl p-5 bg-gradient-to-r from-[#262626] to-[#151515] mb-8 md:mb-0'
            key={blog.id}
          >
            <img src={blog.cover} alt='cover' className='w-full h-56 mt-5' />
            <div className='mt-8 mx-2 mr-3 flex'>
              <div className='pr-9'>
                <h1 className='text-md font-semibold text-white '>
                  {blog.title}
                </h1>
                <p className='mt-3 text-sm text-[#878787] leading-snug'>
                  {blog.content.slice(0, 100)}
                </p>
              </div>
              <div className=''>
                <p className='bg-white text-sm font-bold px-2 py-1 rounded-xl'>
                  ${blog.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
