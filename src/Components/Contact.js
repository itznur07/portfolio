import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
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
      <div className='cotainer mx-auto'>
        <div className='md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='space-y-4 md:mt-0 mt-5'>
            <div className='md:space-y-2'>
              <h1 style={{ color: color }} className='text-xl font-bold'>
                Email
              </h1>
              <p className='text-[#ddd] text-md'>nuruddinalways99@gmail.com</p>
            </div>
            <div className='md:space-y-2'>
              <h1 style={{ color: color }} className='text-xl  font-bold'>
                Linkedin
              </h1>
              <p className='text-[#ddd] text-md'>
                <a
                  href='https://www.linkedin.com/in/itznur07/'
                  target='_blank'
                  rel='noreferrer'
                >
                  @itznur07
                </a>
              </p>
            </div>
            <div className='md:space-y-2'>
              <h1 style={{ color: color }} className='text-xl font-bold'>
                Address
              </h1>
              <p className='text-[#ddd] text-md'>Chittagong, Bangladesh</p>
            </div>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='md:flex items-center md:gap-x-5 md:gap-y-4'>
                <div className='space-y-4'>
                  <input
                    {...register("name", { required: true, maxLength: 20 })}
                    style={{ borderColor: color }}
                    className='border  outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Your Name'
                  />
                  <br />
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    })}
                    style={{ borderColor: color }}
                    className='border  outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Your Email'
                  />
                  <br />
                  <input
                    {...register("subject", { required: true, maxLength: 20 })}
                    style={{ borderColor: color }}
                    className='border  outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Subject'
                  />
                </div>
                <div>
                  <textarea
                    style={{ borderColor: color }}
                    className='md:mt-0 mt-3 border outline-none px-3 py-1.5 rounded'
                    cols='23'
                    rows='6'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className='md:mt-3 mt-2'>
                <Button name='Send' style={`bg-[${color}] text-md`} />
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
