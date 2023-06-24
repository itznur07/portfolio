import React from "react";
import { useSelector } from "react-redux";
// import myImg from "../assets/img/person.jpg";
import Button from "./Button";
import MentionButton from "./MentionButton";

const myImg =
  "https://media.licdn.com/dms/image/D5603AQHjuRe_LH0uNQ/profile-displayphoto-shrink_400_400/0/1687440592973?e=1692835200&v=beta&t=ejS6DOXzteVPd36W7Q9q_0ep24pgRvN10r_wz5XjnlY";

const About = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='container mx-auto'>
      <div className='md:flex md:flex-row flex flex-col-reverse items-center justify-around md:mx-24 mx-5 md:gap-y-0 gap-y-10 py-10'>
        {/* div 1 */}
        <div className='space-y-5'>
          <p className='text-md text-[#1d293a] font-medium leading-loose'>
            Hi, I’m Nur Uddin. a MERN Stack Developer. <br /> with a passion for
            creating dynamic and user-friendly web applications. <br /> I enjoy
            learning new skills <br /> and exploring new challenges in the field
            of web development. <br /> I’m always open to new opportunities and
            collaborations.
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
