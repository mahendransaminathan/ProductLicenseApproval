import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';

function FormPage() {
  let [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [eircode, setEirCode] = useState('');
  const [country, setCountry] = useState('');
  const [emailID, setEmailID] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const navigate = useNavigate();
    // Submit handler
    const handleSubmit = (e) => {
      e.preventDefault();  // Prevent form from reloading the page
      //firstname = "John";
      const formData = {
        firstname,
        lastname,
        addressline1,
        addressline2,
        city,
        eircode
      };
      navigate('/next');
      //alert("Form Submitted:" + JSON.stringify(formData, null, 2));
      // You can replace the above line with any API call or other logic.
    };

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Product License Approval</h1>
        <form className='form-container'>
          <div className='form-group'>
            <label htmlFor="firstname">First Name*</label>
            <input type="text" id="firstname" value={firstname} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder='Enter First Your Name'/>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            placeholder='Enter the Country'/>            
          </div>
          <div className='form-group'>
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" id="lastname" value={lastname} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder='Enter Your Last Name'/>
            <label htmlFor="emailID">EmailID*</label>
            <input type="text" id="emailID" value={emailID} 
            onChange={(e) => setEmailID(e.target.value)} 
            placeholder='Enter Your EmailID'/>
          </div>
          <div className='form-group'>
            <label htmlFor="addressline1">Address Line1</label>
            <input type="text" id="addressline1" value={addressline1} 
            onChange={(e) => setAddressLine1(e.target.value)} 
            placeholder='Enter the Address Line'/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            placeholder='Enter Your Phone Numbr'/>
          </div>
          <div className='form-group'>
            <label htmlFor="addressline2">Address Line2</label>
            <input type="text" id="addressline2" value={addressline2} 
            onChange={(e) => setAddressLine2(e.target.value)} 
            placeholder='Enter the address line2'/>
          </div>
          <div className='form-group'>
            <label htmlFor="city">City</label>
            <input type="text" id="City" value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder='Enter Your city'/>
          </div>
          <div className='form-group'>
            <label htmlFor="EirCode">Eircode</label>
            <input type="text" id="eircode" value={eircode} 
            onChange={(e) => setEirCode(e.target.value)} 
            placeholder='Enter the EirCode'/>
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>          
          </form>                
      </header>
    </div>   
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/next" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
