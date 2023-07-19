import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent py-[4rem] absolute top-0 left-1/2 translate-x-[-50%] max-w-[1440px] mx-auto z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-medium">
          <Link to="/">CofeShop</Link>{" "}
        </h1>
        <ul className="hidden lg:visible lg:flex gap-16 text-white text-xl ">
          <Link to="gallery">
            <li>Gallery</li>
          </Link>
          <Link>
            <li>Prices for services</li>
          </Link>
          <HashLink to="#aboutUs">
            <li>ABout Us</li>
          </HashLink>
          <HashLink to='#contact'>
            <li>Contact</li>
          </HashLink>
        </ul>
        <RiMenu5Fill className="text-[3rem] lg:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
