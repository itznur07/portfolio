import React, { useContext } from "react";
import { GiBranchArrow } from "react-icons/gi";
import { ColorContext } from "../context/GlobalState";

const Theme = () => {
  const { color, dispatch } = useContext(ColorContext);

  return (
    <>
      <div className='container mx-auto md:flex-none flex md:justify-start justify-center'>
        <div className='md:space-y-5 md:space-x-0 md:flex md:flex-col items-center absolute md:top-80 md:right-0 md:mx-24 flex top-48  space-x-6   cursor-pointer'>
          <div className='md:rotate-45 -rotate-45'>
            <span style={{ color: color }} className='text-3xl'>
              <GiBranchArrow />
            </span>
          </div>
          <div
            onClick={() => {
              dispatch({ type: "change_color", value: "#FFE715" });
            }}
            className='w-5 h-5 rounded-full bg-[#FFE715] animate-pulse'
          ></div>
          <div
            onClick={() => {
              dispatch({ type: "change_color", value: "#FF69B3" });
            }}
            className='w-5 h-5 rounded-full bg-[#FF69B3] animate-pulse'
          ></div>
          <div
            onClick={() => {
              dispatch({ type: "change_color", value: "#8CD7FE" });
            }}
            className='w-5 h-5 rounded-full bg-[#8CD7FE] animate-pulse'
          ></div>
          <div
            onClick={() => {
              dispatch({ type: "change_color", value: "#d902ee" });
            }}
            className='w-5 h-5 rounded-full bg-[#d902ee] animate-pulse'
          ></div>
          <div
            onClick={() => {
              dispatch({ type: "change_color", value: "#d71b3b" });
            }}
            className='w-5 h-5 rounded-full bg-[#d71b3b] animate-pulse'
          ></div>
        </div>
      </div>
    </>
  );
};

export default Theme;
