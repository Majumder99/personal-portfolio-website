/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="border-2 col-span-6 flex flex-col justify-center">
          <h1>
            Hi, I am Sourav Majumder, Full stack developer and Blockchain
            Developer,
          </h1>
          <p>
            I have profound knowledge in full-stack web development, app
            development and also a Blockchain developer
          </p>
          <div className="flex items-center gap-6">
            <div className="px-6 py-3 bg-yellow-500 text-white cursor-pointer">
              Hire Me
            </div>
            <div className="px-6 py-3 bg-yellow-500 text-white cursor-pointer">
              Download CV
            </div>
          </div>
        </div>
        <div className="border-2 col-span-6 flex justify-end">
          <div className="bg-yellow-500 w-[400px] h-[400px] rounded-full">
            <img
              src="/images/Mine1.png"
              alt=""
              className="w-[400px] h-[400px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
