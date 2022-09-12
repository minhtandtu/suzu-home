import React from 'react';
import '@splidejs/react-splide/css/sea-green';
import {Splide, SplideSlide} from '@splidejs/react-splide';
const works = [
  {
    title: 'Xây dựng thương hiệu',
    description:
      ' Chúng tôi là chuyên gia xây dựng hình ảnh phù hợp cho doanh nghiệp của bạn để đảm bảo khách hàng tiềm năng chọn bạn hơn đối thủ cạnh tranh.',
    author: 'LONG CHÂU',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: ' Photo',
    href: '#',
  },
  {
    title: 'Thiết kế đồ họa',
    description:
      'Chúng tôi có thể giúp củng cố thương hiệu của bạn bằng việc xây dựng cộng đồng hoặc thiết kế các tài liệu tiếp thị để mang lại ấn tượng lâu dài với khách hàng. ',
    author: 'MOMO',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Photo',
    href: '#',
  },
  {
    title: 'Truyền thông xã hội',
    description:
      ' Chúng tôi có thể quảng bá thương hiệu của bạn để kết nối với khách hàng tiềm năng bằng nhiều hình thức truyền thông kỹ thuật số.',
    author: 'MỸ TÂM',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];
const projects = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'image.png',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'image1.png',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'image2.png',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'image3.png',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc: 'image4.png',
  },
  {
    name: 'Sale2',
    href: '#',
    imageSrc: 'image5.png',
  },
  {
    name: 'Sale3',
    href: '#',
    imageSrc: 'image2.png',
  },
];
const Works = () => {
  return (
    <>
      <div className="section bg-white">
        <section
          aria-labelledby="collection-heading"
          className="max-w-xl mx-auto pt-2 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {/*  */}
          {/* Chung Toi Lam Gi  */}
          <div className="mx-3  md:mx-16 mb-6 md:mb-14  ">
            <div className="text-center flex justify-start md:justify-center">
              <h2 className="text-red-500 title  sm:leading-none ">
                CHÚNG TÔI&nbsp;
              </h2>

              <h2 className=" text-white text-stroke text-stroke-red title  ">
                LÀM GÌ
              </h2>
            </div>
            <div className="md:mx-auto  border-b-4 border-red-500 w-[35%] md:border-b-8 md:w-[160px] py-2 md:py-4"></div>
          </div>
          {/*  */}

          <div className="w-full mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {works.map((item, index) => (
              <a key={index} href={item.href} className="group block   w-full ">
                <div
                  className="  aspect-w-3 aspect-h-2 rounded-lg overflow-hidden 
                  group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className=" w-72 h-96 object-center object-cover  mx-auto"
                  />
                </div>
                <h3 className="mt-4 semititle text-gray-900 text-center">
                  {item.title}
                </h3>
                <p className="mt-2 description text-gray-500 text-center ">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </section>
        {/* 5 squares  */}
        <section
          aria-labelledby="category-heading"
          className="pt-4 sm:pt-4 xl:max-w-7xl xl:mx-auto xl:px-8"
        >
          {/* <div className=" flow-root">
            <div className="box-content  relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute grid-cols-2 min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={category.imageSrc}
                        alt=""
                        className="w-56 h-56 object-center object-cover shadow-md shadow-gray-400"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div> */}
          <div className="mini-slider   w-full h-80 ">
            <Splide
              options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                hasTrack: false,
                pagination: false,
                breakpoints: {
                  1024: {
                    perPage: 3,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
              aria-label="My Favorite Images"
            >
              {projects.map((item, index) => (
                <SplideSlide key={index}>
                  <a
                    key={index}
                    href={item.href}
                    className="relative  h-60 rounded-lg  p-6 flex justify-center overflow-hidden hover:opacity-75 xl:w-auto   "
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="w-56 h-56 object-center object-cover shadow-md shadow-gray-400 mx-auto rounded-lg"
                      />
                    </span>
                  </a>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </div>
    </>
  );
};

export default Works;
