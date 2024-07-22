import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (group) => {
    onSelect(group);
    setIsOpen(false); // Fermer le dropdown après la sélection
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
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
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe1')}
          >
            Groupe 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-slate-200 hover:text-black"
            onClick={() => handleSelect('groupe2')}
          >
            Groupe 2
          </a>
          {/* Ajoutez d'autres groupes selon vos besoins */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
