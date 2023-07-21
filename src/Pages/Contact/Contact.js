import React from "react";
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitData = (data) => {
    fetch("https://server-one-kohl.vercel.app/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("message send successfully 🎊");
          reset();
        }
      });
  };

  return (
    <>
      <div className='max-w-6xl md:mx-auto my-10  mx-2'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
          <div className='md:col-span-4'>
            {/* heading */}
            <h1 className='text-2xl font-semibold text-[#f5f5f5] uppercase'>
              Contact me
            </h1>
            {/* heading */}
            {/* contact info */}
            <div className='mt-5 space-y-5 md:space-y-10'>
              {contactInfo.map((info) => (
                <div key={info.id} className='flex items-center space-x-4'>
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
          <div className='md:col-span-8'>
            <div className='rounded-3xl p-5 md:p-10 bg-gradient-to-r from-[#262626] to-[#151515] relative group'>
              <div className='absolute top-0 right-10'>
                <img src={icon2} alt='icon' />
              </div>
              <div className='text-2xl md:text-4xl text-white font-semibold leading-tight'>
                <p>
                  Let's work <span className='text-[#19beff]'>together.</span>
                </p>
              </div>
              <form
                onSubmit={handleSubmit(handleSubmitData)}
                className='md:mt-8 mt-14'
              >
                <div className='mt-2'>
                  <input
                    {...register("name", {
                      required: "name is required",
                    })}
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='w-full p-3 md:p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <input
                    {...register("email", {
                      required: "email is required",
                    })}
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='w-full p-3 md:p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <input
                    {...register("subject", {
                      required: "subject is required",
                    })}
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    className='w-full p-3 md:p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-2'>
                  <textarea
                    rows={6}
                    {...register("message", {
                      required: "name is required",
                    })}
                    type='text'
                    name='message'
                    placeholder='Message'
                    className='w-full p-3 md:p-4 bg-gradient-to-r from-[#2a2a2a] to-[#191919] outline-none rounded-lg text-white'
                  />
                </div>
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='w-full px-5 py-2.5 md:py-3 md:text-xl text-[#fff] hover:text-[#000] bg-[#323232] hover:bg-[#f5f5f5] font-medium rounded-lg transition ease-linear duration-200 delay-75'
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
