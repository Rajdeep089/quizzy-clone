import React from 'react';
import Cards from './Cards'

const Mainpage = () => {
  return (
    <div className='h-screen w-[88%] md:w-[60%] lg:w-[55%] absolute right-0'>
        <div className="container px-2 lg:px-0 text-3xl font-semibold pt-5">
        <h1 className='text-[#FEFEFE] '>Hey, <span className='text-[#EDFF87]'>Name!</span>
        </h1>
        <h1 className='text-[#FEFEFE]'>How's your prep for the <span className='text-[#EDFF87]'>Match SAT</span></h1>
        </div>
        <Cards/>
    </div>
  )
}

export default Mainpage