import React from 'react'

export default function CustomCart({className, title, subtitle, bold,nombre ,bod,groupe}) {
  return (
    <div className={className}
    style={{ width: "31.5rem", height:"9rem" }} >
    <div className='flex gap-20 border-b border-gray-400 px-6 h-12 pt-4'><strong className='font-bold mx-1'>{title}</strong>
    <p className='text-sm mx-6 text-base'>{subtitle}</p>
    </div>
    <div>
      <div className='flex gap-1 justify-items-center mx-8 pt-5'>
      <div className='flex flex-wrap gap-1 leading-1' >
          <strong className=' text-2xl font-bold'> {bold} </strong>
          <p className='text-gray-700 ext-base font-semibold'>{nombre} </p>
      </div>
      <div className='flex  flex-wrap pt-2'>
          <strong className='text-xl '>{bod}</strong>
          <p className='text-gray-700 text-base font-semibold'>{groupe}</p>
      </div>
      </div>
    </div>
  </div>
  )
}
