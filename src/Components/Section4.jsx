import React from "react";
import woman from "../Assets/woman.png";
import buy from "../Assets/bg-greeen.png";
import timeline from "../Assets/timeline.png";
import location from "../Assets/location.png";
import pro from "../Assets/pro.png";
import { CiLocationOn } from "react-icons/ci";

const Section4 = () => {
  return (
    <div className="bg-white py-[110px] h-full px-[100px]">
      <div className="flex flex-row-reverse items-center gap-[100px]  justify-between">
        <div className="h-full pt-5 flex flex-col gap-7">
          <h1 className="font-bold leading-[55px] text-[40px]">
            Start Earning Through Shopping.
          </h1>
          <p className="w-[574px] text-[18px] font-medium">
            Market Assist connects users with experienced locals and industry
            professionals, providing personalized advice and insights that help
            users navigate the market landscape effectively.
          </p>

          <div className="flex flex-col text-left gap-6">
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={pro} alt="" />
              <p className="text-[14px]">
                Effortlessly delegate shopping tasks.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn size={30} className="text-[#4FBF2B]" />
              <p className="text-[14px]">Guaranteed freshness and selection.</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[30px]" src={timeline} alt="" />
              <p className="text-[14px]">Timely arrival, every order.</p>
            </div>
          </div>

          <div>
            <button className="bg-[#46BC1C] h-[52px] w-[240px] text-[20px] text-white font-medium rounded-[30px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="">
          <img className="" src={buy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
