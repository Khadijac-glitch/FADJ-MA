import React from 'react';
import CustomCard from './CustomCard';
import "./Cards.css";


// import React from 'react'

export default function Cards() {
  return (
    
  <div className="alige cards flex  gap-5 ml-6 px-40 ">
      <CustomCard
      className="taille text-center rounded-sm border border-[#01A768] "
      imageSrc="/vert.png" 
      title="Bien"
      subtitle="Statut de l'inventaire"
      footerText="Afficher le rapport détaillé"
      footer="bg-[#01A768]"


    />

     <CustomCard
       className="text-center rounded-sm border border-[#FED600] "
       imageSrc="/jaune.png"
       title="4.800.432"
       subtitle="Revenu: janvier 2022"
       footerText="Afficher le rapport détaillé"
       footer="bg-[#FED600] "

     />

      <CustomCard
       className="text-center rounded-sm border border-[#03A9F5]"
       imageSrc="/bleu.png"
       title="298"
       subtitle="médicaments disponibles"
       footerText="Visiter l'inventaire"
       footer="bg-[#03A9F5] "
     />

     <CustomCard
       className="text-center rounded-sm border border-[#F0483E]"
       imageSrc="/rouge.png"
       title="01"
       subtitle="Pénurie de médicaments"
       footerText="Résoudre maintenant"
       footer="bg-[#F0483E]"

/>
   </div>
   
  )
};
