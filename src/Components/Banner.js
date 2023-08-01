import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import CredenticalCard from "./CredenticalCard/CredenticalCard";
import MarqueeCard from "./MarqueeCard/MarqueeCard";
import PolarAreaChart from "./OptionalSection/OptionalSection";
import ProfileCard from "./ProfileCard/ProfileCard";
import Showcase from "./Showwcase/Showcase";
import SocialProfile from "./SocialProfile/SocialProfile";
import Specialization from "./Specialization/Specialization";
import Greeting from "./WellCome/Greeting";
import WorkTogether from "./WorkTogether/WorkTogether";

const Banner = () => {
  return (
    <>
    
      <div className='max-w-6xl md:mx-auto my-10 mx-2'>
        {/* hero1 here */}
        <div className='grid md:grid-cols-12 grid-cols-1 gap-5'>
          <div className='md:col-span-6 col-span-1'>
            <ProfileCard></ProfileCard>
          </div>
          <div className='md:col-span-6 col-span-1'>
            <div className='md:grid md:grid-cols-6 grid-cols-1 md:mt-0 mt-5 gap-5'>
              <div className='md:col-span-6 col-span-1'>
                <MarqueeCard></MarqueeCard>
              </div>
              <div className='md:col-span-6 col-span-1'>
                <div className='grid md:grid-cols-6 grid-cols-1 mt-5 gap-5'>
                  <div className='md:col-span-3 col-span-1'>
                    <CredenticalCard></CredenticalCard>
                  </div>
                  <div className='md:col-span-3 col-span-1'>
                    <Showcase></Showcase>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero1 ends here */}

        {/* hero2 here */}
        <div className='grid md:grid-cols-12 grid-cols-1 mt-5 gap-5'>
          <div className='md:col-span-3 col-span-1'>
            <SocialProfile></SocialProfile>
          </div>
          <div className='md:col-span-6 col-span-1'>
            <Specialization></Specialization>
          </div>
          <div className='md:col-span-3 col-span-1'>
            <BlogCard></BlogCard>
          </div>
        </div>
        {/* hero2 ends here */}

        {/* hero3 here */}
        <div className='grid md:grid-cols-12 grid-cols-1 mt-5 gap-5'>
          <div className='md:col-span-6 col-span-1'>
            <WorkTogether></WorkTogether>
            <div className='md:col-span-1 col-span-1 md:block hidden'>
              <Greeting></Greeting>
            </div>
          </div>

          <div className='md:col-span-6 col-span-1'>
            <PolarAreaChart></PolarAreaChart>
          </div>
        </div>
        {/* hero3 ends here */}
      </div>
    </>
  );
};

export default Banner;
