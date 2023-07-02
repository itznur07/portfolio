import React from "react";
import { useSelector } from "react-redux";
// import icons
import { useForm } from "react-hook-form";
import MentionButton from "./MentionButton";

const Contact = () => {
  const { color } = useSelector((state) => state.datas);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div id="contact" className='cotainer mx-auto'>
        <div className='md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='space-y-5 md:mt-0 mt-5'>
            <div>
              <h1 style={{ color: color }} className='text-xl font-bold'>
                Email
              </h1>
              <p className='text-[#1d293a] text-md'>
                nuruddinalways99@gmail.com
              </p>
            </div>
            <div>
              <h1 style={{ color: color }} className='text-xl  font-bold'>
                Linkedin
              </h1>
              <p className='text-[#1d293a] text-md'>
                <a
                  href='https://www.linkedin.com/in/itznur07/'
                  target='_blank'
                  rel='noreferrer'
                >
                  @itznur07
                </a>
              </p>
            </div>
            <div>
              <h1 style={{ color: color }} className='text-xl font-bold'>
                Address
              </h1>
              <p className='text-[#1d293a] text-md'>Chittagong, Bangladesh</p>
            </div>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='md:flex md:items-center items-center md:gap-x-5 md:gap-y-4'>
                <div className='space-y-4'>
                  <div className='mb-4'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      style={{ borderColor: color }}
                      placeholder='Name'
                      className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-[${color}] focus:border-0 focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    <br />
                    {errors.name && (
                      <span className='text-red-500'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-4'>
                    <input
                      type='email'
                      name='email'
                      style={{ borderColor: color }}
                      id='email'
                      placeholder='Email'
                      className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-[${color}] focus:border-0 focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                    />
                    <br />
                    {errors.email && (
                      <span className='text-red-500'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-4'>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                      style={{ borderColor: color }}
                      className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-[${color}] focus:border-0 focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      {...register("subject", {
                        required: "Email is required",
                      })}
                    />
                    <br />
                    {errors.subject && (
                      <span className='text-red-500'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message", {
                      required: "Message field is required",
                    })}
                    style={{ borderColor: color }}
                    className={`md:mt-0 mt-3 w-72 border outline-none px-3 py-3 rounded focus:ring-1 focus:ring-[${color}] focus:border-0 focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105`}
                    rows='5'
                    placeholder='Message'
                    type='text'
                    name='message'
                  ></textarea>
                  <br />
                  {errors.message && (
                    <span className='text-red-500'>
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='md:mt-3 mt-2'>
                <button
                  className={`w-full bg-[#0A69DC] text-white font-medium text-md border p-2 px-5 rounded`}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* div 2 */}
          {/* div 3 */}
          <MentionButton name='Contact' />
          {/* div 3 */}
        </div>
      </div>
    </>
  );
};

export default Contact;
