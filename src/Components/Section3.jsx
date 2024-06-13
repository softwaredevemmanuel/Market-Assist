import React from "react";
import woman from "../Assets/woman.png";
const Section3 = () => {
  return (
    <div className="bg-white py-[110px] px-[100px]">
      <div className="flex items-center justify-between">
        <div className="h-[250px] flex flex-col gap-8">
          <h1 className="font-bold leading-[55px] text-[40px]">We shop, you relax</h1>
          <p className="w-[574px] text-[18px] font-medium">
            The platform is designed to cater to the unique needs of each user,
            ensuring that the guidance and recommendations provided are relevant
            and specifically suited to individual goals and situations.
          </p>

          <button className="bg-[#002100] h-[52px] w-[240px] text-[20px] text-white font-medium rounded-[30px]">
              Get Started
            </button>
        </div>
        <div>
          <img src={woman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
