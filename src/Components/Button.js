import React from 'react'

const Button = ({name, style}) => {
  return (
    <div>
        <button className={`text-[#fff] md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md ${style}`}>{name}</button>
    </div>
  )
}

export default Button