import React from "react";

const ContactSec1 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto py-[5rem]">
      <div className="w-[80%] mx-auto ">
        <div className="text-center ">
          <h1 className="text-8xl">Any questions?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <form action="">
            <input type="name" placeholder="Your name" />
            <input type="number" placeholder="Your telephone number" />
            <input type="text" placeholder="Your question"/>
            <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSec1;
