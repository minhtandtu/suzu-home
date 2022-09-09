import React from 'react';
import Image from 'next/image';

import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import {Fragment, useState} from 'react';

import SlideMenu from './SlideMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" absolute w-full  ">
        <div className=" fixed-top shadow-md w-full h-16 flex justify-between md:px-16 ">
          <div className="my-2 pl-10">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <Image
                className="cursor-pointer "
                src="/logo.png"
                width="95px"
                height="48px"
                alt="LogoImage"
              />
            </Link>
          </div>
          {/* Menu Icon */}
          <div className="my-4 mr-10 flex">
            <p className="mr-2 text-sm font-medium text-gray-700 md:text-base ">
              Menu
            </p>
            <MenuIcon
              className="w-7 h-7  cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        {/* Header + SuzuGroup background image  */}
        <div className="absolute w-full -z-10 bg-repeat-y">
          <img
            src="/bg_intrdocut.png"
            className="w-screen h-screen opacity-10"
            alt="backgroundImage"
          />
        </div>
        {/* Slide-over */}
        <SlideMenu open={open} setOpen={setOpen}></SlideMenu>
      </div>
    </>
  );
};

export default Header;
