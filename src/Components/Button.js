import React, { useContext } from 'react';
import { ColorContext } from "../context/GlobalState";

const Button = ({name, cstyle}) => {
  const { color} = useContext(ColorContext);

  return (
    <div>
        <button style={{borderColor:color}} className={`text-[#fff] md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md ${cstyle}`}>{name}</button>
    </div>
  )
}

export default Button