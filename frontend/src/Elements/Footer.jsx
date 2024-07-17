import React from "react";
import telephone from "../assets/utills/icons8-telephone-64.png"

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]  bottom-0 border-t border-[#6666663D] font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <h2 className="text-lg  text-[#595757] font-icu mb-1">
              RK MEDIFORD PVT. LTD.
            </h2>
            <p className="text-[#666666] font-product">
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
              </span>
              50/51, Shreenath Sarthak Industrial Park, <br />{" "}
              <span className="ml-7">Nr. Torrent Power Sub Station's,</span>{" "}
              <br />{" "}
              <span className="ml-7">
                Nikol - Kathwada Ring Road, Kathwada,
              </span>
              <br />
              <span className="ml-7">Ahmedabad-382415</span>
            </p>
          </div>
          {/* Social Media Icons */}
          <div className="">
            <h2 className="text-lg mb-1 text-[#595757] font-icu">Contact Us</h2>
            {/* <p>
              Nirmal Patel <span className="ml-10">📞: +91-9898814804</span>{" "}
            </p>
            <p>
              Jignesh Radadiya <span className="ml-1">📞: +91-9898473100</span>
            </p>
            <p>
              Vishal Ramani <span className="ml-7">📞: +91-9724244111</span>
            </p>
            <p>
              Roshan Patel <span className="ml-9">📞: +91-9898444437</span>{" "}
            </p> */}
            {/* <div>
              <span className="inline-block align-middle  text-[#666666] font-product ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </span>
              <span className="px-1 text-[#666666] font-product">:</span>
              <a href="mailto:global1535@gmail.com" className=" underline">
                <span className="text-[#666666] font-product">
                  {" "}
                  global535@gmail.com
                </span>
              </a>
            </div> */}
            <div>
              <span className="inline-block align-middle  text-[#666666] font-product ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </span>
              <span className="px-1 text-[#666666] font-product">:</span>
              <a href="mailto:global1535@gmail.com" className=" underline">
                <span className="text-[#666666] font-product">
                  TENDERS@MEDIFORD.IN
                </span>
              </a>
            </div>

            <div>
              <span className="inline-block align-middle  text-[#666666] font-product ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </span>
              <span className="px-1 text-[#666666] font-product">:</span>
              <a href="mailto:global1535@gmail.com" className=" underline">
                <span className="text-[#666666] font-product">
                  {" "}
                  CONTACT@MEDIFORD.IN
                </span>
              </a>
            </div>
            <div>
              <span className="inline-block align-middle"><img src={telephone} className="h-[24px] w-[24px]"/></span>
            <span className="px-1 text-[#666666] font-product">:</span></div>
          </div>
          {/* Copyright Info */}

          <div>
            <div className="flex justify-center sm:justify-start mt-5">
              <a
                href="https://www.youtube.com/"
                className="text-red-500 hover:text-white mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  />
                  <path fill="#FFF" d="M20 31L20 17 32 24z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-blue-500 hover:text-white mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  />
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-blue-800 hover:text-white mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  />
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                className="text-blue-400 hover:text-white mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                  clipRule="evenodd"
                  baseProfile="basic"
                >
                  <path
                    fill="#212121"
                    fillRule="evenodd"
                    d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="#fff"
                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                  />
                  <polygon
                    fill="#fff"
                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                  />
                  <polygon
                    fill="#fff"
                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                  />
                </svg>
              </a>
            </div>
            <div className="flex justify-center sm:justify-start sm:mt-5  text-[#666666] font-product">
              <p>&copy; 2024 RK MEDIFORD PVT. LTD. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
