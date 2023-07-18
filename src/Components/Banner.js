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
  // const { color } = useSelector((state) => state.datas);

  return (
    <div className='max-w-6xl mx-auto my-10'>
      {/* hero1 here */}
      <div className='grid grid-cols-12 gap-5'>
        <div className='md:col-span-6 col-span-12'>
          <ProfileCard></ProfileCard>
        </div>
        <div className='md:col-span-6 col-span-12'>
          <div className='col-span-6'>
            <MarqueeCard></MarqueeCard>
          </div>
          <div className='grid grid-cols-6 mt-5 gap-x-5 '>
            <div className='col-span-3'>
              <CredenticalCard></CredenticalCard>
            </div>
            <div className='col-span-3'>
              <Showcase></Showcase>
            </div>
          </div>
        </div>
      </div>
      {/* hero1 ends here */}
      {/* hero2 here */}
      <div className='grid grid-cols-12 gap-5 mt-5'>
        <div className='col-span-3'>
          <SocialProfile></SocialProfile>
        </div>
        <div className='col-span-6'>
          <Specialization></Specialization>
        </div>
        <div className='col-span-3'>
          <BlogCard></BlogCard>
        </div>
      </div>
      {/* hero2 ends here */}

      {/* hero3 here */}
      <div className='grid grid-cols-12 mt-5 gap-5'>
        <div className='col-span-6'>
          <WorkTogether></WorkTogether>
          <Greeting></Greeting>
        </div>
        <div className='col-span-6'>
          <PolarAreaChart></PolarAreaChart>
        </div>
      </div>
      {/* hero3 ends here */}
    </div>
  );
};

export default Banner;
