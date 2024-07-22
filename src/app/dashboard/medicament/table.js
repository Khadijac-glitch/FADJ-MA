"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SearchInput from './SearchInput';
import AjoutMedoc from './AjoutMedoc';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function table() {
  const [medicaments, setMedicaments] = useState([
    {
      id: 1,
      nom: 'DOLIPRANE',
      groupe: 'groupe1',
      stock: 5
    },
    {
      id: 2,
      nom: 'ADAPRANE',
      groupe: 'groupe1',
      stock: 5
    }
    // Ajoutez d'autres données de médicaments selon votre besoin
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
      return true; // Pas de filtre lorsque le terme de recherche est vide
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
      <div className="align-center w-full max-w-screen-lg bg-gray-100 p-6 px-5 mx-0 ml-80 ">
        <div className="flex gap-80">
          <div>
            <h1 className="text-bold text-2xl text-blue-500">Médicaments (298)</h1>
            <h6>Liste des médicaments disponibles à la vente</h6> <br />
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="px-70 h-20">
            <AjoutMedoc ajouterMedicament={ajouterMedicament} />
          </div>
        </div>
        <br />
  <div className="overflow-x-auto">
        <table className="w-full text-gray-900">
          <thead className="bg-gray-50 border-b-2 border-gray-700 text-left text-bold font-semibold">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Nom du médicament
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                ID du médicament
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Nom du groupe
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Stock en quantité
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-900">
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
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-l"
          >
            Précédent
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredMedicaments.length / medicamentsPerPage)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-r"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );



  // return (
  //   <div className="w-full flex justify-center">
  //     <div className="w-full max-w-screen-lg bg-gray-100 p-6 px-5 mx-0 sm:ml-4 md:ml-8 lg:ml-80">
  //       <div className="flex flex-col sm:flex-row items-center gap-4">
  //         <div className="flex-1">
  //           <h1 className="text-bold text-2xl text-blue-500">Médicaments (298)</h1>
  //           <h6>Liste des médicaments disponibles à la vente</h6>
  //           <br />
  //           <SearchInput onChange={handleSearchChange} />
  //         </div>
  //         <div className="flex-1 px-0 sm:px-4 md:px-8">
  //           <AjoutMedoc ajouterMedicament={ajouterMedicament} />
  //         </div>
  //       </div>
  //       <br />
  //       <div className="overflow-x-auto">
  //         <table className="w-full text-gray-900">
  //           {/* Header de table */}
  //           <thead className="bg-gray-50 border-b-2 border-gray-700 text-left text-bold font-semibold">
  //           <tr>
  //             <th scope="col" className="px-6 py-3 font-medium">
  //               Nom du médicament
  //            </th>
  //            <th scope="col" className="px-6 py-3 font-medium">
  //              ID du médicament
  //            </th>
  //            <th scope="col" className="px-6 py-3 font-medium">
  //              Nom du groupe
  //            </th>
  //            <th scope="col" className="px-6 py-3 font-medium">
  //              Stock en quantité
  //            </th>
  //            <th scope="col" className="px-6 py-3 font-medium">
  //              Action
  //            </th>
  //          </tr>
  //        </thead>

  //         </table>
  //         <tbody className="divide-y divide-gray-200 text-gray-900">
  //           {currentMedicaments.map(medicament => (
  //             <tr key={medicament.id}>
  //               {/* Contenu de la table */}
  //               <td className="whitespace-nowrap bg-white px-6 py-4 text-sm text-black">
  //                <div className="flex items-center gap-3">
  //                   <Image
  //                     src="/logo.png"
  //                     className="rounded-full"
  //                     alt={`'s profile picture`}
  //                     width={28}
  //                     height={28}
  //                   />
  //                   <span>{medicament.nom}</span>
  //                </div>
  //               </td>
  //               <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
  //                 {medicament.id}
  //               </td>
  //               <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
  //                 {medicament.groupe}
  //               </td>
  //               <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
  //                {medicament.stock}
  //              </td>
  //              <td className="whitespace-nowrap bg-white px-6 py-4 text-sm">
  //                Voir tous les détails <MdKeyboardDoubleArrowRight />
  //              </td>
            
  //             </tr>
  //           ))}
  //         </tbody>
  //       </div>
  //       <div className="flex justify-end mt-4">
  //         <button
  //           onClick={prevPage}
  //           disabled={currentPage === 1}
  //           className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-l"
  //         >
  //           Précédent
  //         </button>
  //         <button
  //           onClick={nextPage}
  //           disabled={currentPage === Math.ceil(filteredMedicaments.length / medicamentsPerPage)}
  //           className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-r"
  //         >
  //           Suivant
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  

};


