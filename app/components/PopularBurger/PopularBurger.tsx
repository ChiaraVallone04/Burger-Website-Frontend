import React from 'react';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const img1Path = "/images/img1.jpg";
const img2Path = "/images/img222.jpg";
const img3Path = "/images/img3.jpg";
const img4Path = "/images/img4.jpg";
const img5Path = "/images/img5.jpg";
const img6Path = "/images/img6.jpg";
const img7Path = "/images/img7.jpg";
const img8Path = "/images/img8.jpg";

const hoverStyles = 'hover:shadow-xl transform hover:scale-105 transition duration-300';

const burgers = [
  { id: 1, name: 'Classic Burger', image: img1Path },
  { id: 2, name: 'Cheeseburger', image: img2Path },
  { id: 3, name: 'Bacon Burger', image: img3Path },
  { id: 4, name: 'Chicken Burger', image: img4Path },
  { id: 5, name: 'Egg Burger', image: img5Path },
  { id: 6, name: 'Bacon Jam Burger', image: img6Path },
  { id: 7, name: 'Bacon Ham Burger', image: img7Path },
  { id: 8, name: 'Only Braves', image: img8Path },
];

const Burger = ({ name, image }: { name: string, image: string }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-64 mx-auto ${hoverStyles} sm:w-72 md:w-80 lg:w-64 xl:w-72`}>
    <div className='relative w-full h-56 sm:h-64 md:h-72'>
      <Image
        src={image}
        alt={name}
        layout='fill'
        objectFit='cover'
        className='rounded-t-lg'
      />
    </div>
    <div className='p-4'>
      <h2 className='text-lg font-bold text-orange-600 mb-2 text-center uppercase'>{name}</h2>
      <div className='flex flex-col items-center'>
        <button className='bg-red-600 hover:bg-orange-600 text-white py-1.5 px-3 rounded-lg mb-2'>Order Now</button>
        <span className='text-blue-950'>Price: $9.99</span>
      </div>
    </div>
  </div>
);

const PopularBurger = () => {
  return (
    <div className='pt-12 pb-12 mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-2'>
      <h1 className='heading mb-8 text-center text-2xl'>
        <span className='text-red-600'>Our </span>
        <span className='text-blue-950'>Popular</span> 
        <span className='text-orange-600'> Burgers</span>
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 gap-y-12'>
        {burgers.map(burger => (
          <Burger key={burger.id} name={burger.name} image={burger.image} />
        ))}
      </div>
    </div>
  );
};

export default PopularBurger;
