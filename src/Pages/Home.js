import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Banner />
        <About />
      </div>
    </>
  );
};

export default Home;
