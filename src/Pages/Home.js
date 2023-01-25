import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import LoveToDo from "../Components/LoveToDo";
import MySkill from "../Components/MySkill";
import Navbar from "../Components/Navbar";
import Protfolio from "../Components/Protfolio";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Banner />
        <About />
        <MySkill />
        <LoveToDo />
        <Protfolio />
        <Contact />
      </div>
    </>
  );
};

export default Home;
