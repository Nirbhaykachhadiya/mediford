import React, { useState, useEffect, useRef } from "react";
import productData from "./ProductData.jsx";
import right from "../assets/utills/right1.png";
import left from "../assets/utills/left1.png";

const Products = () => {
  const [current, setCurrent] = useState(1);

  
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
    <div className="flex justify-center mt-5 mb-14 bg-[#f2f2f2]">
      <div>
        <div
        
        >
          <h1 className="my-5 text-center font-sans text-[36px] sm:text-[48px] font-product ">
            Products & Solution
          </h1>
        </div>
        <div className="hidden sm:block">
          <div className="  grid grid-cols-3 sm:grid-cols-5 gap-5">
            {productData.map((item) => {
              return (
                <div key={item.id} className="">
                  <div className="  flex justify-center">
                    <img
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

        <div className="sm:hidden block h-[100px] w-full">
          <div className="grid grid-cols-11 gap-2">
            <div
              className="col-span-1 flex justify-center items-center"
              onClick={minus}
            >
              <img src={left} className="h-[40px] w-[40px]" />
            </div>
            <div className="col-span-9">
              {" "}
              <div className="  flex justify-center">
                {filterProductData.length != 0 &&
                  filterProductData.map((item) => {
                    return (
                      <div key={item.id} className="px-5">
                        <div className="  flex justify-center ">
                          <img
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
            <div
              className="col-span-1 flex justify-center items-center"
              onClick={plus}
            >
              <img className="h-[40px] w-[40px] " src={right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

{
  /* {item.name.split.length > 2 ? (
                    <>
                      {item.name.split(" ").map((word, index) => (
                        <>
                          {word}
                          {index === 2 && <br />}{" "}
                          {/* Add <br /> after the second word */
}
{
  /* {index !==  && " "}
                        </>
                      ))}
                    </>
                  ) : (
                    <></>
                  )} */
}
