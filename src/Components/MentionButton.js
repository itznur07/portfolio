import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { useSelector } from "react-redux";

const MentionButton = ({ name }) => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div
      style={{ color: color }}
      className='flex items-center gap-y-2 md:-rotate-90 text-xl  font-medium'
    >
      <AiOutlineLine />
      <span className='uppercase bg-[#1d293a] py-2 px-5 rounded-md font-bold'>
        {name}
      </span>
      <AiOutlineLine />{" "}
    </div>
  );
};

export default MentionButton;
