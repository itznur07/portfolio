import React from 'react'

const Button = ({name, style}) => {
  return (
    <div>
        <button className={`text-[#fff] text-md font-medium px-5 py-3 rounded-md ${style}`}>{name}</button>
    </div>
  )
}

export default Button