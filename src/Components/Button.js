import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name, cstyle }) => {
  const { color } = useSelector((state) => state.datas);

  return (
    <div>
      <button
        style={{ borderColor: color }}
        className={`text-[#fff] md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md ${cstyle}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
