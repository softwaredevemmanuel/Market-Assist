import React from "react";
import Section1 from "./Section1";
import sidee from "../Assets/shirt.jpeg";
import playstore from "../Assets/appstore.png";
import googleplay from "../Assets/googleplay.png";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Section2 = () => {
  return (
    <div className="my-[110px] bg-[#F5FBF3]  h-full">
      <div>
        <Section1 />
      </div>

      <div className="flex px-[100px] items-center   justify-between py-[70px]">
        <div className="flex flex-col h-[494px] gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-semibold text-[#6B6D7B]">
              Get Value For Your Money..
            </p>
            <h1 className="font-bold leading-[55px] text-[40px] text-[#002100]">
              Your Personal Guide To <br /> Every Market
            </h1>

            <p className="w-[574px] text-[18px] font-medium text-[#6B6D7B]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sit labore quaerat amet culpa ipsum inventore alias
              minima quibusdam. Alias magni delectus nemo quis nulla sint esse
              cum! Architecto, facilis.
            </p>
          </div>

          <div className="flex gap-10">
            <button className="bg-[#002100] h-[52px] w-[240px] text-[20px] text-white font-medium rounded-[30px]">
              Get Started
            </button>
            <button className="w-[240px] h-[52px] text-[20px] font-medium rounded-[30px] border-[#002100] text-[#002100] border-[1px]">
              Get Started
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[18px] text-[#00210099]">
                Download the MarketAssist App
              </h1>
            </div>
            <div className="flex gap-5  items-center">
              <img src={playstore} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </div>
        </div>

        <div>
          <img className="w-[583px] h-[560px]" src={sidee} alt="" />
        </div>
      </div>

      <div>
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
};

export default Section2;
