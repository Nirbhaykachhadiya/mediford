import React from "react";
import { useParams } from "react-router-dom";
import P1 from "../ProductCategoryPages/P1.jsx";
import pdfFile from "../assets/Mediford Alied 2024.pdf";
import P2 from "../ProductCategoryPages/P2.jsx";
import P3 from "../ProductCategoryPages/P3.jsx";
import P4 from "../ProductCategoryPages/P4.jsx";
import P6 from "../ProductCategoryPages/P6.jsx";
import P5 from "../ProductCategoryPages/P5.jsx";
import P7 from "../ProductCategoryPages/P7.jsx";
import P8 from "../ProductCategoryPages/P8.jsx";

const Jackpot = () => {
  const { id } = useParams(); // Extract the ID from the URL
  console.log(id);
  return (
    <div>
      <div>
        {id === "1" ? <P1 /> : ""}
        {id === "2" ? <P2 /> : ""}
        {id === "3" ? <P3 /> : ""}
        {id === "4" ? <P4 /> : ""}
        {id === "5" ? <P5 /> : ""}
        {id === "6" ? <P6 /> : ""}
        {id === "7" ? <P7 /> : ""}
        {id === "8" ? <P8 /> : ""}
        {id === "9" ? <P9 /> : ""}
        {id === "10" ? <P10 /> : ""}
        {id === "11" ? <P11 /> : ""}
        {id === "12" ? <P12 /> : ""}
        {id === "13" ? <P13 /> : ""}
      </div>
      {/* <div className="flex justify-center items-center h-[200px]">
        <a href={pdfFile} download className="group">
          <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
            <span className="text-lg font-bold group-hover:text-gray-200">
              Download Mediford Brochure
            </span>
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default Jackpot;
