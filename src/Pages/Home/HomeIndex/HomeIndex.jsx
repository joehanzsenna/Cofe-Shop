import React from "react";
import HomeSec1 from "../HomeComponents/HomeSec1";
import HomeSec2 from "../HomeComponents/HomeSec2";
import HomeSec3 from "../HomeComponents/HomeSec3";
import HomeSec4 from "../HomeComponents/HomeSec4";
import AboutusIndex from "../../AboutUs/AboutusIndex/AboutusIndex";
import ContactIndex from "../../Contact/ContactIndex/ContactIndex";
import BaseLayout from "../../../Components/Layout/BaseLayout";

const HomeIndex = () => {
  return (
    <div>
      <BaseLayout>
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3 />
        <HomeSec4 />
        <AboutusIndex />
        <ContactIndex />
      </BaseLayout>
    </div>
  );
};

export default HomeIndex;
