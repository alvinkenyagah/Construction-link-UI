import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextButton from "./TextButton";
import { logo } from '../assets';

const Hero = () => {
  return (
    <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
      <p className="p-2 font-bold uppercase text-emerald-400">
        Build with Construction link
      </p>
      <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
          Build with confidence.
      </h1>
      <div className="mt-4 flex text-xl font-bold sm:text-3xl md:text-4xl">
        <p className="mr-2 md:mr-3">Fast, flexible, financing for</p>
        <Typewriter
          words={["Contracting", "Surveying", "Building"]}
          loop={0}
          cursor={1}
          typeSpeed={120}
        />
      </div>
      <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
        Contract industry certified building engineers today.
      </p>
      <TextButton text="Get started" type="secondary" />
    </div>
  );
};

export default Hero;
