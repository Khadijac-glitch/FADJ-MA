"use client";
import React, { useState } from "react";
import "./Inscription.css";
import Header from "./Header";
function FormFloatingLayoutExample() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };

  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
  };

  // State pour les valeurs sélectionnées pour jour, mois et année
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Fonctions de gestion des changements pour chaque input
  const handleDayChange = (e) => {
    const value = e.target.value;
    // Valider que le jour est compris entre 1 et 31
    if (/^\d*$/.test(value) && value <= 31) {
      setDay(value);
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    // Valider que le mois est compris entre 1 et 12
    if (/^\d*$/.test(value) && value <= 12) {
      setMonth(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    // Valider que l'année est compris entre 1 et 100
    if (/^\d*$/.test(value) && value <= 100) {
      setYear(value);
    }
  };
  return (
    <div className=" justify-center">
      <Header />
      <div className=" register max-w-3xl px-8 py-8">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-0">
          <div className="mb-4">
            <button
              type="button"
              id="floatingInputGrid"
              className="inputs h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              Connectez-vous
            </button>
          </div>
          <div className="mb-4 relative right-20">
            <button
              type="button"
              id="floatingInputGrid"
              className="bg-[#A7DBF5] inputs h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {" "}
              Inscrivez-vous
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 my-4">
          {" "}
          {/* Checkbox group */}
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              {/* Checkbox input */}
              <input
                type="radio"
                className=""
                checked={isChecked1}
                onChange={toggleCheckbox1}
                id="checkbox1"
              />
            </div>
            <span className="ml-2 text-sm ">Homme</span>
          </label>
          <label className="flex items-center cursor-pointer ml-6">
            <div className="relative">
              {/* Checkbox input */}
              <input
                type="radio"
                className="rounded-full"
                checked={isChecked2}
                onChange={toggleCheckbox2}
                id="checkbox2"
              />
            </div>
            <span className="ml-2 text-sm">Femme</span>
          </label>
        </div>
        {/* Date inputs */}

        <div className="grid grid-cols-3 gap-0 mb-4">
          <div>
            <label
              htmlFor="floatingSelectGrid"
              className="block text-sm font-medium text-gray-700"
            >
              Date de naissance
            </label>
            <select
              id="floatingSelectGrid"
              className="w-20 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-label="Floating label select example"
              onChange={handleDayChange}
            >
              <option>JJ</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="relative right-20">
            <label
              htmlFor="floatingSelectGrid"
              className="block text-sm font-medium text-gray-50"
            >
              Date de naissance
            </label>
            <select
              id="floatingSelectGrid"
              className="input-small w-20  mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-label="Floating label select example"
              onChange={handleMonthChange}
            >
              <option>MM</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="relative right-40">
            <label
              htmlFor="floatingSelectGrid"
              className="block text-sm font-medium text-gray-50"
            >
              Date de naissance
            </label>
            <select
              id="floatingSelectGrid"
              className="input-small w-20  mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-label="Floating label select example"
              onChange={handleYearChange}
            >
              <option>AAA</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        {/* Additional input sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="floatingInputGrid"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="floatingInputGrid"
              className="input-small mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4 relative right-20">
            <label
              htmlFor="floatingInputGrid"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="floatingInputGrid"
              className="input-small mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="  grid grid-cols-3 md:grid-cols-2 gap-4">
          {" "}
          {/* Additional email input */}
          <div className="mb-4">
            <label
              htmlFor="floatingInputGrid"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmer
            </label>
            <input
              type="password"
              id="floatingInputGrid"
              className="input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Additional email input */}
          <div className="mb-4 ">
            <label
              htmlFor="floatingInputGrid"
              className="block text-sm font-medium text-gray-700"
            >
              {/* S'inscrire */}
            </label>
            <button
              type="button"
              id="floatingInputGrid"
              className="bg-[#A7DBF5] input h-10 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {" "}
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormFloatingLayoutExample;
