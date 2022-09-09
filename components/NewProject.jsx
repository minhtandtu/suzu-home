import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'YÊU THƯƠNG TIẾP NỐI',
    description: 'Music video, Digital Graphic, Marketing',
    branch: 'ZALOPAY',
    imageSrc: '/image1.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'ĐIỀU NHỎ BÉ VĨ ĐẠI',
    description: 'Visual, Animation, Marketing',
    branch: 'MOMO',
    imageSrc: '/image2.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'MUỘN MÀNG LÀ TỪ LÚC ',
    description: 'Music video, Digital graphic, Marketing.',
    branch: 'MỸ TÂM',
    imageSrc: '/image3.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'MERRY CHRISTMAS',
    description: 'Info graphic, Event, Marketing',
    branch: 'VIMCOM CENTER',
    imageSrc: '/image4.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'LÁ CỜ',
    description: 'Info graphic, Event, Marketingg',
    branch: 'BÁO TUỔI TRẺ',
    imageSrc: '/image5.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'BAO LẦN YÊU CHO VỪA',
    description: 'Info graphic, Event, Marketing',
    branch: 'SUZU GROUP',
    imageSrc: '/image6.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];
const NewProject = () => {
  return (
    <>
      <div className="section w-full bg-gray-50 pt-28  ">
        <div className="w-full">
          {/* Canh lề trái */}
          {/* Dự án của chúng tôi  */}
          <div className="mx-3  md:mx-16 mb-6 md:mb-14  ">
            <div className="text-left flex">
              <h2 className="text-red-500 title  sm:leading-none ">
                DỰ ÁN &nbsp;
              </h2>

              <h2 className=" text-white text-stroke text-stroke-red title  ">
                CỦA CHÚNG TÔI
              </h2>
            </div>
            <div className="  border-b-4 border-red-500 w-[50%] md:border-b-8 md:w-[160px] py-2 md:py-4"></div>
          </div>
          {/* Ảnh */}
          <div className="PJList justify-around mx-2">
            {projects.map((item, index) => (
              <div
                className="PJ  mb-[var(--spacing)] rounded-lg overflow-hidden"
                key={index}
              >
                <div className="pjimg  relative bg-black  ">
                  <div className="relative">
                    <Image
                      className="PJ-image object-cover opacity-50"
                      src={item.imageSrc}
                      alt="image"
                      width="520px"
                      height="390px"
                    ></Image>
                    {/* <div className=" absolute w-full h-full  bg-gradient-to-b from-white  to-black  opacity-70 bottom-0 left-0 "></div> */}
                  </div>

                  <div className="PJ-content absolute  bottom-0 left-0 text-white text-left m-4">
                    <p className="branch font-semibold text-base ">
                      {item.branch}
                    </p>
                    <h3 className="name my-4 font-bold">{item.name}</h3>
                    <p className="description font-normal text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="  w-full ">
              <button
                className=" w-full md:w-auto border border-red-500 py-2 mt-3 px-7 rounded-md bg-red-500 text-white font-bold
             hover:bg-red-700 duration-500 "
              >
                XEM THÊM &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
