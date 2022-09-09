import React from 'react';

import {ArrowRightIcon, ArrowNarrowUpIcon} from '@heroicons/react/solid';
import Link from 'next/link';
const branchName = [
  {
    name: 'SuZu Studio',
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
  {
    name: 'NAE Software',
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
  var itemNum = 0;
  return (
    <>
      <div className="section  text-left px-3 md:px-[var(--commonPadding)] ">
        <div className="team-content  w-full    ">
          {/* Canh lề trái */}
          {/* ĐỘI NGŨ của chúng tôi  */}
          <div className="team-title    ">
            <div className="text-left flex">
              <h2 className="text-red-500 title  sm:leading-none ">
                ĐỘI NGŨ &nbsp;
              </h2>

              <h2 className=" text-white text-stroke text-stroke-red title  ">
                CỦA CHÚNG TÔI
              </h2>
            </div>
            <div className=" border-b-4 border-red-500 w-[50%] md:border-b-8 md:w-[160px] py-2 md:py-4 mb-8 md:mb-16"></div>
          </div>

          {/* Team List and Images */}

          <div className="team-list-images w-full     md:flex">
            <div className="team-list md:w-[40%]  flex flex-col justify-between   ">
              {branchName.map((item, index) => (
                // LIST ITEM----->
                <div className="list_item  cursor-pointer   " key={index}>
                  <Link href="/">
                    <div className="list-content-icon flex justify-between transit  ">
                      <div className="list-content   ">
                        <div>
                          <p className=" text-3xl leading-9 font-semibold ">
                            {item.name}
                          </p>
                          <p className="item-des ">{item.des}</p>
                        </div>
                      </div>
                      <div>
                        <div className=" list-icon  flex items-center align-middle   p-2 rounded-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="white"
                            className="w-6 h-6 -rotate-45"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                // End 0f LIst Item
              ))}
            </div>
            {/*  */}

            <div className="team-images md:w-[60%]  ">
              {/* Image SECTION---> */}
              <div className="col-span-3    ">
                <div className="grid grid-cols-5">
                  <div className="col-span-5 flex order-2">
                    <div className="col-span-3  mr-3 rounded-md">
                      <img src="/branches.png" alt="branchImage" />
                    </div>
                    <div className="col-span-2  rounded-md">
                      <img src="/branches2.png" alt="branchImage" />
                    </div>
                  </div>
                  <div className="col-span-5 flex order-1">
                    <div className="col-span-2  mr-3 rounded-md overflow-hidden">
                      <img src="/branches3.png" alt="branchImage" />
                    </div>
                    <div className="col-span-3 rounded-md overflow-hidden">
                      <img src="/branches4.png" alt="branchImage" />
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamBranches;
