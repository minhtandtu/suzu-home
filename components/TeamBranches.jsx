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
      <div className="section h-96 text-left bg-red-100 bg-opacity-50 ">
        <div className="box-container w-[50%] mx-auto   ">
          <div className="text p-10 bd bg-yellow-100 bg-opacity-50">
            <h2 className="  "> BOX 1</h2>
          </div>
          <div className="list-icon p-10 bdd bg-green-100 bg-opacity-50">
            <h3 className="  text-blue-500">BOX 2</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamBranches;
