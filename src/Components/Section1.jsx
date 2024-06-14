import React, { useState } from "react";
import logo from "../Assets/Full Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Section1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 bg-white backdrop-blur-[4px] bg-opacity-10 right-0 z-50 left-0">
        {/* ---- navbar ---- */}
        <nav className="py-7 h-[110px] border-b-[1px] border-[#E8F7E2] px-[20px] items-center lg:px-[70px] xl:px-[100px] justify-between flex">
          <div className="flex gap-[170px] items-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes size={25} className="text-[#46BC1C]" />
            ) : (
              <GiHamburgerMenu size={25} className="text-[#46BC1C]" />
            )}
          </div>
          <div className="lg:flex hidden gap-[90px] items-center">
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
        {/* Mobile Menu */}
        {open && (
           <div
           className={`lg:hidden flex flex-col items-center bg-white backdrop-blur-[8px] bg-opacity-10 w-full py-5 transition-all  duration-500  ${
             open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
           }`}>
           
            <ul className="flex flex-col text-[26px] text-black  font-semibold gap-[20px] items-center">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li className="text-[26px] font-semibold">Sign in</li>
              <li>
                <button className="w-[185px] text-white text-[18px] font-bold bg-[#45BC1B] h-[52px] rounded-[30px]">
                  Create Account
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section1;
