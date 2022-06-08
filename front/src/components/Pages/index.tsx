import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Dashboard from './Dashboard';
import HomePage from './HomePage';


const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;