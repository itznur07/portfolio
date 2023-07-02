import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { useSelector } from "react-redux";

const MentionButton = ({ name }) => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div
      style={{ color: color }}
      className='flex items-center transform md:rotate-90 rotate-0'
    >
      <AiOutlineLine />
      <span className='uppercase bg-[#fff]  border py-2 px-5 rounded-md font-bold'>
        {name}
      </span>
      <AiOutlineLine />{" "}
    </div>
  );
};

export default MentionButton;
