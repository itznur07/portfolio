import React from "react";
import { FaClock } from "react-icons/fa";
import icon from "../../assets/icon.svg";

const Page = () => {
  const blogs = [
    {
      id: 1,
      cover:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title:
        "রহস্যময়ী জাভাস্ক্রিপ্টঃ ('b' + 'a'+ + 'a' + 'a').toLowerCase() নাকি বানানা ('banana') হয়?!?!",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.But with JavaScript, methods and properties are also available to strings because JavaScript treats strings as objects when executing methods and properties.",
      readtime: 3,
    },
    {
      id: 2,
      cover:
        "data:image/jpeg;base64,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",
      title: "রহস্যময়ী জাভাস্ক্রিপ্টঃ type of NaN === “number” কেনো?",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.But with JavaScript, methods and properties are also available to strings because JavaScript treats strings as objects when executing methods and properties.",
      readtime: 2,
    },
    {
      id: 3,
      cover: "https://nextjs.org/static/blog/next-13-4/twitter-card.png",
      title: "Next.js 13 version super power with turbo Pack",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.But with JavaScript, methods and properties are also available to strings because JavaScript treats strings as objects when executing methods and properties.",
      readtime: 1,
    },
    {
      id: 4,
      cover:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/typescript-logo.png?fit=1200%2C600&ssl=1",
      title: "Expline Typescript super power with Next.js Projects",
      content:
        "String Properties and Method Normally strings like cannot have methods or properties because they are not objects.But with JavaScript, methods and properties are also available to strings because JavaScript treats strings as objects when executing methods and properties.",
      readtime: 5,
    },
  ];
  
  return (
    <div className='max-w-6xl md:mx-auto mx-10 mb-16'>
      <div>
        <h1 className='text-center mt-10 text-3xl font-bold text-[#f5f5f5] uppercase'>
          All Blogs{" "}
          <span className='text-sm font-medium text-gray-300'>
            (beta version)
          </span>
        </h1>
      </div>
      <div className='flex justify-center mt-5 max-w-3xl mx-auto'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full p-5 px-8 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-full text-white'
        />
      </div>

      {/* Updated grid layout for mobile devices */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {blogs.map((blog) => (
          <div
            className='relative group rounded-3xl p-5 bg-gradient-to-r from-[#262626] to-[#151515] mb-8 md:mb-0'
            key={blog.id}
          >
            <img
              src={blog.cover}
              alt='cover'
              className='rounded-3xl object-cover w-full h-56 mt-5'
            />
            <div className='mt-8'>
              <h1 className='text-md font-semibold text-white '>
                {blog.title}
              </h1>
              <p className='mt-3 text-sm text-[#f8f8f8] leading-snug'>
                {blog.content.slice(0, 100)}
              </p>
              <div className='flex items-center justify-between mt-5'>
                <span className='text-white font-medium flex items-center space-x-2'>
                  <FaClock size={24} />
                  <p>{blog.readtime} min</p>
                </span>
                <div className='cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
                  <img src={icon} alt='icon' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
