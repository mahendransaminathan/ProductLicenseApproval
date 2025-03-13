//import logo from './logo.svg';
import './modules/persondetails/PersonDetails.css';
import './modules/CompanyDetails/CompanyDetails.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFormData } from './FormDataContext';
import PersonDetails from './modules/persondetails/PersonDetails';
import CompanyDetails from './modules/CompanyDetails/CompanyDetails';



function App() {
  return (
      <Routes>
        <Route path="/" element={<PersonDetails />} />
        <Route path="/company" element={<CompanyDetails />} />

      </Routes>    
  );
}
export default App;
