import React from 'react';
const logo = [
  {name: 'metup', imgUrl: '/logoMeHup.png', id: 1},
  {name: 'Yeah1', imgUrl: '/logoYeah1.png', id: 2},
  {name: 'LocTroi', imgUrl: '/logoLocTroi.png', id: 3},
  {name: 'pp', imgUrl: '/logoPP.png', id: 4},
  {name: 'Casting', imgUrl: '/Castinglogo.png', id: 5},
  {name: 'BCM', imgUrl: '/BCMlogo.png', id: 6},
  {name: 'Icon ', imgUrl: '/IconMedialogo.png', id: 7},
  {name: 'Chin', imgUrl: '/Chinlogo.png', id: 8},
  {name: 'EON', imgUrl: '/Eonlogo.png', id: 9},
];
const ContactUs = () => {
  return (
    <>
      <div className="section bg-gray-50 pb-20 px-3 md:px-[var(--commonPadding)]  ">
        <div className=" bg-white  shadow-xl rounded-lg p-3 mx-auto md:p-8 ">
          <div className=" md:grid md:grid-cols-2 md:gap-8 md:items-center  ">
            <div className="contact-content md:col-span-1">
              <div className="md:pr-32 ">
                <p className=" text-left text-2xl md:text-4xl tracking-tight font-semibold text-gray-900 sm:text-4xl md:leading-10">
                  Tham gia cùng hơn <span className="text-red-500"> 20+ </span>{' '}
                  công ty khởi nghiệp đang phát triển với{' '}
                  <span className="text-red-500">SuZu Group</span>
                </p>
                <p className="text-left mt-3 max-w-3xl  text-base md:text-xl text-gray-500">
                  Hãy cho chúng tôi biết về dự án của bạn nhé.
                </p>
              </div>
              {/* Button LIÊN HỆ NGAY --> */}
              <div className="w-full flex  mt-8   ">
                <button
                  className=" w-full  md:w-auto border border-red-500 py-2 px-4 rounded-md bg-red-500 text-white font-bold
             hover:bg-red-700 duration-500 "
                >
                  LIÊN HỆ NGAY &rarr;
                </button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
              {logo.map((cai, index) => (
                <div
                  key={index}
                  className="col-span-1 flex justify-center py-8 px-8 "
                >
                  <img className="max-h-12" src={cai.imgUrl} alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
