import React from 'react';
import Partners from './Partners';
const collections = [
  {
    name: 'EFFERANGAN',
    description: 'Work from home accessories',
    author: 'LONG CHÂU',
    imageSrc: '/image.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'ĐIỀU NHỎ BÉ VĨ ĐẠI',
    description: 'Journals and note-taking',
    author: 'MOMO',
    imageSrc: '/image2.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'MUỘN MÀNG LÀ TỪ LÚC ',
    description: 'Daily commute essentials',
    author: 'MỸ TÂM',
    imageSrc: '/image3.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'MERRY CHRISTMAS',
    description: 'Work from home accessories',
    author: 'VIMCOM CENTER',
    imageSrc: '/image4.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'LÁ CỜ',
    description: 'Journals and note-taking',
    author: 'BÁO TUỔI TRẺ',
    imageSrc: '/image5.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'BAO LẦN YÊU CHO VỪA',
    description: 'Daily commute essentials',
    author: 'SUZU GROUP',
    imageSrc: '/image6.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];
const Projects = () => {
  return (
    <>
      <div className="section w-full bg-gray-50  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" max-w-2xl py-16 sm:py-24 lg:py-32 lg:max-w-none">
            {/*  */}
            <div className="my-4">
              <div className="text-left flex">
                <h2 className="text-red-500 title tracking-tighter    ">
                  DỰ ÁN &nbsp;
                </h2>

                <h2 className=" text-white text-stroke text-stroke-red title  ">
                  CỦA CHÚNG TÔI
                </h2>
              </div>
              <div className="  border-b-4 border-red-500 w-[200px] md:border-b-8 md:w-[256px] py-2"></div>
            </div>
            {/*  */}

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 ">
              {collections.map((collection) => (
                <div key={collection.name} className="group  p-1 ">
                  <div
                    className=" relative  rounded-xl overflow-hidden  w-full h-80 bg-white  group-hover:opacity-75 
              sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                  >
                    {/* Text */}
                    <div className=" absolute  mt-40 ml-4 text-left opacity-100 z-10 ">
                      <p className="text-base font-semibold  text-white">
                        {collection.author}
                      </p>
                      <h3 className=" text-3xl text-white font-bold  ">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                      <p className="text-base  text-white">
                        {collection.description}
                      </p>
                    </div>
                    <div className="absolute bg-black">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="w-full h-full object-center object-cover opacity-50  "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="  w-full flex-1">
              <button
                className="border border-red-400 py-2 mt-3 px-7 rounded-md bg-red-400 text-white font-bold
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

export default Projects;
