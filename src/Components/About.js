import React from "react";
import { useSelector } from "react-redux";
import myImg from "../assets/img/person.jpg";
import Button from "./Button";
import MentionButton from "./MentionButton";

const About = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='container mx-auto'>
      <div className='md:flex md:flex-row flex flex-col-reverse items-center justify-around md:mx-24 mx-5 md:gap-y-0 gap-y-10 py-10'>
        {/* div 1 */}
        <div className='space-y-5'>
          <p className='text-md text-[#fff] font-medium leading-loose'>
            Hello, I’m Nur Uddin. a Creative <br /> Frontend Developer. I
            Develop Modern <br /> & Powerful Web Applications & Mobile <br />{" "}
            Application using Javascript Frontend Framework{" "}
          </p>
          <div className='flex space-x-5'>
            <Button name='Get resume' cstyle={`bg-[${color}]`} />
            <Button name='My Skills' cstyle={`border border-[${color}]`} />
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div>
          <img
            className={`rounded-full md:w-64 w-64 border border-[${color}] `}
            src={myImg}
            alt='img'
          />
        </div>
        {/* div 2 */}
        {/* div 3 */}
        <div>
          <MentionButton name='About me' rotate='-180' />
        </div>
        {/* div 3 */}
      </div>
    </div>
  );
};

export default About;
