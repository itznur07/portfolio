import React from "react";
import { SiGithub } from "react-icons/si";
import { VscLiveShare } from "react-icons/vsc";
import { useSelector } from "react-redux";
import Button from "./Button";
import MentionButton from "./MentionButton";

const Protfolio = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <>
      <div className='container mx-auto items-center md:flex-none flex justify-center'>
        <div className='md:flex items-center md:justify-between justify-center md:gap-x-10 md:mx-24 h-auto mt-20 md:py-0 py-5'>
          {/* div 1 */}
          <div className='md:ml-0 ml-10'>
            <MentionButton name='Portfolio' />
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div className='md:space-y-10 md:mt-0 mt-7 md:ml-0 ml-4'>
            {/* skill navbar */}
            <div className='flex md:gap-x-10 gap-x-3 md:ml-0 ml-16'>
              <Button name='Projects' cstyle={`border border-[${color}]`} />
              <a
                href='https://github.com/itznur07'
                target='_blank'
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
                img='https://deeplor.s3.us-west-2.amazonaws.com/matting_original/2023/06/24/e2a8c28d67a24553bf261181ea9b2733.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230624T013055Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20230624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=7d5353b0467def9f4dcb25ed2aa4f36e2868bad2fc2e580fe8bae03c657e6ec8'
                name='Edoofy'
                describe='Online Educational Platform Using MERN Stack.'
                tags={["React", "Expressjs", "MongoDB"]}
                repolink='https://github.com/itznur07/edoofy-client'
                livelink='https://edoofy-13bd9.web.app/'
              />
              <Card
                img='https://deeplor.s3.us-west-2.amazonaws.com/matting_original/2023/06/24/6082eff2c40940a9bfc5c8021c75115a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230624T013250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20230624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1f72a27d518586d20032abd39ae0f0440687a881439bdfa18d8fa99db8d77456'
                name='Bistro'
                describe='Restaurant Website Using MERN Stack'
                tags={["React", "Express.js", "MongoDB"]}
                repolink='https://github.com/itznur07/bistro-resturent-client'
                livelink='https://bistro-boss-auth-db7f4.web.app/'
              />
              <Card
                img='https://deeplor.s3.us-west-2.amazonaws.com/matting_original/2023/06/24/a31f2fe8e00046919136c7e140c8271b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230624T013409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20230624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=eb0aa665b7b57ffe92c956c9c369376efca608dadb2dca4ad8300535a38ee392'
                name='Magic Playtime'
                describe='Toys Products Types Website Using MERN Stack'
                tags={["React", "Express.js", "MongoDB"]}
                repolink='https://github.com/itznur07/magic-playtime-client'
                livelink='https://magic-playtime.web.app/'
              />
            </div>
          </div>
          {/* div 2 */}
        </div>
      </div>
    </>
  );
};

const Card = ({ img, name, describe, tags, repolink, livelink }) => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div
      style={{ borderColor: color }}
      className='md:w-80 w-80 h-auto py-5 bg-[#fff] rounded md:flex items-center justify-center cursor-pointer group transition ease-linear duration-200 border border-opacity-30'
    >
      <div className='flex flex-col items-center gap-y-5'>
        <div
          className='relative h-40 w-full overflow-hidden'
          style={{
            transformOrigin: "top",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scaleY(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scaleY(1)";
          }}
        >
          <img
            src={img}
            alt={name}
            className='object-cover h-full w-full transition duration-300 ease-in-out transform hover:scale-y-125'
          />
        </div>
        <h1
          style={{ color: color }}
          className='text-2xl group-hover:text-[#1d293a] font-semibold'
        >
          {name}
        </h1>
        <p className='text-center text-sm text-[#1d293a] group-hover:text-[#1d293a]'>
          {describe}
        </p>
        <span
          style={{ color: color }}
          className='flex text-xl group-hover:text-[#1d293a] space-x-5'
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
              className='px-3 py-1 rounded-md text-[#1d293a] bg-[#f0f4f8]'
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
