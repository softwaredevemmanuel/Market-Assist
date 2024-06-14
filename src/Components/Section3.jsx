import React from "react";
import woman from "../Assets/woman.png";
import basket from "../Assets/basket.png"
import hq from "../Assets/hq.png"
import bus from "../Assets/bus.png"
import time from "../Assets/time.png"
const Section3 = () => {
  return (
    <div className="bg-white py-[110px] h-full px-[100px]">
      <div className="flex items-center   justify-between">
        <div className="h-full pt-5 flex flex-col gap-10">
          <h1 className="font-bold leading-[55px] text-[40px]">We shop, you relax</h1>
          <p className="w-[574px] text-[18px] font-medium">
            The platform is designed to cater to the unique needs of each user,
            ensuring that the guidance and recommendations provided are relevant
            and specifically suited to individual goals and situations.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <img className="w-[30px]" src={basket} alt="" />
                <p className="text-[14px]">Effortlessly delegate shopping tasks.</p>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-[30px]" src={hq} alt="" />
                <p className="text-[14px]">Guaranteed freshness and selection.</p>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-[30px]" src={bus} alt="" />
                <p className="text-[14px]">Timely arrival, every order.</p>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-[30px]" src={time} alt="" />
                <p className="text-[14px]">Skip the store queues.</p>
            </div>
           
          </div>

         <div>
         <button className="bg-[#46BC1C] h-[52px] w-[240px] text-[20px] text-white font-medium rounded-[30px]">
              Get Started
            </button>
         </div>
        </div>
       
        <div>
          <img src={woman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
