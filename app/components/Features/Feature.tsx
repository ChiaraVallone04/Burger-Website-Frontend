import React from 'react'
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image from 'next/image';

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
            Burgers made with <br />  <span className='text-red-600'>love</span>  
            <span className='text-blue-950'> and</span>
            <span className='text-orange-600'> Care</span>
        </h1>
        <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img1} alt='burger1' className='rounded-lg'/>
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                    Meat Burger
                </h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in sapiente placeat magni dolores hic? Temporibus enim iusto ea totam illo, fugit, itaque obcaecati delectus dolores quod eligendi consectetur dignissimos.
                </p>
            </div>

            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img2} alt='burger1' className='rounded-lg'/>
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                    "Healthy one"
                </h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in sapiente placeat magni dolores hic? Temporibus enim iusto ea totam illo, fugit, itaque obcaecati delectus dolores quod eligendi consectetur dignissimos.
                </p>
            </div>

            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img3} alt='burger1' className='rounded-lg'/>
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                    Chicken Burger
                </h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in sapiente placeat magni dolores hic? Temporibus enim iusto ea totam illo, fugit, itaque obcaecati delectus dolores quod eligendi consectetur dignissimos.
                </p>
            </div>

        </div>

       

        
    </div>
  )
}

export default Feature