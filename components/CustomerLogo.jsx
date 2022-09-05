import React from 'react';
import {ArrowDownIcon} from '@heroicons/react/solid';
const logo = [
  {name: 'metup', imgUrl: '/logoMeHup.png', id: 1},
  {name: 'loctroi', imgUrl: '/logoLocTroi.png', id: 2},
  {name: 'tsp', imgUrl: '/logoTSP.png', id: 3},
  {name: 'thelist', imgUrl: '/logoTheList.png', id: 4},
  {name: 'z', imgUrl: '/logoZ.png', id: 5},
  {name: 'yeah1', imgUrl: '/logoYeah1.png', id: 6},
  {name: 'pp', imgUrl: '/logoPP.png', id: 7},
  {name: 'lava', imgUrl: '/logoLava.png', id: 8},
];
const CustomerLogo = () => {
  return (
    <>
      {/* Eclipse Shape + Trước Xuống + Mũi Tên */}
      <div className="section  rounded-eclipse shadow-biginner -mt-20   ">
        <div className=" w-full  h-36 flex align-middle justify-center   -mt-10 ">
          <div className="mx-auto  animate-bounce">
            <p className="font-semibold  ">Trược Xuống</p>
            <ArrowDownIcon className="h-10 w-10 text-gray-700  mx-auto" />
          </div>
        </div>

        {/* partners logo */}
        <div className=" w-[90%] mx-auto   bg-white  rounded-lg  shadow-md p-1">
          <div className="max-w-7xl mx-auto px-1 sm:py-2 sm:px-1 lg:px-4 text-center   ">
            <h4 className="tracking-tight font-bold text-slate-600">
              Chúng tôi đã giúp 20+ doanh nghiệp giải quyết các vấn đề họ đang
              gặp phải
            </h4>
            <div className="flow-root mt-8 lg:mt-10">
              <div className="grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-0 lg:grid-cols-8   ">
                {logo.map((item) => (
                  <div
                    key={item.id}
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                  >
                    <img
                      className="max-h-12"
                      src={item.imgUrl}
                      alt="Coinbase"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerLogo;
