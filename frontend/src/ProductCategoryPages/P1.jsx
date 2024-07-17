import React from "react";
import one from "../assets/Products/01 Patient monitor/Allied Meditec M747 Monitor.png";
import two from "../assets/Products/01 Patient monitor/Allied Meditec M752 Monitor.png";
import three from "../assets/Products/01 Patient monitor/Allied Meditec M757 Monitor.png";
import four from "../assets/Products/01 Patient monitor/Allied Meditec M771 Monitor.png";
import five from "../assets/Products/01 Patient monitor/Allied Meditec M777 Monitor.png";
import six from "../assets/Products/01 Patient monitor/M707 Monitor.png";
import seven from "../assets/Products/01 Patient monitor/Star8800 Central Monitoring System.png";

const P1 = () => {
  console.log("2");
  return (
    <div>
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-9 sm:gap-3">
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={one} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M747 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={two} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M752 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={three} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M757 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={four} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M771 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={five} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Allied Meditec M777 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={six} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                M707 Monitor
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <div>
            <div>
              <img src={seven} className="w-[250px] h-[250px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu">
                Star8800 Central Monitoring System
              </div>
              <div>Descr</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default P1;
