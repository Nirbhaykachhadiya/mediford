import React from "react";
import one from "../assets/Products/02 Fetal & maternal monior/C11.png";
import two from "../assets/Products/02 Fetal & maternal monior/C2122.png";
import pdfFile from "../assets/PDF/CTG 5000D-C.pdf";

const P2 = () => {
  return (
    <div>
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-6 sm:gap-3">
        <div className="747 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={one} className="w-[350px] h-[350px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu ">
                STAR 5000C
              </div>
              <div className="text-[#666666] h-[225px] w-full">
                Parameter: ECG/HR, RESP, NI6P, SpO2,PR, TEMP, TOCO, FHR, FM.{" "}
                <br />
                12.1~ folding-up touch screen, 0-90'C multi-angle observation.{" "}
                <br />
                Various interfaces: main, fetal monitoring, fetal monitoring
                cascade, big font. <br />
                Multi-parameter, trend graphic display. <br />
                Manual/automatic fetal movement measurement, automatic fetal
                status scoring system <br />
                112mm thermal printer, real-time /timer printing for fetal
                waveforms and parameter <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download STAR 5000C PDF
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
                STAR 5000D
              </div>
              <div className="text-[#666666] h-[225px] w-full">
                6.5" color TFT touch screen, convenient for observation &
                movement <br />
                Built-in 152mm width printer, complied with international
                standard.
                <br />
                Automatic detection transducers, flexible connection with sensor
                seIf -optimized interfaces
                <br />
                12-oystal wide pulse wave waterproof transducer, suitable for
                underwater delivery <br />
                Advanced patient files management system <br />
                TEMPOM'" timing monitoring function, avoid overtime monitoring{" "}
                <br />
                Intelligent alarm management, automatic-identification alarm
                level <br />
                Self-adjust proper alarm time to reduce false alarms. <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download STAR 5000D PDF
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

export default P2;
