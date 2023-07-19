import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
const SocialProfile = () => {
  const socialIcon = [
    {
      id: 1,
      icon: <FaLinkedinIn size={18} />,
      url: "https://www.linkedin.com/in/itznur07/",
      hcolor: "hover:text-[#0A66C2]",
    },
    {
      id: 2,
      icon: <FaGithub size={18} />,
      url: "https://github.com/itznur07",
      hcolor: "hover:text-black",
    },
    {
      id: 3,
      icon: <FaInstagram size={18} />,
      url: "https://www.threads.net/@itznur07",
      hcolor: "hover:text-[#E70E1A]",
    },
    {
      id: 4,
      icon: <FaTwitter size={18} />,
      url: "https://twitter.com/itznur07",
      hcolor: "hover:text-[#1A8CD8]",
    },
  ];

  return (
    <div className='rounded-3xl py-10 px-6 bg-gradient-to-r from-[#262626] to-[#151515] relative group w-full h-full'>
      <div className='flex justify-center bg-[#1D1D1D] border border-white border-opacity-5 text-white  rounded-3xl p-5 items-center space-x-3'>
        {socialIcon.map((social) => (
          <a href={social.url} target='black' key={social.id}>
            <div
              className={`bg-gradient-to-r from-[#262626] to-[#171717] p-3 rounded-full border border-white border-opacity-10 shadow hover:from-[#ffffff] hover:to-[#8df2ff] cursor-pointer transition ease-linear duration-200 delay-100 font-medium ${social.hcolor}`}
            >
              {social.icon}
            </div>
          </a>
        ))}
      </div>
      <div className='mt-7'>
        <p className='text-xs uppercase font-medium text-[#8a8a8a] mb-2'>
          Stay with me
        </p>
        <p className='text-2xl font-semibold text-white'>Profiles</p>
      </div>
      <div className='absolute bottom-5 right-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100'>
        <Link to='/about'>
          {" "}
          <img src={icon} alt='icon' />
        </Link>
      </div>
    </div>
  );
};

export default SocialProfile;
