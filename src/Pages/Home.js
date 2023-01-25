import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import MySkill from "../Components/MySkill";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Banner />
        <About />
        <MySkill />
      </div>
    </>
  );
};

export default Home;
