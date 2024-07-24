import React from 'react'

export default function CardButton({text,bgColor,w}) {
  return (
    <div>
      <button className='h-8'style={{backgroundColor: bgColor, width:"402px"}}>
         {text}
      </button>
    </div>
  )
}
