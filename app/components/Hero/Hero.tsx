"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Burger1 from "@/public/images/b1.png";
import Burger2 from "@/public/images/b2.png";
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Hero = () => {
  return (
    <div className='bg-orange-600'>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={true}
      >
        <div className="w-full h-[88vh] flex items-center justify-center flex-col bg-blue-950 clip_path">
          <div className="w-[70%] mt-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <div className="relative w-full md:w-auto max-h-[400px]">
              <Image
                src={Burger1}
                alt="burger"
                layout="responsive"
                width={800}
                height={600}
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="text-center ">
              <h1 className='text-[45px] md:text-[35px] sm:text-[45px] text-yellow-400 font-semibold'>
                Fast Food
              </h1>
              <h1 className='text-[45px] md:text-[100px] sm:text-[45px] leading-[5rem] uppercase text-white font-bold'>
                Best Burgers
              </h1>
              <p className=' text-orange-400 text-opacity-80 text-[12px] sm:text-[15px] md:text-[18px] mt-2'>
              Triple Meat, Double Cheddar, Lettuce, Tomato, Onion, Cucumber, Special Sauce </p>
            </div>
          </div>
        </div>


        <div className="w-full h-[88vh] flex items-center justify-center flex-col bg-blue-950 clip_path">
          <div className="w-[70%] mt-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <div className="relative w-full md:w-auto max-h-[400px]">
              <Image
                src={Burger2}
                alt="burger"
                layout="responsive"
                width={800}
                height={800}
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="text-center ">
              <h1 className='text-[45px] md:text-[35px] sm:text-[45px] text-yellow-400 font-semibold'>
                Fast Food
              </h1>
              <h1 className='text-[45px] md:text-[100px] sm:text-[45px] leading-[5rem] uppercase text-white font-bold'>
                Best Burgers
              </h1>
              <p className=' text-orange-400 text-opacity-80 text-[12px] sm:text-[15px] md:text-[20px] mt-2'>
              Meat, Cheddar, Lettuce, Tomato and a lor of Bacon </p>
            </div>
          </div>
        </div>



      </Carousel>
    </div>
  );
};

export default Hero;
