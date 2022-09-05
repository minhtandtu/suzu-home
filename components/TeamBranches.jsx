import React from 'react';

import {ArrowRightIcon, ArrowNarrowUpIcon} from '@heroicons/react/solid';
const branchName = [
  {
    name: 'SuZu Studio',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Bamboo Ads',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Social Film',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Social Brands',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'SuZu Music',
    href: '#',
    current: false,
    des: ' Short Description',
  },
];
const linhvuc = [
  {
    name: 'Desk and Office',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description:
      'Journals and note-taking Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description:
      'Daily commute essentials Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:
      'Keep your phone, keys, and wallet together, so you can lose everything at once. and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:
      'The rest of the house will still be a mess, but your desk will look great.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:
      'Be more productive than enterprise project managers with a single piece of paper.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const TeamBranches = () => {
  return (
    <>
      <div className="section bg-white text-left ">
        <div className="mx-auto m-16   ">
          {/*  */}
          <div className="ml-4 md:ml-16">
            <div className="text-left block md:flex">
              <h2 className="text-red-500 title leading-relaxed md:leading-none ">
                ĐỘI NGŨ &nbsp;
              </h2>

              <h2 className="text-white text-stroke text-stroke-red title  ">
                CỦA CHÚNG TÔI
              </h2>
            </div>
            <div className="  border-b-4 border-red-500 w-full md:border-b-8 md:w-[256px] py-4"></div>
          </div>
          {/*  */}

          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-2   m-4 md:ml-12 xl:ml-24 md:min-w-[300px]">
              <nav className="space-y-1" aria-label="Sidebar">
                {branchName.map((item) => (
                  <a
                    key={item.name}
                    className="cursor-pointer font-semibold  hover:text-red-500  "
                  >
                    <div className=" w-full border border-dashed  md: h-24 xl:h-28 2xl:h-36 flex  hover:underline ">
                      <div className="h-full w-[60%]  m-1">
                        <div className=" w-full h-[50%] m-1 relative ">
                          <h3 className="absolute bottom-1 left-0 text-xl sm:text-2xl ">
                            {item.name}
                          </h3>
                        </div>
                        <div className="  w-full h-[50%] m-1 ">
                          <p>{item.des}</p>
                        </div>
                      </div>
                      {/* Icon */}
                      <div className=" w-[40%] h-full m-1  flex items-center justify-end ">
                        <div className=" w-12 h-12 rounded-lg ">
                          <ArrowRightIcon className=" w-9 h-9  -rotate-45" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
            <div className="col-span-3 sm:m-4  ">
              <div className="grid grid-cols-5 p-4">
                <div className="col-span-5 flex">
                  <div className="col-span-3  mr-3 rounded-md">
                    <img src="/branches.png" alt="branchImage" />
                  </div>
                  <div className="col-span-2  rounded-md">
                    <img src="/branches2.png" alt="branchImage" />
                  </div>
                </div>
                <div className="col-span-5 flex">
                  <div className="col-span-2  mr-3 rounded-md overflow-hidden">
                    <img src="/branches3.png" alt="branchImage" />
                  </div>
                  <div className="col-span-3 rounded-md overflow-hidden">
                    <img src="/branches4.png" alt="branchImage" />
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
export default TeamBranches;
