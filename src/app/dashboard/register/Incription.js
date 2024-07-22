import React from 'react';

function FormFloatingLayoutExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="mb-4">
        <label htmlFor="floatingInputGrid" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          id="floatingInputGrid"
          className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="floatingSelectGrid" className="block text-sm font-medium text-gray-700">
          Works with selects
        </label>
        <select
          id="floatingSelectGrid"
          className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-label="Floating label select example"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

export default FormFloatingLayoutExample;
