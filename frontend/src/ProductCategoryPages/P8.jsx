import React from "react";
import one from "../assets/Products/08 Infant Care Device/1.png";
import two from "../assets/Products/08 Infant Care Device/2.png";
import three from "../assets/Products/08 Infant Care Device/3.png";
import four from "../assets/Products/08 Infant Care Device/4.png";
import pdfFile from "../assets/PDF/1b6.pdf";
import pdfFile1 from "../assets/PDF/2b3.pdf";
import pdfFile2 from "../assets/PDF/3ptu.pdf";
import pdfFile3 from "../assets/PDF/4comen.pdf";

const P8 = () => {
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
                B6 NEONATAL INCUBATOR
              </div>
              <div className="text-[#666666] sm:h-[300px]">
                Two- way incubator temperature detection
                <br />
                Bed temperature detection
                <br />
                Two- way infant temperature detection
                <br />
                Heat source temperature detection
                <br />
                Environment temperature detection
                <br />
                B8 double guarantee the control of temperature through 7
                channels of detection.
                <br />
                Humidity control technology
                <br />
                Effective humidity up to more than 95%
                <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download B6 NEONATAL INCUBATOR PDF
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
                B3 Infant Incubator
              </div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                Two- way incubator temperature detection <br />
                Bed temperature detection <br />
                Two- way infant temperature detection <br />
                Heat source temperature detection <br />
                Environment temperature detection <br />
                Oxygen concentration control technology <br />
                Human- Machine interaction <br />
                Intelligent Adjustment <br />
                Damping design of the door <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile1} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download B3 Infant Incubator PDF
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
                Infant Phototherapy BL70
              </div>
              <div className="text-[#666666] sm:h-[300px]">
                Ultra compact Lightweight and portable, taking up the least
                space. <br />
                Large screen 4.3-inch color touch screen, easy to observe and
                operate. <br />
                Ultra quiet Fanless design, noise free, ensuring a quiet and
                comfort environment. <br />
                Trolley design Convenient to move, seamless integration of
                different settings, <br />
                Including radiant warmer and baby cradle bed. <br />
                Quick-release structure The main unit can be quickly separated
                from the trolley <br />
                and placed directly on the incubator hood. <br />
                Flexible adjustment Easy adjustment of height and angle. <br />
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile2} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download Infant Phototherapy BL70 PDF
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
                Infant Radiant Warmer BQ80
              </div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                New Comprehensive Neonatal Nursing Platform <br />
                Far infrared ceramic heating tube <br />
                Thermal conduction gel mattress <br />
                Life Resuscitation <br />
                Timely Monitoring <br />
                Jaundice Treatment <br />
                Ergonomic Design <br />
                Hands-free Alarm Silence <br />
                Self-adaptive Brightness Adjustment Touch Screen <br />
                Humanized Damping Door <br />
                Integrated Electronic Scale <br />
                Pass-through Drawer <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile3} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download Infant Radiant Warmer BQ80 PDF
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

export default P8;
