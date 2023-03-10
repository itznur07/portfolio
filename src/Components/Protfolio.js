import React from "react";

// import icons
import { SiGithub } from "react-icons/si";
import { VscLiveShare } from "react-icons/vsc";
import Button from "./Button";
import MentionButton from "./MentionButton";

// img
import { useSelector } from "react-redux";

const Protfolio = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <>
      <div className='cotainer mx-auto items-center md:flex-none flex justify-center'>
        <div className='md:flex items-center md:justify-between justify-center md:gap-x-10 md:mx-24 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:ml-0 ml-10'>
            <MentionButton name='Portfolio' />
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:space-y-10 md:mt-0 mt-7 md:ml-0  ml-4'>
            {/* skill navbar */}
            <div className='flex md:gap-x-10 gap-x-3 md:ml-0 ml-16'>
              <Button name='Projects' cstyle={`border border-[${color}]`} />
              <a
                href='https://github.com/itznur07'
                target={"_blank"}
                rel='noreferrer'
              >
                <Button
                  name='More Projects'
                  cstyle={`border border-[${color}]`}
                />
              </a>
            </div>
            {/* skill card */}
            <div className='md:flex flex-wrap items-center md:gap-x-10 gap-y-10 md:space-y-0 space-y-5 md:mt-0 mt-10'>
              <Card
                name='Developer Portfolio'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["React", "Tailwind", "Npm"]}
                repolink='https://github.com/itznur07/m-design-portfolio'
                livelink='https://m-design-portfolio.vercel.app/'
              />
              <Card
                name='Pixbay'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["React", "scss", "Npm"]}
                repolink='https://github.com/itznur07/Pixabay_Clone_Reactjs_Tailwindcss'
                livelink='https://gracious-wiles-6398e8.netlify.app/'
              />

              <Card
                name='Educy'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["React", "tailwind", "router"]}
                repolink='https://github.com/itznur07/edusy'
                livelink='https://edusy-qkziw5nhb-itznur07.vercel.app/'
              />
              <Card
                name='Gredient io'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["Nextjs", "tailwind", "router"]}
                repolink='https://github.com/itznur07/Gradiena'
                livelink='https://imn81.csb.app/'
              />
              <Card
                name='Text Reader'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["Reactjs", "scss", "api"]}
                repolink='https://github.com/itznur07/react-text-reader-assisten-app'
                livelink='https://pensive-mirzakhani-e7a89b.netlify.app/'
              />
              <Card
                name='Weather Application'
                describe='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga perspiciatis magni error ipsum ducimus.'
                tags={["Reactjs", "css", "api"]}
                repolink='https://github.com/itznur07/reactjs-weather-apps'
                livelink='https://keen-thompson-ada8e8.netlify.app/'
              />
            </div>
          </div>
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

/**
 *
 * @param {*} param0
 * @returns
 */
const Card = ({ name, describe, tags, repolink, livelink }) => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div
      style={{ borderColor: color }}
      className='md:w-80 w-72 h-auto py-5 bg-[#1d293a] rounded md:flex items-center justify-center cursor-pointer hover:bg-white group transition ease-linear duration-200 border border-opacity-30'
    >
      <div className='flex flex-col items-center gap-y-5'>
        <h1
          style={{ color: color }}
          className='text-2xl  group-hover:text-black font-semibold'
        >
          {name}
        </h1>
        <p className='text-center text-sm text-[#ddd] group-hover:text-black'>
          {describe}
        </p>
        <span
          style={{ color: color }}
          className='flex text-xl group-hover:text-black  space-x-5'
        >
          <a href={repolink} target='_blank' rel='noreferrer'>
            <SiGithub />
          </a>
          <a href={livelink} target='_blank' rel='noreferrer'>
            <VscLiveShare />
          </a>
        </span>
        <div className='text-center flex items-center space-x-5 mt-2'>
          {tags.map((item, i) => (
            <span
              key={i}
              className={`bg-[${color}] px-3 py-1 rounded-md text-white`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
