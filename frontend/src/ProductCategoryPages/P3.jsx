import React from "react";
import one from "../assets/Products/03 Defibrillator monitor/S3.png";
import two from "../assets/Products/03 Defibrillator monitor/S5.png";
import pdfFile from "../assets/PDF/S3.pdf";
import pdfFile1 from "../assets/PDF/S5.pdf";

const P3 = () => {
  return (
    <div>
      <div className=" pt-[100px] grid grid-cols-1 sm:grid-cols-6 sm:gap-3">
        <div className="747 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={one} className="w-[350px] h-[350px]" />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px] font-icu ">S3</div>
              <div className="text-[#666666] sm:h-[350px] w-full">
                Authoritative organizations such as the AHA and the European
                <br />
                Resuscitation Council have pointed out that when a patient
                suffers
                <br />
                from cardiac arrest and ventricular fibrillation, every minute
                of <br />
                delay reduces the probability of the patient being rescued by
                12%.
                <br />
                Therefore, rapid defibrillation is particularly important in
                <br /> emergency care.With a 7-inch large multi-colour display,
                Comen S3 Can support
                <br />
                viewing of up to 3 waveforms.As well as numeric data,
                <br />
                alarm events, and patient information <br />
                And Comen also focuses on fast
                <br />
                Operation, the defibrillation as easy as only 3 steps
                <br />
                The multifunctional defibrillator paddle design enables <br />
                the defibrillation operation to be completed On a pair of
                electrode paddles and the electrode pads can be divided into{" "}
                <br />
                large electrode pads and small electrode pads within 1 second
                both adults and children can be defibrillated
              </div>
            </div>
            <div className="flex justify-start items-center h-[100px]">
              <a href={pdfFile} download className="group">
                <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                  <span className="text-lg font-bold group-hover:text-gray-200">
                    Download S3 PDF
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="757 sm:col-span-3 flex pl-10 sm:justify-center items-center">
          <div>
            <div>
              <img src={two} className="w-[350px] sm:h-[350px] " />
            </div>
            <div>
              <div className="py-3 text-sans text-[18px]  font-icu">S5</div>
              <div className="text-[#666666] h-[350px] w-full">
                Defibrillation: Manual defibrillation modes include synchronous{" "}
                <br />
                cardio version and asynchronous defibrillation Pacing: Having
                on-demand pacing and fixed pacing mode, for patients with
                cardiac
                <br /> arrest and acute severe slow arrhythmia, in vitro
                non-invasive pacing mode is rapid, easy to master, time-saving
                and improve recovery success rate. AED: The model applies
                patented analysis algorithm and automated <br />
                analysis as well as convenient setting to guide clinical
                emergency personnel in providing defibrillation and basic life
                support. Monitor: 5-lead ECG monitoring as standard, optional
                monitoring <br />
                functions include Sp02, NIBP, PR and EtCO2 are also available
                for continuous monitoring of patient vital signs.
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center h-[100px]">
                <a href={pdfFile1} download className="group">
                  <div className="p-4 bg-[#394681] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
                    <span className="text-lg font-bold group-hover:text-gray-200">
                      Download S5 PDF
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

export default P3;
