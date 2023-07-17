import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";

const Banner = () => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div className='max-w-6xl mx-auto my-10'>
      {/* hero1 here */}
      <div className='grid grid-cols-12 gap-10'>
        <div className='md:col-span-6 col-span-12'>
          <ProfileCard></ProfileCard>
        </div>
        <div className='md:col-span-6 col-span-12'>right section</div>
      </div>
      {/* hero2 ends here */}
    </div>
  );
};

export default Banner;
