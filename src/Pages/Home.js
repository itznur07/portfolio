import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import LoveToDo from "../Components/LoveToDo";
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
        <LoveToDo />
      </div>
    </>
  );
};

export default Home;
