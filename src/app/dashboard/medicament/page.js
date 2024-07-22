import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import Table from './table'
export default function page() {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <Sidebar/>
      <br />
      <Table/>
    </div>
  )
}
