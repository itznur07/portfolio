import React from "react";
import { useSelector } from "react-redux";
// import myImg from "../assets/img/person.jpg";
import Button from "./Button";
import MentionButton from "./MentionButton";

const myImg = "https://avatars.githubusercontent.com/u/76656507?v=4";

const About = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='max-w-7xl mx-auto md:h-96 h-auto  md:mb-0 my-28'>
      <div className='md:flex md:flex-row flex flex-col-reverse items-center justify-around md:mx-0 mx-5 md:gap-y-0 gap-y-10'>
        {/* div 1 */}
        <div className='space-y-5 md:text-start text-center'>
          <p className='text-md text-[#1d293a] font-medium leading-loose'>
            Hi, I’m Nur Uddin. a MERN Stack Developer. <br /> with a passion for
            creating dynamic and user-friendly web applications. <br /> I enjoy
            learning new skills <br /> and exploring new challenges in the field
            of web development. <br /> I’m always open to new opportunities and
            collaborations.
          </p>
          <div className='flex md:justify-start justify-center space-x-5'>
            <Button name='Get resume' cstyle={`bg-[${color}] `} />
            <Button name='My Skills' cstyle={`border border-[${color}]`} />
          </div>
        </div>
        {/* div 1 */}
        {/* div 2 */}
        <div>
          <img
            className={`rounded-full md:w-64 w-64  `}
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
