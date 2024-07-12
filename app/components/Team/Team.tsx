import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
        <span className='text-orange-600'>Our </span>
        <span className='text-blue-950'>expert </span>  
        <span className='text-red-600'>Chefs</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        <TeamCard image="/images/t1.avif" name="Jack Lee" position="Hitcheen Porter"/>
        <TeamCard image="/images/t22.avif" name="Kohn Doe" position="Executive chef"/>
        <TeamCard image="/images/t32.avif" name="Carl Lee" position="Head Chef"/>
        </div>
    </div>
  )
}

export default Team