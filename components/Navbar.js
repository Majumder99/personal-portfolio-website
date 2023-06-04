/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 flex items-center gap-2">
          <img
            src="/images/Mine.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <span className="font-bold text-[30px]">SOURAV MAJUMDER</span>
        </div>
        <div className="col-span-8 flex text-[18px] justify-end py-5 gap-12">
          <a
            href="#home"
            className="pb-1 hover:border-b-2 transition duration-500 ease-linear"
          >
            Home
          </a>
          <a
            href="#skills"
            className="pb-1 hover:border-b-2 transition duration-500 ease-linear"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="pb-1 hover:border-b-2 transition duration-500 ease-linear"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="pb-1 hover:border-b-2 transition duration-500 ease-linear"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="pb-1 hover:border-b-2 transition duration-500 ease-linear"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
