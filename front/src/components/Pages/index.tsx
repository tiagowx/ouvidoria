import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact';
import HomePage from './homePage';


const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;