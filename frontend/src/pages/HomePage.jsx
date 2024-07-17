import React, { useRef, useEffect, useState } from "react";
 import banner from "../assets/utills/banner.jpg";
import NICU from "../assets/utills/NICU.png";
import ModularOT from "../assets/utills/ModularOT.png";
import ICU from "../assets/utills/ICU.png";
import Products from "../Elements/Products";

const HomePage = () => {
  
  return (
    <div className="mt-[60px]  bg-[#F2F2F2] pb-10">
      <img src={banner} className="sm:h-[650px] sm:w-screen object-cover" />
      <Products />
      <div className="sm:flex sm:justify-center py-5 ">
        <div className="flex justify-center mx-5">
          <div>
            <div className="text-center font-sans font-icu  text-[16px] text-[#000000]">
              NICU Solution
            </div>

            <img
              className="h-[250px] w-[400px]  object-cover mt-5  shadow-lg rounded-md"
              src={NICU}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5 sm:mt-0 mx-5">
          <div>
            <div className="text-center font-sans font-icu text-[16px]  text-[#000000] mt-5 sm:mt-0">
              ModularOT Solution
            </div>{" "}
            <img
              className="h-[250px] w-[400px] mt-5   shadow-lg rounded-md  object-cover "
              src={ModularOT}
            />
          </div>
        </div>
        <div className="flex justify-center  mt-5 sm:mt-0 mx-5 ">
          <div>
            <div className="text-center font-sans font-icu text-[16px] text-[#000000] mt-5 sm:mt-0">
              ICU Solution
            </div>{" "}
            <img
              className="h-[250px] w-[400px]  mt-5  shadow-lg rounded-md  object-cover "
              src={ICU}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
