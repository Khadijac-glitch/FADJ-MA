// // SearchInput.js

import { IoIosSearch } from 'react-icons/io';

export default function SearchInput({ onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative flex items-center gap-2">
      <input
        type="text"
        className="w-full md:w-96 rounded-md border-0 py-1.5 bg-slate-200 placeholder-text-zinc-700 text-sm sm:text-sm sm:leading-6"
        placeholder="Rechercher dans l'inventaire des médicaments."
        onChange={handleInputChange}
      />
      <IoIosSearch className="absolute left-80 text-gray-700 pointer-events-none" />
    </div>
  );
}
