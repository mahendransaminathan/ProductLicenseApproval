//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFormData } from './FormDataContext';

function FormPage() {

  const {formData, setFormData} = useFormData();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [eircode, setEirCode] = useState('');
  const [country, setCountry] = useState('');
  const [emailID, setEmailID] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
//  const navigate = useNavigate();
    // Submit handler
    const handleSubmit = (e) => {
      e.preventDefault();  // Prevent form from reloading the page
      //firstname = "John";
      const updatedFormData = { 
        ...formData,
        firstname,
        lastname,
        addressline1,
        addressline2,
        city,
        country,
        eircode,
        phoneNumber,
        emailID      
      };

      setFormData(updatedFormData);
//      navigate('/Company');

    fetch("https://plaservice-hbhbd3eteqbwbfc3.northeurope-01.azurewebsites.net/api/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedFormData)
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(errorMessage => {
            throw new Error(`HTTP ${response.status}: ${errorMessage}`);
          });
        }
        return response.json();
      })
      .then(data => console.log("Success:", data))
      .catch(error => console.error("Fetch Error:", error.message));
      alert("Form Submitted:" + JSON.stringify(updatedFormData, null, 2));
      // You can replace the above line with any API call or other logic.
    };

  return (
    
    <div className="container">
      <header className="App-header">
        
        <form className='space-y-4' onSubmit={handleSubmit}>
        
          <label htmlFor="Heading" className="heading-label">
            Submit your Details for License Approval
          </label>
          <div className='form-group'>
            <div className='form-item'>
              <label htmlFor="firstname">First Name*</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='Enter Your First Name'
              />
            </div>
            <div className='form-item'>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="selectedCountry"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Select a Country">Select a Country</option>
                <option value="UnitedStates">United States</option>
                <option value="UnitedKingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <div className='form-item'>
              <label htmlFor="lastname">Last Name*</label>                
              <input type="text" id="lastname" value={lastname} 
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Enter Your Last Name'/>
            </div>
            <div className='form-item'>              
              <label htmlFor="emailID">EmailID*</label>
              <input type="text" id="emailID" value={emailID} 
              onChange={(e) => setEmailID(e.target.value)} 
              placeholder='Enter Your EmailID'/>
            
            </div>
          </div>
          <div className='form-group'>
            <div className='form-item'>
            <label htmlFor="addressline1">Address Line1</label>
            <input type="text" id="addressline1" value={addressline1} 
            onChange={(e) => setAddressLine1(e.target.value)} 
            placeholder='Enter the Address Line'/>
            </div>
            <div className='form-item'>
            <label htmlFor="phoneNumber">Phone Number</label>            
            <input type="text" id="phoneNumber" value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            placeholder='Enter Your Phone Numbr'/>
            </div>
          </div>
          
          <div className='form-group'>
            <div className='form-item'>

            <label htmlFor="addressline2">Address Line2</label>
            <input type="text" id="addressline2" value={addressline2} 
            onChange={(e) => setAddressLine2(e.target.value)} 
            placeholder='Enter the address line2'/>
            </div>
            <div className='form-item'>
            <label htmlFor="city">City</label>
            <input type="text" id="City" value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder='Enter Your city'/>
            </div>
            <div className='form-item'>
            <label htmlFor="EirCode">Eircode</label>
            <input type="text" id="eircode" value={eircode} 
            onChange={(e) => setEirCode(e.target.value)} 
            placeholder='Enter the EirCode'/>
            </div>   
          </div>
                  
             
          <div class="button-container">
            <button type="submit">Submit</button>          
          </div>

          </form>                
      </header>
    </div>   
  );
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<FormPage />} />
        
      </Routes>
    
  );
}
export default App;
