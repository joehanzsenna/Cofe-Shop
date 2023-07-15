import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent py-[4rem] absolute top-0 left-1/2 translate-x-[-50%] max-w-[1440px] mx-auto z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-medium">CofeShop</h1>
        <ul className="flex gap-16 text-white text-xl ">
          <Link>
            <li>Gallery</li>
          </Link>
          <Link>
            <li>Prices for services</li>
          </Link>
          <Link>
            <li>ABout Us</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
