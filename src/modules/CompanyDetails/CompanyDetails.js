import React, { useState } from 'react'; 
import { useFormData } from '../../FormDataContext'; 
import './CompanyDetails.css'; // Adjust the path if the CSS file is in a different folder


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
      <div className='App'>
        <div className="company-details-container">
          <form className='company-details' onSubmit={handleSubmit}>
            <div className='headername'>
              <h1>Company Details</h1>
            </div>        
            <div className="company-details-child">
              <div className='company-Name-Label'>
                <label htmlFor="CompanyName">Company Name</label>
                </div>
                <div className='company-Name-Text'>
                <input
                  type="text"
                  id="companyname"
                  value={companyname}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder='Company Name'
                />         
                </div>             
                </div> 


                <div className='company-details-child'>
                  <div className='reg-Num-Label'>Registration Number
                    </div>
                  <div className='reg-Num-Text'>

                <input
                  type="text"
                  id="RegNumber"
                  value={RegNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder='Registration Number'
                />         
              </div>
              </div>

              <div className='company-details-child'>
                <div className='address-Label'>
            
                <label htmlFor="street">Address</label>
                </div>
                <div className='address-Text'>
                <input type="text" placeholder="Street Address" value={addressline} onChange={(e) => setAddressLine(e.target.value)} className="street" required />
                </div>
              </div>
              <div className='company-details-child'>
                <div className='city-Label'>
                <label htmlFor="companyCity">City</label>
                </div>                
                <div className='city-Text'>
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="companycity" required />        
              </div>
              </div>


              <div className='company-details-child'>
              <div className='state-Label'>
              <label htmlFor="companyState">State</label>
              </div>
              <div className='state-Text'>
              <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="companystate" required />              
              </div>  
              </div>

              <div className='company-details-child'>
              <div className='country-Label'>
            
                <label htmlFor="country">Country</label>
                </div>

                <div className='country-Text'>
              <select
                id="country"
                name="companyselectedCountry"
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

              <div className='company-details-child'>
              <div className='postal-Label'>
            
              <label htmlFor="Postal">Postal Code</label>
              </div>
              <div className='postal-Text'>
              <input type="text" placeholder="Postal / Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="companypostal" required />        
              </div>
              </div>

              <div className='company-details-child'>
            
              <div className='button-empty-space'></div>
              <div class="button-ccontainer">
                <button className='button-text'>Submit</button>
                </div>
            </div>
              
            </form>
            </div>

      </div>
    );
  }

  export default CompanyDetails;