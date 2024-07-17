import React from "react";
import one from "../assets/Products/04 Electrocardiograph/3.png";
import two from "../assets/Products/04 Electrocardiograph/12.png";
import pdfFile from "../assets/PDF/3.pdf";
import pdfFile1 from "../assets/PDF/12.pdf";

const P4 = () => {
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
                Digital 3 channel
              </div>
              <div className="text-[#666666] sm:h-[300px]">
                12-lead synchronous acquisition and display
                <br />
                Digital sampling rate is up to 32000Hz
                <br />
                A/D converter reaches 24 bits
                <br />
                0.01-350Hz ultra-wide frequency response could acquire signals
                of patients from pediatric to elder
                <br />
                Original iFilter adaptive filtering technology greatly improves
                the ECG signal quality
                <br />
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
                Digital 12 channel
              </div>
              <div className="text-[#666666] w-full sm:h-[300px]">
                 12-lead synchronous acquisition and display
                <br />
                9.7-inch tilted touch screen with grid background
                <br />
                High-performance chip module makes ECG signal collection more
                accurate
                <br />
                Sampling rate: 32000Hz
                <br />
                A/D shift: 24 bits
                <br />
                0.01-350Hz ultra-wide frequency response could acquire signals
                of patients from pediatric to elder
                <br />
                With waveform freezing and waveform review functions, clinicians
                can choose any waveform for analysis and printing
                <br />
                With report preview function, clinicians can ensure signal
                quality
                <br />
                Support reanalysis based on modified patient information
                <br />
                Support USB/ RJ45/ SD card ports for peripherals and export of
                data
                <br />
                Support output of multiple formats
                <br />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile1} download className="group">
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

export default P4;
