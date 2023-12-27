import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Banner from "../../Components/Banner";
import avater from "../../assets/person.png";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <FloatingWhatsApp
          accountName='+8801310765287'
          allowClickAway={true}
          avatar={avater}
        />
      </div>
    </>
  );
};

export default Home;
