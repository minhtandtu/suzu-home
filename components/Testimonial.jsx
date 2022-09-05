import React, {useRef, useState} from 'react';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Testimonial = () => {
  return (
    <>
      <div className="section mb-4 border border-gray-50">
        <div className=" w-full text-center">
          {/* Canh giữa */}
          <div className="  w-full ml-8">
            <div className="   md:flex md:w-[750px] text-left md:mx-auto ">
              <h2 className="text-red-500 title tracking-tighter leading-relaxed sm:leading-none ">
                ĐÁNH GIÁ TỪ &nbsp;
              </h2>
              <h2 className="text-white text-stroke text-stroke-red title  ">
                KHÁCH HÀNG
              </h2>
            </div>
            <div className="  border-b-4 border-red-500 w-[150px] md:border-b-8 md:w-[256px] py-4 md:mx-auto"></div>
          </div>
          {/*  */}
          {/* SLIDER */}
          <div className="my-12 w-full flex">
            <div className=" md:w-[20%] bg-white  m-8 slimg bg-[url('../public/Quotesection.png')] bg-center opacity-25 "></div>
            <div className=" w-[100%] md:w-[60%] mx-auto slimg">
              <Splide
                options={{
                  rewind: true,
                  gap: '1rem',
                }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <img
                    className="slimg border border-gray-100"
                    src="Quotesection.png"
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    className="slimg"
                    src="Quotesection2.png"
                    alt="Image 2"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    className="slimg"
                    src="Quotesection3.png"
                    alt="Image 3"
                  />
                </SplideSlide>
              </Splide>
            </div>
            <div className=" md:w-[20%] bg-white  m-8 slimg bg-[url('../public/Quotesection.png')] bg-center opacity-25 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
