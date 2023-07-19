import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import SocialProfile from "../../Components/SocialProfile/SocialProfile";
import icon2 from "../../assets/icon2.png";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <SiMaildotru size={24} />,
      name: "Email",
      text: "nuruddinalways99@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhone size={24} />,
      name: "Phone",
      text: "+880 1310765287",
    },

    {
      id: 2,
      icon: <FaMapMarkerAlt size={24} />,
      name: "Location",
      text: "Chittagong, Bangladesh",
    },
  ];

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-4'>
            {/* heading */}
            <h1 className='text-2xl font-semibold text-[#f5f5f5] uppercase'>
              Contact me
            </h1>
            {/* heading */}
            {/* contact info */}
            <div className='mt-5'>
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className='flex items-center space-x-4 mt-10'
                >
                  <div className='bg-gradient-to-r from-[#262626] to-[#171717] p-4 rounded-lg text-white cursor-pointer text-xl'>
                    {info.icon}
                  </div>
                  <div className=''>
                    <h1 className='text-[#f7f7f7] font-bold'>{info.name}</h1>
                    <p className='text-[#d3d3d3]'>{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* contact info */}
            {/* social info */}
            <div className='mt-10'>
              <SocialProfile></SocialProfile>
            </div>
            {/* social info */}
          </div>
          <div className='col-span-8'>
            <div className='rounded-3xl p-10 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
              <div className='absolute top-0 right-10'>
                <img src={icon2} alt='icon' />
              </div>
              <div className='text-4xl text-white font-semibold leading-tight'>
                <p>
                  Let's work <span className='text-[#19beff]'>together.</span>
                </p>
              </div>
              <form className='mt-8'>
                <div className='mt-2'>
                  <input
                    type='text'
                    placeholder='Name'
                    className='w-full p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='w-full p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    placeholder='Subject'
                    className='w-full p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <textarea
                    rows={7}
                    type='text'
                    placeholder='Message'
                    className='w-full p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-5'>
                  <button
                    type='button'
                    className='w-full px-5 py-2.5 text-[#fff] hover:text-[#000] bg-[#323232] hover:bg-[#f5f5f5] font-medium rounded-lg transition ease-linear duration-200 delay-75'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
