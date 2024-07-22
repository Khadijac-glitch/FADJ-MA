import React from 'react';
import Image from "next/image";
function Views() {
  return (
    <div className='bg-gray-50 shadow'>
      <div className='mx-3 py-10 flex justify-end'>
        <div className='w-full lg:w-8/12 flex gap-5'>
          <div className='w-1/2 lg:w-5/12 bg-gray-50 '>
          <div class="flex relative inset-x-0 bottom-10 sm:justify-end sm:absolute sm:inset-x-0 sm:bottom-0">
    <h1 class="text-lg sm:text-xs">Médicaments {" > "}</h1>
    <strong class="text-lg sm:text-xs ml-1">Tous les détails</strong>
</div>

         <Image src="/rectangle.png" width={300} height={600}/>
          </div>
          <div className='w-1/2 lg:w-7/12 bg-gray-50 p-4 leading-10'>
         <h1> <strong>Augmentin 625 Duo compprimé</strong></h1>
          <strong>Composition </strong>
          <p className='text-sm'>Amoycillin-500MG + Clavulanic Acid-122MG</p>
          <strong>Fabriquant/comerçant</strong>
          <p className='text-sm'>GlaxoSmithKlin Pharmaceutical ldt</p>
          <strong>Type de consommation</strong>
          <p className='text-sm'>Oral</p>
          <strong>Date d’expiration</strong>
          <p className='text-sm'>25 Janvier</p>
          </div>
         
        </div>
       
      </div>

{/* <div class="mx-3 py-10 flex flex-col sm:flex-row justify-end">
    <div class="w-full lg:w-8/12 flex gap-5">
        <div class="w-1/2 lg:w-5/12 bg-gray-50 ">
            <div class="flex absolute inset-x-0 bottom-10">
                <h1 class="text-xl">médicaments {" > "}</h1>
                <strong class="text-xl">Tous les détails</strong>
            </div>
            <img src="/rectangle.png" alt="Placeholder" class="block w-full" width="300" height="600" />
        </div>
        <div class="w-1/2 lg:w-7/12 bg-gray-50 p-4 leading-10">
            <h1><strong>Augmentin 625 Duo comprimé</strong></h1>
            <strong>Composition</strong>
            <p class="text-sm">Amoxicillin-500MG + Clavulanic Acid-125MG</p>
            <strong>Fabricant/Commerçant</strong>
            <p class="text-sm">GlaxoSmithKline Pharmaceuticals Ltd.</p>
            <strong>Type de consommation</strong>
            <p class="text-sm">Oral</p>
            <strong>Date d’expiration</strong>
            <p class="text-sm">25 Janvier</p>
        </div>
    </div>
    <div class="flex justify-end sm:hidden mt-3">
        <h1 class="text-xl">médicaments {" > "}</h1>
        <strong class="text-xl">Tous les détails</strong>
    </div>
</div> */}

      
      <div class="mx-3 py-10 w-full sm:w-1/2 lg:w-10/12 relative lg:left-96 sm:right-0">
    <h1><strong>Description :</strong></h1>
    <p>Augmentin 625 DuoComprimé est utilisé pour traiter les infections bactériennes du corps qui affectent <br />
        la peau, les tissus mous, les poumons, les oreilles, les voies urinaires et les sinus nasaux. Il convient de <br />
        mentionner que les infections virales comme la grippe et le rhume ne sont pas traitées par ce médicament.</p>
</div>

    </div>
  );
}

export default Views;
