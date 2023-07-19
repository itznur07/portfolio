import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import SocialProfile from "../../Components/SocialProfile/SocialProfile";

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
        <div className='grid grid-cols-12'>
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
          <div className='col-span-8'>right</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
