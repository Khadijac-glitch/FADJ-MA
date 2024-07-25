import React from 'react'
import "./Cards.css";
import Image from 'next/image';

export default function CustomCard({ className, imageSrc, title, subtitle, footerText ,footer}) {
  return (

         <div className={className} style={{ width:'15rem', height: '10.62rem' }}>
           <br />
           <div>
            <div className="flex justify-center">
               <div className="text-center">
                 <Image
                   src={imageSrc}
                   width={40}
                   height={40}
                   className=" inline-block align-middle"
             />{' '}
             <br />
             <h1 className="text-2xl inline-block align-middle ml-2 font-bold text-black">{title}</h1>
              </div>
         </div>
             <div className="text-center text-md font-semibold ">{subtitle}</div >
        </div>
          <br />
          <div className={footer}>
         {footerText}
          </div>
       </div>

  )
}
