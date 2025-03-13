//import logo from './logo.svg';
import './modules/persondetails/PersonDetails.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFormData } from './FormDataContext';
import PersonDetails from './modules/persondetails/PersonDetails';



function App() {
  return (
      <Routes>
        <Route path="/" element={<PersonDetails />} />        
      </Routes>    
  );
}
export default App;
