import React from "react";
import logo from "../Assets/Full Logo.png";

const Section1 = () => {
  return (
    <div>
      <div className="fixed top-0 bg-white backdrop-blur-[4px] bg-opacity-10 right-0 z-50 left-0">
        {/* ---- navbar ---- */}
        <nav className="py-7  h-[110px] border-b-[1px] border-[#E8F7E2]   px-[100px] justify-between flex ">
          <div className="flex gap-[170px] items-center">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-[90px] items-center">
            <div className="flex">
              <ul className="flex text-[16px] font-semibold gap-[50px] items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="flex gap-[20px] items-center">
              <p className="text-[16px] font-semibold">Sign in</p>
              <button className="w-[185px] text-white text-[18px] font-bold bg-[#45BC1B] h-[52px] rounded-[30px]">
                Create Account
              </button>
            </div>
          </div>
        </nav>
      </div>

    
    </div>
  );
};

export default Section1;
