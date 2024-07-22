import React from 'react'
import Link from "next/link";
import { MdOutlineTranslate } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar() {
  return (
    <div>
      <nav class="bg-white-800 shadow-md">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
        
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-2 w-100">
          <input type="text" class="relative inset-y-0 left-60 w-full md:w-96  rounded-md border-0 py-1.5 pl-7 pr-20 bg-slate-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Rechercher n&apos;importe quoi ici"/>
          </div>
        </div>
      </div>

      {/*  */}
<div>
    
</div>
      {/*  */}

      <div class=" flex absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
        <div  class=" flex gap-2 relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <div className=' relative inset-y-2 right-10 flex gap-1 text-zinc-900 hidden md:flex hidden sm:block hover:text-zinc-900  '>
          <MdOutlineTranslate />
            <h1 className='text-xs'>Français(France)</h1>
            <MdKeyboardArrowDown />
          </div>
          <div className=' relative inset-y-0 left-20 bg-yellow-200 rounded-full h-4 w-4'fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"></div>
          <div>
          <h2 className='px-20 text-sm font-bold text-zinc-900'>Bonjour</h2>
          <p className="text-xs text-zinc-900">14 janvier 2022   22:45:02</p>

          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">

      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Fadj-Ma</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Modou Fall </a>
      <Link href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Tableau de bord</Link>
      <Link href="dashboard/medicament" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Médicaments</Link>
    </div>
  </div>
</nav>

    </div>
  )
}
