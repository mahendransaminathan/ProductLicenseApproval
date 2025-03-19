//import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';

import PersonDetails from './modules/PersonDetails/PersonDetails.js';
import CompanyDetails from './modules/CompanyDetails/CompanyDetails.js';



function App() {
  return (
      <Routes>
        <Route path="/" element={<PersonDetails />} />
        <Route path="/company" element={<CompanyDetails />} />

      </Routes>    
  );
}
export default App;
