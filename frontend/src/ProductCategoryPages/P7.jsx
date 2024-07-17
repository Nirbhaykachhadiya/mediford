import React from "react";
import one from "../assets/Products/07 Respiratory Support Device/vista.png";
import two from "../assets/Products/07 Respiratory Support Device/m1100.png";
import three from "../assets/Products/07 Respiratory Support Device/m1700.png";
import four from "../assets/Products/07 Respiratory Support Device/HFT.png";
import pdfFile from "../assets/PDF/sp200.pdf";
import pdfFile1 from "../assets/PDF/sp200.pdf";
import pdfFile2 from "../assets/PDF/sp200.pdf";
import pdfFile3 from "../assets/PDF/sp200.pdf";

const P7 = () => {
  return (
    <div className="">
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-6 sm:gap-3">
        <div className="747 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={one} className="w-[350px] h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu ">
                Neonatal to Adult Ventilator
                <br /> Allied Meditec Vista
              </div>
              <div className="text-[#666666] sm:h-[300px]">
                • 15" Iarge touch screen display
                <br />
                • Invasive & Non- Invasive ventilation
                <br />
                • Suitable for Adult to neonate patients
                <br />
                • Modes- PACV, PSIMV, VACV, VSIMV, Spont,
                <br />
                Apnea, PRVC, Bi-level, AwPRV, Auto Vent,
                <br />
                TCPL-SIMV, PRVC SIMV, CPR, O2 stream
                <br />
                • SHFV, DHFV (optional)
                <br />
                • CO2 & SpO2 monitoring (optional)
                <br />
                • Medical air compressor (optional)
                <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download Allied Meditec Vista PDF
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
              <div className="py-3 text-sans text-[18px]  font-icu">
                VENTILATOR <br />
                ALLIED MEDITEC 1700{" "}
              </div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                Electronically driven ICU ventilator <br />
                Modes- PACV, PSIMV, VACV, VSIMV, AUTO
                <br />
                (Emergency Quick Smart), Spont+CPAP, PRVC, PRVC+SIMV,O2 Stream
                <br />
                Upgradable to Spo2, Etco2, and ABIPAP+
                <br />
                Optional – 12.1” TFT graphical display unit
                <br />
                Trends and loops display
                <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile1} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download ALLIED MEDITEC 1700 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-6 sm:gap-3">
        <div className="747 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={three} className="w-[350px] h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu ">
                Portable Ventilator
                <br />
                ALLIED MEDITEC 1100
              </div>
              <div className="text-[#666666] sm:h-[300px]">
                Pneumatically driven and electronically controlled
                <br />
                7” LCD display
                <br />
                VCV,SIMV, A/C, PCV, MANUAL, CPAP/PSV, S/T, S-mode, T-mode
                <br />
                Invasive and non-invasive mode
                <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile2} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download ALLIED MEDITEC 1100 PDF
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="757 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={four} className="w-[350px] h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px]  font-icu">
                High-flow Humidification System
                <br />
                High-Flow Therapy Device
              </div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                Flow Rate Range 2-80L/MIN
                <br />
                Oxygen Percentage Range 21%-100%
                <br />
                Temperature Range 31°C–37°C, increment 1°C
                <br />
                Humidity ≥33mg/L at 37°C target
                <br />
                Display 5 inch color LCD touch screen
                <br />
                Water Chamber Volume: ≥90Ml
                <br />
                Alarms 12 types of alarms
                <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile3} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download High-Flow Therapy Device PDF
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

export default P7;
