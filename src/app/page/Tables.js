"use client";

import AjoutMedoc from "./AjoutMedoc";
import Carnet from"./Carnet";
import "./Cards.css";
export default function Tables() {
  return (
    <div className="flex justify-center ">
      <div className="align-center p-6 px-40: mx-0 ml-60">
        <div className="tabe flex gap-40">
          <div className="bord">
            <h1 className=" font-extrabold text-2xl text-dark-700">
              Tableau de bord
            </h1>
            <h6>Un aperçu rapide des données de votre pharmacie</h6> <br />
          </div>
          <div className="charge px-70 h-20">
            <AjoutMedoc />
          </div>
        </div>
        <Carnet/>
        <br />
      </div>
    </div>
  );
}
