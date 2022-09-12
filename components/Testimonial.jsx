import React, {useRef, useState} from 'react';
import Image from 'next/image';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import {StarIcon} from '@heroicons/react/solid';

const testimonial = [
  {
    authorName: 'Kelly Williams',
    avatar: '/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  },
  {
    authorName: 'Christiano',
    avatar: '/ronaldo.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Messi, we are friend, but I have to say that I play football better than him.',
  },
  {
    authorName: 'Messi',
    avatar: '/messi.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Ronaldo, we are friend, but I have to say that I play football better than him.',
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="section bg-gray-50 mb-0 pb-4  ">
        <div className=" w-full text-center">
          {/* Canh giữa */}
          {/*ĐÁNH GIÁ KHÁCH HÀNG */}
          <div className="mx-3  md:mx-16 mb-6 md:mb-14  ">
            <div className="text-center flex justify-start md:justify-center">
              <h2 className="text-red-500 title  sm:leading-none ">
                ĐÁNH GIÁ TỪ&nbsp;
              </h2>

              <h2 className=" text-white text-stroke text-stroke-red title  ">
                KHÁCH HÀNG
              </h2>
            </div>
            <div className="md:mx-auto  border-b-4 border-red-500 w-[35%] md:border-b-8 md:w-[160px] py-2 md:py-4"></div>
          </div>

          {/*  */}
          {/* SLIDER */}
          <div className="my-12 w-full flex  ">
            <div className="hidden md:block md:w-[15%] bg-white  slimg bg-[url('../public/Quotesection.png')] bg-right opacity-25 "></div>
            {/* SLIDE BEGINS */}
            <div className=" w-[100%] md:w-[70%] ml-0 md:mx-auto ">
              <Splide
                options={{
                  rewind: true,
                  gap: '1rem',
                }}
                aria-label="My Favorite Images"
              >
                {testimonial.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="testimonial-content     ">
                      <div className="comment-content flex-1">
                        {item.comment}
                      </div>

                      <div className="user-content -mt-8  ">
                        <Image
                          src={item.avatar}
                          height="64px"
                          width="64px"
                          className="avatar rounded-full leading-10 object-cover"
                          alt="avatar"
                        ></Image>
                        <p className="author leading-10"> {item.authorName}</p>
                        <p className="role leading-10 ">{item.role}</p>
                        <div className="rating mx-auto leading-10     ">
                          <p>{item.rating}</p>
                        </div>
                        <div className="rating mx-auto   flex justify-center">
                          <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                          <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                          <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                          <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                          <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className=" md:w-[15%] bg-white  slimg bg-[url('../public/Quotesection.png')] bg-left opacity-25 "></div>
          </div>
          {/* Testimonial */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
