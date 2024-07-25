"use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import SearchInput from './SearchInput';
// import AjoutMedoc from './AjoutMedoc';
// import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
// import "./Cards.css";

// export default function Tabmedo() {
//   const [medicaments, setMedicaments] = useState([
//     {
//       id: 1,
//       nom: 'DOLIPRANE',
//       groupe: 'groupe1',
//       stock: 5
//     },
//     {
//       id: 2,
//       nom: 'PARACETAMOL',
//       groupe: 'groupe1',
//       stock: 5
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [medicamentsPerPage] = useState(10); // Nombre de médicaments par page

//   const ajouterMedicament = (nouveauMedicament) => {
//     const nouvelId = medicaments.length + 1;
//     const medToAdd = {
//       id: nouvelId,
//       nom: nouveauMedicament.nom,
//       groupe: nouveauMedicament.groupe,
//       stock: nouveauMedicament.stock
//     };
//     setMedicaments([...medicaments, medToAdd]);
//   };

//   const filteredMedicaments = medicaments.filter((medicament) => {
//     if (searchTerm === '') {
//       return true; 
//     } else {
//       return medicament.nom.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//   });

//   const indexOfLastMedicament = currentPage * medicamentsPerPage;
//   const indexOfFirstMedicament = indexOfLastMedicament - medicamentsPerPage;
//   const currentMedicaments = filteredMedicaments.slice(
//     indexOfFirstMedicament,
//     indexOfLastMedicament
//   );

//   const handleSearchChange = (value) => {
//     setSearchTerm(value);
//     setCurrentPage(1); // Réinitialiser la page actuelle lors de la recherche
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredMedicaments.length / medicamentsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className=" tabe align-center w-full max-w-screen-lg p-6 px-5 mx-0 ml-80 ">
//         <div className="flex gap-80">
//           <div className=''>
//             <h1 className="font-extrabold text-2xl text-dark-700">Médicaments (298)</h1>
//             <h6 className='text-base'>Liste des médicaments disponibles à la vente</h6> <br />
//             <SearchInput onChange={handleSearchChange} />
//           </div>
//           <div className="button px-70 h-20">
//             <AjoutMedoc ajouterMedicament={ajouterMedicament} />
//           </div>
//         </div>
//         <br />
//   <div className=" table overflow-x-auto alige cards flex z-0 ">
//         <table className="w-full px-20 text-gray-900 rounded-md">
//           <thead className="bg-gray-50 border-b-2 border-gray-500 text-left text-bold font-semibold">
//             <tr>
//               <th scope="" className="px-6 py-3 font-medium">
//                 Nom du médicament
//               </th>
//               <th scope="" className="px-6 py-3 font-medium">
//                 ID du médicament
//               </th>
//               <th scope="" className="px-6 py-3 font-medium">
//                 Nom du groupe
//               </th>
//               <th scope="" className="px-6 py-3 font-medium">
//                 Stock en quantité
//               </th>
//               <th scope="" className="px-6 py-3 font-medium">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-500 text-gray-900">
//             {currentMedicaments.map(medicament => (
//               <tr key={medicament.id}>
//                 <td className="whitespace-nowrap bg-white px-6 py-4 text-sm text-black">
//                   <div className="flex items-center gap-3">
//                     <Image
//                       src="/logo.png"
//                       className="rounded-full"
//                       alt={`'s profile picture`}
//                       width={28}
//                       height={28}
//                     />
//                     <span>{medicament.nom}</span>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
//                   {medicament.id}
//                 </td>
//                 <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
//                   {medicament.groupe}
//                 </td>
//                 <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
//                   {medicament.stock}
//                 </td>
//                 <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
//                   Voir tous les détails <MdKeyboardDoubleArrowRight />
//                 </td>
//               </tr>
//             ))}
//              </tbody>
//           </table>
          
//             </div>  

//        <div className="flex justify-end mt-4">
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             className="px-3 py-1 hover:bg-gray-300 text-sm rounded-l">
//             Précédent
//           </button>
//           <button
//             onClick={nextPage}
//             disabled={currentPage === Math.ceil(filteredMedicaments.length / medicamentsPerPage)}
//             className="px-3 py-1 hover:bg-gray-300 text-sm rounded-r"
//           >
//             Suivant
//           </button>
//           </div>
      
//       </div>
//     </div>
//   );


// };

import React, { useState } from 'react';
import Image from 'next/image';
import SearchInput from './SearchInput';
import AjoutMedoc from './AjoutMedoc';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import "./Cards.css";

export default function Tabmedo() {
  const [medicaments, setMedicaments] = useState([
    {
      id: 1,
      nom: 'DOLIPRANE',
      groupe: 'groupe1',
      stock: 5
    },
    {
      id: 2,
      nom: 'PARACETAMOL',
      groupe: 'groupe1',
      stock: 5
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [medicamentsPerPage] = useState(10); // Nombre de médicaments par page

  const ajouterMedicament = (nouveauMedicament) => {
    const nouvelId = medicaments.length + 1;
    const medToAdd = {
      id: nouvelId,
      nom: nouveauMedicament.nom,
      groupe: nouveauMedicament.groupe,
      stock: nouveauMedicament.stock
    };
    setMedicaments([...medicaments, medToAdd]);
  };

  const filteredMedicaments = medicaments.filter((medicament) => {
    if (searchTerm === '') {
      return true; 
    } else {
      return medicament.nom.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const indexOfLastMedicament = currentPage * medicamentsPerPage;
  const indexOfFirstMedicament = indexOfLastMedicament - medicamentsPerPage;
  const currentMedicaments = filteredMedicaments.slice(
    indexOfFirstMedicament,
    indexOfLastMedicament
  );

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Réinitialiser la page actuelle lors de la recherche
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredMedicaments.length / medicamentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className=" tabe align-center w-full max-w-screen-lg p-6 px-5 mx-0 ml-80 ">
        <div className="flex gap-80">
          <div className=''>
            <h1 className="font-extrabold text-2xl text-dark-700">Médicaments (298)</h1>
            <h6 className='text-base'>Liste des médicaments disponibles à la vente</h6> <br />
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="button px-70 h-20">
            <AjoutMedoc ajouterMedicament={ajouterMedicament} />
          </div>
        </div>
        <br />
  <div className=" table overflow-x-auto alige cards flex z-0 ">
        <table className="w-full px-20 text-gray-900 rounded-md">
          <thead className="bg-gray-50 border-b-2 border-gray-500 text-left text-bold font-semibold">
            <tr>
              <th scope="" className="px-6 py-3 font-medium">
                Nom du médicament
              </th>
              <th scope="" className="px-6 py-3 font-medium">
                ID du médicament
              </th>
              <th scope="" className="px-6 py-3 font-medium">
                Nom du groupe
              </th>
              <th scope="" className="px-6 py-3 font-medium">
                Stock en quantité
              </th>
              <th scope="" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500 text-gray-900">
            {currentMedicaments.map(medicament => (
              <tr key={medicament.id}>
                <td className="whitespace-nowrap bg-white px-6 py-4 text-sm text-black">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      className="rounded-full"
                      alt={`'s profile picture`}
                      width={28}
                      height={28}
                    />
                    <span>{medicament.nom}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
                  {medicament.id}
                </td>
                <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
                  {medicament.groupe}
                </td>
                <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
                  {medicament.stock}
                </td>
                <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
                  Voir tous les détails <MdKeyboardDoubleArrowRight />
                </td>
              </tr>
            ))}
             </tbody>
          </table>
          
            </div>  

       <div className="flex justify-end mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 hover:bg-gray-300 text-sm rounded-l">
            Précédent
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredMedicaments.length / medicamentsPerPage)}
            className="px-3 py-1 hover:bg-gray-300 text-sm rounded-r"
          >
            Suivant
          </button>
          </div>
      
      </div>
    </div>
  );


};


