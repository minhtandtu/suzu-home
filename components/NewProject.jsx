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
const NewProject = () => {
  return (
    <>
      <div className="section w-full bg-gray-50  bd">
        <div className="w-full">
          {/* Dự án của chúng tôi  */}
          <div className="mx-4 md:mx-16">
            <div className="text-left block md:flex">
              <h2 className="text-red-500 title tracking-tighter leading-relaxed sm:leading-none ">
                DỰ ÁN &nbsp;
              </h2>

              <h2 className=" text-white text-stroke text-stroke-red title  ">
                CỦA CHÚNG TÔI
              </h2>
            </div>
            <div className="  border-b-4 border-red-500 w-full md:border-b-8 md:w-[256px] py-4"></div>
          </div>
          {/* Ảnh */}
          <div className="w-full h-[1000px] bdd grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="col-span-1 md:col-span-3 flex-col">
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
              <div className="bd w-full h-80"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
