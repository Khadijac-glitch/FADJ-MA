import React from 'react'
import "../register/Inscription.css";
import Header from '../register/Header';
export default function Connecxion() {
    return (
        <div className=" justify-center">
          <Header/>
          <div className=" register max-w-3xl px-8 py-8">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-0">
              <div className="mb-4">
                
                 <button
                type="button"
                id="floatingInputGrid"
                className="bg-[#A7DBF5] inputs h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
                >Connectez-vous</button>
              </div>
      <div className="mb-4 relative right-20">
                
       <button
                type="button"
                id="floatingInputGrid"
                className="inputs h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
                > Inscrivez-vous</button>
      
              </div>
      
            </div>
           


      {/*  */}
            <div className="  grid grid-cols-3 md:grid-cols-2 gap-4"> {/* Additional email input */}
              <div className="mb-4">
                <label htmlFor="floatingInputGrid" className="block text-sm font-medium text-gray-700">
                 Adresse e-mail
                </label>
                <input
                  type="password"
                  id="floatingInputGrid"
                  className="input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="  grid grid-cols-3 md:grid-cols-2 gap-4"> {/* Additional email input */}
              <div className="mb-4">
                <label htmlFor="floatingInputGrid" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="floatingInputGrid"
                  className="input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
      <br />
      <p className='relative left-80'>Mot de passe oublié</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              <div className="mb-4 ">
                <button
                type="button"
                id="floatingInputGrid"
                className="bg-[#A7DBF5] input h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
                > Se connecter</button>
              </div>
            </div>
          </div>
        </div>
      );
}
