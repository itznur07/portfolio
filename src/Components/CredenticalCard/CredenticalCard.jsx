import React from "react";
import signImg from "../../assets/sign.png";

const CredenticalCard = () => {
  return (
    <div className='rounded-3xl p-10 bg-gradient-to-r from-[#262626] to-[#171717]'>
      <div>
        <img src={signImg} alt='signature' />
      </div>
      <div>
        <p>More about me</p>
        <p>Credentials</p>
      </div>
    </div>
  );
};

export default CredenticalCard;
