//import logo from './logo.svg';

import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './modules/HomePage/HomePage.js';
         
import PersonDetails from './modules/PersonDetails/PersonDetails.js';
import CompanyDetails from './modules/CompanyDetails/CompanyDetails.js';
import ProductDetails from './modules/ProductDetails/ProductDetails.js';

function App() {
  return (
    <Router>
      <div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/person">Person</Link>
          <Link to="/company">Company</Link>
          <Link to="/product">Product</Link>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/person" element={<PersonDetails />} />
            <Route path="/company" element={<CompanyDetails />} />
            <Route path="/product" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
