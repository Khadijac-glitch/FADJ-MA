
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Views from './Views';

export default function page() {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <br />
    <Views/>
    </div>
  )
}
