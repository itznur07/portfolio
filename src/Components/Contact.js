import React from "react";
import Button from "./Button";

// import icons
import MentionButton from "./MentionButton";

const Contact = () => {
  return (
    <>
      <div className='cotainer mx-auto'>
        <div className='md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='space-y-4 md:mt-0 mt-5'>
            <div className='md:space-y-2'>
              <h1 className='text-xl text-[#0eb761] font-bold'>Email</h1>
              <p className='text-[#ddd] text-md'>nuruddinalways99@gmail.com</p>
            </div>
            <div className='md:space-y-2'>
              <h1 className='text-xl text-[#0eb761] font-bold'>Linkedin</h1>
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
              <h1 className='text-xl text-[#0eb761] font-bold'>Address</h1>
              <p className='text-[#ddd] text-md'>Chittagong, Bangladesh</p>
            </div>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10'>
            <form>
              <div className='md:flex items-center md:gap-x-5 md:gap-y-4'>
                <div className='space-y-4'>
                  <input
                    className='border border-[#0eb761] outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Your Name'
                  />
                  <br />
                  <input
                    className='border border-[#0eb761] outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Your Email'
                  />
                  <br />
                  <input
                    className='border border-[#0eb761] outline-none px-3 py-2 rounded'
                    type='text'
                    placeholder='Subject'
                  />
                </div>
                <div>
                  <textarea
                    className='md:mt-0 mt-3 border border-[#0eb761] outline-none px-3 py-1.5 rounded'
                    cols='23'
                    rows='6'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className="md:mt-3 mt-2">
                <Button name='Send' style={`bg-[#0eb761] text-md`} />
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
