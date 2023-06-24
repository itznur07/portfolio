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
            <MentionButton name='Projects' />
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
                img='https://scontent.xx.fbcdn.net/v/t1.15752-9/355941904_145436225172332_6662452190459162229_n.png?stp=dst-png_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFC93DYIMVlMx6PCzPivTKdXGuNeGVPIpJca414ZU8ikka15AWIB8UomsYZAAX6OJQV-H7oswP73GRPai632uR9&_nc_ohc=dAE04hm6YTMAX8tedOf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRT2dOm7sdy6jD8ZmOAIBOvNhcYYpAH5S6bWvXu-vmv7A&oe=64BE0B29'
                name='Edoofy'
                describe='Online Educational Platform Using MERN Stack.'
                tags={["React", "Expressjs", "MongoDB"]}
                repolink='https://github.com/itznur07/edoofy-client'
                livelink='https://edoofy-13bd9.web.app/'
              />
              <Card
                img='https://scontent.xx.fbcdn.net/v/t1.15752-9/356036180_259219850045930_6738716822988796238_n.png?stp=dst-png_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH95svAmE5FVWEapwmA3UgPJxjY12Nm0H8nGNjXY2bQf1LiiEugO92Ywla6DXi6V9Oh6R7tHoxYgNBDBxZZAL6S&_nc_ohc=6nF0ymMrRpcAX-SDUp3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTQ9Z96MyVUqG3LKsDs0T3-3wgl2avaXItZ9CVzoaK0RA&oe=64BE286E'
                name='Bistro'
                describe='Restaurant Website Using MERN Stack'
                tags={["React", "Express.js", "MongoDB"]}
                repolink='https://github.com/itznur07/bistro-resturent-client'
                livelink='https://bistro-boss-auth-db7f4.web.app/'
              />
              <Card
                img='https://scontent.xx.fbcdn.net/v/t1.15752-9/353890756_1510579176141046_5939846327529939771_n.png?stp=dst-png_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFpRrNsQWWeAt4q7uaeCEEmDcodvbh2rtYNyh29uHau1qaHdJeXDuTw9uTfBhho2R03KdV3aOBepatWlQ-1tH36&_nc_ohc=vn6_yQ0UEq8AX9-7uT7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSmIqRfPwi4MfFF6i1EIrCx12vEB9Xp-eLtONGWJ0caag&oe=64BE1AA2'
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
      className='md:w-80 w-80 h-auto py-5 bg-[#fff] rounded md:flex items-center justify-center cursor-pointer group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  duration-200 border border-opacity-30 '
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
