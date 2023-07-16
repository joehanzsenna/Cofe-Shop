import React from "react";

const ContactSec1 = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto py-[11rem]">
      <div className="w-[85%] md:w-[65%] mx-auto ">
        <div className="text-center ">
          <h1 className="text-3xl md:text-5xl lg:text-8xl mb-5 md:mb-6 lg:mb-12 font-serif font-medium">
            ANY QUESTIONS?
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <form
          action=""
          className="mt-16 mx-auto w-[80%] lg:w-[65%] flex flex-col gap-10"
        >
          <input
            type="name"
            placeholder="Your name"
            className="bg-transparent border-4 border-gray-500 text-xl md:text-3xl py-4 px-8 font-medium"
          />
          <input
            type="number"
            placeholder="Your telephone number"
            className="bg-transparent border-4 border-gray-500 text-xl md:text-3xl py-4 px-8 font-medium"
          />
          <textarea
            type="text"
            placeholder="Your question"
            className="bg-transparent h-[15rem] border-4 border-gray-500 text-xl md:text-3xl py-3 px-8 font-medium"
          ></textarea>
          <button className=" py-3 px-10 w-[13rem] font-medium mx-auto text-xl md:text-3xl bg-[#FF6D1C]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSec1;
