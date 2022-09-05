import React from 'react';
import Projects from './Projects';
import {ArrowDownIcon} from '@heroicons/react/solid';
const Partners = () => {
  return (
    <>
      <div className="-mt-32">
        {/* eclipse */}
        {/* shadow-[0px_10px_30px_lightgray_inset]  */}
        <div
          className=" relative  min-h-[500px] bg-gray-50
        rounded-eclipse  shadow-biginner   "
        >
          {/* partners banner + Bouncing Arrow */}
          <div className="absolute mt-6 w-full ">
            <div className=" w-full  h-36 flex align-middle justify-center ">
              <div className="mx-auto  animate-bounce">
                <p className="font-semibold  ">Trược Xuống</p>
                <ArrowDownIcon className="h-12 w-12 text-gray-700  mx-auto" />
              </div>
            </div>

            {/* partners  */}
            <div className=" w-[70%] mx-auto   bg-white  rounded-lg  shadow-md p-20">
              <div className="max-w-7xl mx-auto px-4 sm:py-2 sm:px-6 lg:px-8 text-center ">
                <h4 className="tracking-tight font-bold text-slate-600">
                  We have helped +100 businesses to solve their problems
                </h4>
                <div className="flow-root mt-8 lg:mt-10">
                  <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-12"
                        src="/Company6.png"
                        alt="Coinbase"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="/Company5.png" alt="Spotify" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="/Company4.png" alt="Slack" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="/Company3.png" alt="Dropbox" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="/Company2.png" alt="Webflow" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="/Company.png" alt="Zoom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
