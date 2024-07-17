import React from "react";
import { useParams } from "react-router-dom";
import P1 from "../ProductCategoryPages/P1.jsx";
import pdfFile from "../assets/Mediford Alied 2024.pdf"

const Jackpot = () => {
  const { id } = useParams(); // Extract the ID from the URL
  console.log(id);
  return (
    <div>
      <div>
        {id === "1" ? (
          <>
            <div>{console.log("3")}</div>
            <P1 />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center items-center h-[200px]">
        <a href={pdfFile} download className="group">
          <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
            <span className="text-lg font-bold group-hover:text-gray-200">
              Download Mediford Brochure
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Jackpot;
