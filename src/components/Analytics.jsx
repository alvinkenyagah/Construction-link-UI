import React from "react";
import Laptop from "../assets/laptop.jpg";
import TextButton from "./TextButton";
import { construction } from "../assets";
const Analytics = () => {
  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={construction} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">
            Operations dashboard
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Manage Operations and get Data Analytics Centrally
          </h1>
          <p className="mt-2 text-black">

          Take control of your construction workflow and unlock powerful insights 
          centrally! Our system empowers you to manage operations seamlessly, from project planning to execution,
          all while harnessing the power of centralized data analytics. Gain real-time visibility into your projects,
          optimize resource allocation, make data-driven decisions, and boost efficiency – all from a single, unified platform.
          </p>
          <div className="self-center">
            <TextButton text="Get started" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
