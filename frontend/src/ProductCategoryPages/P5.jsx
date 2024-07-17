import React from "react";
import one from "../assets/Products/05 Infusion syringe pump/IP 200.png";
import two from "../assets/Products/05 Infusion syringe pump/Sp200.png";
import pdfFile from "../assets/PDF/sp200.pdf";

const P5 = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-6 sm:gap-3">
        <div className="747 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={one} className="w-[350px] h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu ">IP 200</div>
              <div className="text-[#666666] sm:h-[300px]">
                Screen 3.5 inches TFT monochrome/Color (Optional) touch screen
                <br />
                Keypad 9 Function keys with navigation
                <br />
                Operating Modes Rate Mode, Time Mode, Dose Rate Mode
                <br />
                Optional- Loading Dose, Trapezia, Sequence and
                <br />
                Interrupt Mode
                <br />
                Flow Rate Range 0.10–1500 ml/h / 0.10–2000ml/h (Optional)
                <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download IP 200 PDF
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="757 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={two} className="w-[350px] h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px]  font-icu">SP 200</div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                Screen 3.5 inches TFT monochrome/Color (Optional) touch screen
                <br />
                Keypad 9 Function keys with navigation
                <br />
                Syringe Modes Rate Mode, Volume-Time, Dose Rate
                <br />
                Optional- Loading Dose, Trapezia, Sequence and
                <br />
                Intermittent Mode
                <br />
                Others - Relay Mode (Optional)
                <br />
                Flow Rate Range 5/6ml syringe: 0.10–150.0ml/h
                <br />
                10ml syringe: 0.10–300.0ml/h
                <br />
                20ml syringe: 0.10–600.0ml/h
                <br />
                30ml syringe: 0.10–800.0ml/h
                <br />
                50/60ml syringe: 0.10–1500.0ml/h
                <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download SP 200 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P5;
