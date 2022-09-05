import React from 'react';

const SuzuGroup = () => {
  return (
    <>
      <div className=" w-full h-screen  flex align-middle items-center ">
        <div className="w-full px-2   ">
          {/* Hello  Suzu Group  section */}
          <div className="  w-[60%] md:min-w-[850px] mx-auto px-8">
            <div className=" first-letter: flex">
              <div className="-rotate-45   ">
                <p className="text-sm text-left font-bold text-[#9E77ED]  relative -left-12 -top-5">
                  XIN CHÀO!
                </p>
              </div>
              <div></div>
            </div>
            <div className="mx-auto block md:flex ">
              <h1 className="text-red-500 text-center  font-extrabold mb-4 text-6xl sm:text-7xl md:text-9xl  ">
                SUZU
              </h1>
              <h1 className=" text-center font-extrabold mb-4 text-6xl sm:text-7xl md:text-9xl   text-white text-stroke-2 text-stroke-red">
                GROUP
              </h1>
            </div>
            <div className=" border-b-4 border-red-500 w-full md:border-b-8 md:w-[256px] md:mx-auto"></div>
          </div>
          {/* Description  */}
          <div className="mx-auto  w-full md:w-[80%] ">
            <span className="text-sm md:text-xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuzuGroup;
