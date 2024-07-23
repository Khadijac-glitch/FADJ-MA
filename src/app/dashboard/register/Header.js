import React from 'react'
import Image from "next/image";
import "./Inscription.css";
export default function Header() {
  return (
    <div>
      <div className=" font-bold text-2xl w-screen h-30 bg-slate-700 text-center ">
        <h1 className='text-white pt-4'>Bienvenue chez votre pharmacie</h1><br />
        <div className='img flex gap-3'>
        <Image src="/logo.png" width={40} height={40} className="" />
    <h1 className='text-white'>Fadj-Ma</h1>
        </div>
      </div>
    </div>
  )
}
