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
      <div className="section bg-gray-50 ">
        <div className=" bg-white my-4 shadow-xl rounded-lg max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <p className=" text-left text-4xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                Chúng tôi đã đem lại hàng triệu khách hàng cho các đối tác
              </p>
              <p className="text-left mt-3 max-w-3xl text-xl text-gray-500">
                Hãy cho chúng tôi biết về dự án của bạn nhé.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700
                     duration-500"
                  >
                    LIÊN HỆ NGAY
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
              {logo.map((cai) => (
                <div
                  key={cai.id}
                  className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
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
