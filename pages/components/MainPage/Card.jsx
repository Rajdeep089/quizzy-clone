import React from 'react'

const Card = ({last, date, graph, title, des}) => {
  return (
    <div className='bg-[#414141] bg-opacity-50 text-[#FEFEFE] rounded-md w-[90%] p-3 mx-auto max-w-[280px] lg:scale-125'>
        <p className='text-[#7D827E] text-sm'>{last}</p>
        <p className='text-[#7D827E] text-sm'>{date}</p>
        <p className='text-6xl'>{graph}</p>
        <h1 className='text-3xl'>{title}</h1>
        <p className='text-sm'>{des}</p>
    </div>
  )
}

export default Card