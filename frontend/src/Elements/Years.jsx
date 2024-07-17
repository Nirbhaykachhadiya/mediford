import React, { useEffect, useState, useRef } from "react";
import up from "../assets/utills/up.png";
import down from "../assets/utills/down.png";
import Data from "./YearData.jsx";
import cross from "../assets/utills/cross.png";

const Years = () => {
  // const isFirstRender = useRef(true);

  // const [current, setCurrent] = useState(0);
  // const [filterData, setFilterData] = useState(Data[current]);

  // const upSide = () => {
  //   setCurrent((prev) => Math.max(prev - 1, 0));
  // };

  // const downSide = () => {
  //   setCurrent((prev) => Math.min(prev + 1, Data.length - 1));
  // };

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //   } else {
  //     setFilterData(Data[current]);
  //   }
  // }, [current]);

  return (
    <div className="font-sans">
      <div className="my-5 text-center text-[#595757]  text-[36px] sm:text-[48px] font-icu ">
        Leaving a trail of success behind
      </div>
      <div className="flex justify-center my-5">
        <div className="mx-14 grid grid-cols-7 gap-y-5 gap-x-5">
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-1 h-[100px]  my-2 bg-[#394681] flex items-center justify-center text-white font-icu text-[20px]">
            2015
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#666666]  sm:font-icu text-[14px] sm:text-[18px]">
            Year of Establishment as Proprietary firm- Global Meditech
          </div>
          <div className="col-span-3 h-[100px]  flex items-center justify-center text-[#394681] sm:font-icu text-[14px] sm:text-[18px]">
            We started dealing with Hospital Furniture only to build our <br/> first
            step in the Healthcare Industries
          </div>
          <div className="col-span-1 h-[100px] bg-gray-300 text-[#394681] font-nav flex items-center justify-center  text-[20px]">
            2016
          </div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-1 h-[100px] bg-[#394681] flex items-center justify-center text-white font-icu text-[20px]">
            2017
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#666666]  sm:font-icu text-[14px] sm:text-[18px]">
            Added Critical Care Medical equipment specially
            Ventilators,<br/>Anesthesia Workstations and all
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#394681]  sm:font-icu text-[14px] sm:text-[18px]">
            We reached at our first 1 crore turnover and we added <br/>Radiography
            Equipment range
          </div>
          <div className="col-span-1 h-[100px] bg-gray-300 text-[#394681] font-nav flex items-center justify-center  text-[20px]">
            2018
          </div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-1 h-[100px] bg-[#394681] flex items-center justify-center text-white font-icu text-[20px]">
            2020
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#666666]  sm:font-icu text-[14px] sm:text-[18px]">
            We were archiving the goals, rebranded our company as <br/> Mediford and
            transformed in to RK Mediford Private Limited
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#394681]  sm:font-icu text-[14px] sm:text-[18px]">
            Now, Mediford has already increased many range of <br/> healthcare
            equipments and Signed Distributor ships from<br/> Allied Meditech,Konica
            Minolta, Procon (Germany), <br/> Medion Healthcare, Cellgym (USA),Mikasa
            (Japan)<br/>  and many national and international manufacturer
          </div>
          <div className="col-span-1 h-[100px] bg-gray-300 text-[#394681] font-nav flex items-center justify-center  text-[20px]">
            2021
          </div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-1 h-[100px] bg-[#394681] flex items-center justify-center text-white font-icu text-[20px]">
            2022
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#666666]  sm:font-icu text-[14px] sm:text-[18px]">
            We expanded our business with Government Tenders and <br/> we archived
            success in many tenders from AIIMS,<br/> Director Health, NHM and etc
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#394681]  sm:font-icu text-[14px] sm:text-[18px]">
            Upgradation in strategies, road maps,  new<br/> opportunism and increased
            high skilled and trained<br/>  sales teamand service team
          </div>
          <div className="col-span-1 h-[100px] bg-gray-300 text-[#394681] font-nav flex items-center justify-center  text-[20px]">
            2023
          </div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-3 h-[100px]"></div>
          <div className="col-span-1 h-[100px] bg-[#394681] flex items-center justify-center text-white font-icu text-[20px]">
            2024
          </div>
          <div className="col-span-3 h-[100px] flex items-center justify-center text-[#666666]  sm:font-icu text-[14px] sm:text-[18px]">
            Feeling proud to reached very close to first 100 Crores  <br/> turnover and
            existing sectors of Private, Government,<br/> Import and Exports. Still
            ready to run as faster as<br/> we can to deal with more opportunity with
            our honesty,<br/> destiny and locality
          </div>
        </div>
      </div>
    </div>
  );
};

export default Years;

{
  /* <div className=" h-[500px] w-[600px] sm:w-[1000px] flex ">
          <div className="mt-10 px-7 space-y-6  border-r border-[#66666675]">
            <div
              className={`cursor-pointer mt-1 ${current === 0 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(0)}
            >
              2015
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 1 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(1)}
            >
              2016
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 2 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(2)}
            >
              2017
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 3 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(3)}
            >
              2018
            </div>

            <div
              className={`cursor-pointer mt-1 ${current === 4 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(4)}
            >
              2020
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 5 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(5)}
            >
              2021
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 6 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(6)}
            >
              2022
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 7 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(7)}
            >
              2023
            </div>
            <div
              className={`cursor-pointer mt-1 ${current === 8 ? "text-[#595757] font-nav text-[24px] sm:text-[30px]" : "text-[#666666] font-500 text-[18px] sm:text-[18px]"}`}
              onClick={() => setCurrent(8)}
            >
              2024
            </div>
          </div>
          <div className="mt-10 border-t px-7 grid grid-cols-10  items-center border-[#66666675] h-full w-full">
            <div className="col-span-8 ">
              {filterData ? (
                <div className="text-[#595757]  font-nav text-[18px] sm:text-[24px]">
                  {filterData.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-2  ">
              <div className="flex justify-end ">
                <div className="space-y-3">
                  <div>
                    <img
                      className={`h-[60px] w-[60px] object-cover ${current === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                      src={current === 0 ? cross : up}
                      onClick={upSide}
                    />
                  </div>
                  <div>
                    <img
                      className={`h-[60px] w-[60px] object-cover ${current === Data.length - 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                      src={current === Data.length - 1 ? cross : down}
                      onClick={downSide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
