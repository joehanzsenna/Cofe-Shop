import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BaseLayout = (props) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto ">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
