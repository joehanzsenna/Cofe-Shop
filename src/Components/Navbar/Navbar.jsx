import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiMenu5Fill } from "react-icons/ri";
import './Navbar.scss'

const Navbar = () => {
  const [show, setShow] = useState("menuLi");

  const toggleMenu = () => {
      if (show === "menuLi") {
        setShow("menuLiActive menuLi");
        console.log('active')
      } else {
        setShow("menuLi");
        console.log("inActive");
      }
  }
const styles = { ulStyle: "lg:flex gap-16 text-white text-xl" };

  return (
    <div className="w-full bg-transparent py-[4rem] absolute top-0 left-1/2 translate-x-[-50%] max-w-[1440px] mx-auto z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h1 className="text-white hover:text-gray-300 text-4xl font-medium">
          <Link to="/">CofeShop</Link>
        </h1>
        <ul className={`${styles.ulStyle} ${show}`}>
          <Link to="gallery">
            <li className="hover:text-[#ffa41c]">Gallery</li>
          </Link>
          <Link>
            <li className="hover:text-[#ffa41c]">Prices for services</li>
          </Link>
          <HashLink to="#aboutUs">
            <li className="hover:text-[#ffa41c]">About Us</li>
          </HashLink>
          <HashLink to="#contact">
            <li className="hover:text-[#ffa41c]">Contact</li>
          </HashLink>
        </ul>
        <div className="  lg:hidden">
          <RiMenu5Fill
            onClick={toggleMenu}
            className="text-[3rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
