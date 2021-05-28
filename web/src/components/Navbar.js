import React from "react";
import Vector from "../assets/svg/Vector.svg";

const Navbar = () => {
  return (
    <div className="h-24 w-full flex justify-evenly items-center">
      <p className="text-3xl font-barlow">projects</p>
      <img src={Vector} alt="Vector-left" className="" />
      <p className="text-3xl font-barlow">who am I?</p>
      <img src={Vector} alt="Vector-right" className="" />
      <p className="text-3xl font-barlow">contact</p>
    </div>
  );
};

export default Navbar;
