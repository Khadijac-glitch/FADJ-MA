import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (group) => {
    // onSelect(group);
    setIsOpen(false); // Fermer le dropdown après la sélection
  };

  return (
    <div className="z-40">
      <button
        className="bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center border border-gray-500 "
        onClick={toggleDropdown}
      >
        Sélectionner un groupe
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-60 bg-white border rounded-lg shadow-xl z-40">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
          Antibiotiques
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe2')}
          >
            Antihypertenseurs
          </a>

          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
          Diabétes
          </a>

          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
          Maladies Cardiovasculaires 
          </a>

          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
        Produits à base de plantes
          </a>


          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
Crèmes et pommades cutanées
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
Gels et sprays anti-inflammatoires
          </a>

          {/* Ajoutez d'autres groupes selon vos besoins */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
