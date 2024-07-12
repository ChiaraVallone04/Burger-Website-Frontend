import React from 'react'


const Footer = () => {
  return (
    <div className='pt-[2rem] pb-[2rem] bg-blue-950'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            <div>
                <h1 className='text-[22px] text-orange-600 font-semibold mb-[1.5rem] uppercase' >Contacto</h1>
                <p className='text-[15px] w-fit text-yellow-400 hover:text-red-600 cursor-pointer text-opacity-80 mb-[0.7rem]'>1133819031</p>
                <p className='text-[15px] w-fit text-yellow-400 hover:text-red-600 cursor-pointer text-opacity-80 mb-[0.7rem]'>chiara.vallone04@gmail.com</p>
                <p className='text-[15px] w-fit text-yellow-400 hover:text-red-600  cursor-pointer text-opacity-80 mb-[0.7rem]'>Argentina</p>
            </div>
        </div>
    </div>
  )
}

export default Footer