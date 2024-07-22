"use client";

import AjoutMedoc from "./AjoutMedoc";
import Cards from "./Cards";
import Carnet from"./Carnet";
export default function table() {
  return (
    <div className="flex justify-center ">
      <div className="align-center p-6 px-40 mx-0 ml-60">
        <div className="flex gap-40 relative inset-y-0 rigth-10 ">
          <div className="">
            <h1 className=" font-extrabold text-2xl text-dark-700">
              Tableau de bord
            </h1>
            <h6>Un aperçu rapide des données de votre pharmacie</h6> <br />
          </div>
          <div className="px-70 h-20">
            <AjoutMedoc />
          </div>
        </div> <br /> <br />
        {/* <Cards/>  <br /> <br /> */}
        <Carnet/>
        <br />
      </div>
    </div>
  );
}
