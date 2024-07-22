"use client";
import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import Dropdown from './Dropdown';

const AjoutMedoc = ({ ajouterMedicament }) => {
  const [showModal, setShowModal] = useState(false);
  const [nom, setNom] = useState('');
  const [id, setId] = useState('');
  const [groupe, setGroupe] = useState('');
  const [stock, setStock] = useState('');

  const closeModal = () => {
    // Réinitialiser les états après la fermeture du modal
    setShowModal(false);
    setNom('');
    setId('');
    setGroupe('');
    setStock('');
  };

  const handleSave = () => {
    const nouveauMedicament = {
      nom: nom,
      id: id,
      groupe: groupe,
      stock: stock
    };
    // Appeler la fonction pour ajouter le médicament dans Tables.js
    ajouterMedicament(nouveauMedicament);
    // Fermer le modal après avoir ajouté le médicament
    closeModal();
  };

  return (
    <>
      <button
        className="flex bg-gray-50 text-black-700 py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        <IoAdd className="w-6 h-6" />
        <p className="pt-0">Nouveau médicament</p>
      </button>
      <br />

      <Dropdown />
      <div className={showModal ? 'block' : 'hidden'}>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-md mx-auto my-6">
            <div className="relative bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Ajout </h3>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom du médicament
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Nom du médicament"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ID du médicament
                  </label>
                  <input
                    type="text"
                    id="id"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="ID du médicament"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="groupe"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom du groupe
                  </label>
                  <input
                    type="text"
                    id="groupe"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Nom du groupe"
                    value={groupe}
                    onChange={(e) => setGroupe(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock en quantité
                  </label>
                  <input
                    type="number"
                    id="stock"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Stock en quantité"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </form>
              <div className="mt-8 flex justify-end">
                <button
                  className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-black-100 bg-slate-200 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={closeModal}
                >
                  Annuler
                </button>
                <button
                  className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-black-100 bg-slate-200 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleSave}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjoutMedoc;
