import React from "react";
import one from "../assets/Products/01 Patient monitor/Allied Meditec M747 Monitor.png";
import two from "../assets/Products/01 Patient monitor/Allied Meditec M757 Monitor.png";
import three from "../assets/Products/01 Patient monitor/Allied-Meditec-M797-Monitor.png";
import four from "../assets/Products/01 Patient monitor/Allied Meditec M771 Monitor.png";
import five from "../assets/Products/01 Patient monitor/Allied Meditec M777 Monitor.png";
import six from "../assets/Products/01 Patient monitor/M707 Monitor.png";
import seven from "../assets/Products/01 Patient monitor/Star8800 Central Monitoring System.png";
import pdfFile from "../assets/PDF/M747 Brochure.pdf";
import pdfFile1 from "../assets/PDF/M777 Brochure.pdf";
import pdfFile2 from "../assets/PDF/meditec-m700 product.pdf";

const P1 = () => {
 
  return (
    <div>
      <div className=" pt-[100px] grid  sm:grid-cols-9 sm:gap-3">
        <div className="747 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={one} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu  ">
                Allied Meditec M747 Monitor
              </div>
              <div className="text-[#666666]">
                12.1” LED Screen
                <br /> Pre-configured, light weight and sturdy design
                <br />
                Flexible parameter configuration for different clinical
                <br />
                Environment <br />
                Rechargeable Li-ion battery backup (up to 5 hours)
                <br />
                Graphical and tabular trends of 168 Hrs.
                <br /> Defibrillation Interface & Cautery Protection
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download M747 PDF
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="757 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={two} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px]  font-icu">
                Allied Meditec M757 Monitor
              </div>
              <div className="text-[#666666]">
                12.1” LED Screen
                <br />
                Modular series patient monitor, light weight and sturdy design
                <br />
                Flexible parameter configuration for different clinical
                Environment
                <br />
                Rechargeable Li-ion battery backup (up to 5 hours)
                <br />
                Graphical and tabular trends of 168 Hrs.
                <br />
                Defibrillation Interface & Cautery Protection
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile2} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download M757 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="797 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={three} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M797 Monitor
              </div>
              <div className="text-[#666666]">
                17” LED Screen
                <br />
                Modular series patient monitor, light weight and sturdy <br />
                design Flexible
                <br /> parameter configuration for different clinical <br />
                Environment Rechargeable Li-ion battery backup (up to 5 hours)
                <br />
                Graphical and tabular trends of 168 Hrs.
                <br />
                Defibrillation Interface & Cautery Protection
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile2} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download M797 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="771 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={four} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px]  font-icu">
                Allied Meditec M771 Monitor
              </div>
              <div className="text-[#666666]">
                19” LED Screen <br />
                Modular series patient monitor,
                <br /> light weight and sturdy design <br />
                Flexible parameter configuration
                <br /> for different clinical Environment <br />
                Rechargeable Li-ion battery backup (up to 5 hours) <br />
                Graphical and tabular trends of 168 Hrs. <br />
                Defibrillation Interface & Cautery Protection{" "}
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile2} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download M771 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="777 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={five} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M777 Monitor
              </div>
              <div className="text-[#666666]">
                15” LED Screen <br />
                Pre-configured, light weight and sturdy design <br />
                Flexible parameter configuration <br />
                for different clinical Environment Rechargeable Li-ion battery
                backup (up to 5 hours) <br />
                Graphical and tabular trends of 168 Hrs. <br />
                Defibrillation Interface & Cautery Protection{" "}
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile1} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download M777 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="707 mt-5 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div >
              <img src={six} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                M707 Monitor
              </div>
              <div className="text-[#666666] ">
                4.3” LED Screen
                <br />
                Pre-configured, light weight and sturdy design
                <br />
                Flexible parameter configuration for different clinical
                <br />
                Environment
                <br />
                Rechargeable Li-ion battery backup (up to 8 hours)
                <br />
                Graphical and tabular trends of 48 Hrs.
                <br />
                Defibrillation Interface & Cautery Protection
                <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile2} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download M707 PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mt-5 sm:block sm:col-span-3 "></div>
        <div className="star mt-5 sm:col-span-6 flex pl-10  items-center">
          <div>
            <div >
              <img src={seven} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Star8800 Central Monitoring System
              </div>
              <div className="text-[#666666]">
                Standard Network Interface: TCP/IP central monitoring <br />
                System, be able to observe full vital signs information of the
                Patient <br />
                Full Disclosure Waveform Observation: Large screen display,{" "}
                <br />
                Be able to observe 16 bedside monitors waveforms <br />
                Simultaneously. Selectable Dual-screen display <br />
                Dual Screen: Support various data display methods and <br />
                Various windows layout. It can display the waveform and <br />
                Numeric information of ECG, SpO2, RESP, NIBP, IBP, CO2, etc.{" "}
                <br />
                The key bedside monitoring function provides more detail <br />
                Information to the doctor.
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile2} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download Star8800 PDF
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

export default P1;
