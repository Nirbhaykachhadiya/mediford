import React, { useState, useEffect, useRef } from "react";
import productData from "../Elements/ProductData.jsx";
import right from "../assets/utills/right1.png";
import left from "../assets/utills/left1.png";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

  const [filterProductData, setFilterProductData] = useState([]);
  useEffect(() => {
    // Initialize the filterProductData based on the current index
    updateFilterProductData(current);
  }, [current]);

  const updateFilterProductData = (index) => {
    // Determine the product data to be displayed based on the current index
    if (index === 1) {
      setFilterProductData([productData[0], productData[1], productData[2]]);
    } else if (index === productData.length - 1) {
      setFilterProductData([productData[index]]);
    } else {
      setFilterProductData([
        productData[index - 1],
        productData[index],
        productData[index + 1],
      ]);
    }
  };

  const minus = () => {
    const newIndex = current === 1 ? productData.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const plus = () => {
    const newIndex = current === productData.length - 1 ? 1 : current + 1;
    setCurrent(newIndex);
  };

  return (
    <div className="  bg-[#F2F2F2] sm:h-screen sm:flex sm:items-center justify-center">
      {/* <div>
        <img src={home} className="h-[350px]  sm:w-screen object-cover" />
      </div> */}
      <div className="sm:flex sm:justify-center  mt-5 pb-14 bg-[#F2F2F2] ">
        <div>
          <div></div>
          <div className="hidden sm:block">
            <div className="  grid grid-cols-3 sm:grid-cols-5 gap-5">
              {productData.map((item) => {
                return (
                  <div key={item.id} className="">
                    <div className="  flex justify-center">
                      <img
                        onClick={() => navigate(`product/${item.id}`)}
                        className=" h-[80px] w-[80px] transform transition-transform duration-700 ease-in-out  hover:scale-125 cursor-pointer"
                        src={item.image}
                      />
                    </div>
                    <div className="text-[#3E3A39] font-sans flex justify-center">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sm:hidden bg-[#F2F2F2] pt-[50px] block  w-full">
            <div className="text-center text-[28px] text-[#595757]  font-icu my-10">
              Our Products Range
            </div>
            <div className="grid grid-cols-9 gap-2">
              
               
                  {productData.length != 0 &&
                    productData.map((item) => {
                      return (
                        <div key={item.id} className="px-5 col-span-3">
                          <div className="  flex justify-center ">
                            <img
                              onClick={() => navigate(`product/${item.id}`)}
                              className=" h-[80px] w-[80px] transform transition-transform duration-700 ease-in-out  hover:scale-125 cursor-pointer"
                              src={item.image}
                            />
                          </div>
                          <div className="text-[#3E3A39] font-sans flex justify-center">
                            <div>{item.name}</div>
                          </div>
                        </div>
                      );
                    })}
                
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
