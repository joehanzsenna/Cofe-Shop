import React from "react";
import HomeSec1 from "../HomeComponents/HomeSec1";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import HomeSec2 from "../HomeComponents/HomeSec2";
import HomeSec3 from "../HomeComponents/HomeSec3";
import HomeSec4 from "../HomeComponents/HomeSec4";
import AboutusIndex from "../../AboutUs/AboutusIndex/AboutusIndex";

const HomeIndex = () => {
  return (
    <div>
      <Navbar/>
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3/>
      <HomeSec4/>
      <AboutusIndex/>
      <Footer/>
    </div>
  );
};

export default HomeIndex;
