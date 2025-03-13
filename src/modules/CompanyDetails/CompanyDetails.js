import React, { useState } from 'react'; 
import { useFormData } from '../../FormDataContext'; 

function CompanyDetails() {

    const {formData, setFormData} = useFormData();
    const [companyname, setCompanyName] = useState('');
    const [RegNumber, setRegistrationNumber] = useState('');
    const [addressline, setAddressLine] = useState('');  
    const [city, setCity] = useState('');  
    const [country, setCountry] = useState('');  
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    
    
  //  const navigate = useNavigate();
      // Submit handler
      const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form from reloading the page
        //firstname = "John";
        const updatedFormData = { 
          ...formData,
          companyname,
            RegNumber,
          addressline,          
          city,
          state,          
          country,
          zip          
        };
  
        setFormData(updatedFormData);
  //      navigate('/Company');
  
      fetch("https://companyservices.azurewebsites.net/api/company", {
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
        console.log("Form Submitted:" + JSON.stringify(updatedFormData, null, 2));
  
      };
  
    return (
      
      <div className="container">
        <header className="App-header">
          
          <form className='space-y-4' onSubmit={handleSubmit}>
          
            <label htmlFor="Heading" className="heading-label">
              Company Details
            </label>
            
            <div className="name-grid">
              <label htmlFor="CompanyName">Company Name</label>
              
                <input
                  type="text"
                  id="companyname"
                  value={companyname}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder='Company Name'
                />                                          
              </div>
  
              <div className="reg-grid">
              <label htmlFor="RegNumber">Registration Number</label>
              
                <input
                  type="text"
                  id="RegNumber"
                  value={RegNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder='Registration Number'
                />         
              </div>
  
            <div className="address-grid">
          
              <label htmlFor="street">Address</label>
              <input type="text" placeholder="Street Address" value={addressline} onChange={(e) => setAddressLine(e.target.value)} className="border p-2 w-full" required />
                     
              <label htmlFor="City">City</label>                    
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="city" required />        
              <label htmlFor="State">State</label>
              <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="state" required />              
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

              <label htmlFor="Postal">Postal Code</label>
              <input type="text" placeholder="Postal / Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="postal" required />        
              </div>
        

            <div class="button-container">
                <button type="submit">Submit</button>          
            </div>
                    
  
            </form>                
        </header>
      </div>   
    );
  }

  export default CompanyDetails;