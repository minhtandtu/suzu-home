import React from 'react';
// SuzuGroup
const SuzuGroup = () => {
  return (
    <>
      <div className=" w-full h-screen  flex align-middle items-center ">
        <div className="w-full px-2   -mt-20 ">
          {/* Hello  Suzu Group  section */}
          <div className="mx-auto px-8 ">
            <div className=" flex justify-center">
              {/*  */}
              <div className=" ">
                <div>
                  <div className="flex ">
                    <div className="-rotate-45   ">
                      <p className="text-sm text-left font-bold text-[#9E77ED]  relative -left-12 -top-5 ">
                        XIN CHÀO!
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className=" block md:flex justify-cente mb-8">
                  <h1 className=" font-normal mb-4 text-7xl  md:text-8xl text-red-500 ">
                    SUZU&nbsp;
                  </h1>
                  <h1 className="font-normal mb-4 text-7xl  md:text-8xl   text-white text-stroke-2 text-stroke-red">
                    GROUP
                  </h1>
                </div>
                <div className="  border-b-4 border-red-500 w-full md:border-b-8  "></div>
              </div>
            </div>
          </div>
          {/* Description  */}
          <div className=" mx-auto  w-full md:w-[40%] mt-4 md:mt-8 leading-[150%] text-center">
            <span className="text-center  text-sm md:text-xl font-normal text-gray-700 ">
              Elementum sociis aliquet neque, fames est amet, posuere tincidunt
              nunc in amet, tristique in a nulla viverra tristique ultrices duis
              laoreet consectetur bibendum et pulvinar integer tristique massa,
              ornare nec tristique et nec suspendisse pulvinar
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuzuGroup;
