import React from "react";

const BaseLayout = (props) => {
  return <div>
    <div>{props.children}</div>
  </div>;
};

export default BaseLayout;
