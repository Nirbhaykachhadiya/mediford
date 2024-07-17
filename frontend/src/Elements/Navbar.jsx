import React, { useState } from "react";
import logo from "../assets/utills/MedifordLogo.png";
import konica from "../assets/utills/konica.png";
import allied from "../assets/utills/allied.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [click ,setClick]=useState(0)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white z-50 shadow-lg fixed top-0 w-screen left-0">
      <div className="max-w-screen mx-auto px-6 lg:px-8 lg:px-10">
        <div className="grid grid-cols-3 items-center  lg:grid-cols-12   h-16">
          <div className="flex items-center lg:justify-center col-span-2 lg:col-span-3">
            <img
              className="h-8 cursor-pointer"
              src={logo}
              alt="MedifordLogo"
              onClick={() => {navigate("/");setClick(0)}}
            />
          </div>
          {/* Desktop navigation */}
          <div
            className="hidden lg:block col-span-5 cursor-pointer"
            
          >
            <div className="flex items-center justify-between px-[50px] ">
            <div
                onClick={() => {navigate("/about");setClick(1)}}
                className={`font-sans leading-[24px]  cursor-pointer  text-[18px] ${click===1?"underline text-[#394681]":""} mx-3 rounded-md text-lg font-nav`}
              >               
                About Us
              </div>

              <div
                onClick={() => {navigate("/products");setClick(2)}}
                className={`font-sans leading-[24px]  cursor-pointer  text-[18px] ${click===2?"underline text-[#394681]":""} mx-3 rounded-md text-lg font-nav`}
              >                Product & Solution
              </div>
              <div
                onClick={() => {navigate("/contact");setClick(3)}}
                className={`font-sans leading-[24px]  cursor-pointer  text-[18px] ${click===3?"underline text-[#394681]":""} mx-3 rounded-md text-lg font-nav`}
              >
                Contact Us
              </div>
            </div>
          </div>

          <div className="hidden lg:block  col-span-4">
            <div className="flex items-center justify-center">
              
              <div className="">
                <img className="h-[64px] w-[150px] " src={konica} alt="konica" />
              </div>
              <div className=" ">
                <img className="h-[60px] w-[150px] " src={allied} alt="allied" />
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden col-span-1 ">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900  hover:text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden font-icu">
          <div className="px-2 pt-2   border-t  border-[#394681] bg-[#E4E4E4]">
            <div
              onClick={() => {navigate("/about"),setIsOpen(!open)}}
              className="font-sans text-[24px] border-b border-gray-50 hover:text-[#394681] hover:underline block px-5 py-3 rounded-md text-base "
            >
              About Us
            </div>
            <div onClick={() => {navigate("/products"),setIsOpen(!open)}} className="font-sans text-[24px] border-b border-gray-50 hover:text-[#394681] hover:underline block px-5 py-3 rounded-md text-base ">
              Product & Solution
            </div>
            <div
              onClick={() => {navigate("/contact"),setIsOpen(!open)}}
              className="font-sans text-[24px] border-b border-gray-50 hover:text-[#394681] hover:underline block px-5 py-3 rounded-md text-base "
            >
              Contact Us
            </div>
          </div>
          <div className="bg-white h-[64px]">
            <div className="flex items-center ml-8">
             
              <div className="">
                <img className="h-[64px] w-[150px] " src={konica} alt="konica" />
              </div>
              <div className=" ">
                <img className="h-[60px] w-[150px]" src={allied} alt="allied" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
