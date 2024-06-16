import React from "react";
import woman from "../Assets/woman.png";
import buy from "../Assets/bg-greeen.png";
import timeline from "../Assets/Group 50.png";
import location from "../Assets/Group 76.png";
import pro from "../Assets/Group (1).png";
import man from "../Assets/man.png";
import vector from "../Assets/Group 75.png";
import { CiLocationOn } from "react-icons/ci";

const Section5 = () => {
  return (
    <div className="bg-white py-[110px] h-full px-[100px]">
      <div className="flex items-center gap-[100px]  justify-between">
        <div className="h-full pt-5 flex flex-col gap-7">
          <h1 className="font-bold leading-[55px] text-[40px]">
            The innovative and <br /> effortless way to shop
          </h1>
          <p className="w-[574px] text-[18px] font-medium">
            By offering access to real-time data and expert analysis, Market
            Assist empowers users to make well-informed decisions, reducing
            uncertainty and enhancing confidence in their market activities.
          </p>

          <div className="flex flex-col text-left gap-6">
            <div className="flex items-center gap-2">
              <img src={vector} className="w-[30px]" alt="" />
              <p className="text-[14px]">Real-Time Data Access</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={timeline} alt="" />
              <p className="text-[14px]">Reduced Uncertainty</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={location} alt="" />
              <p className="text-[14px]">Expert Analysis</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={pro} alt="" />
              <p className="text-[14px]">Enhanced Confidence</p>
            </div>
          </div>

          <div>
            <button className="bg-[#46BC1C] h-[52px] w-[240px] text-[20px] text-white font-medium rounded-[30px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="">
          <img className="" src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
