import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import { useFormData } from '../../FormDataContext'; 
import './PersonDetails.css'; // Adjust the path if the CSS file is in a different folder


function PersonDetails() {

    const navigate = useNavigate();

    const {formData, setFormData} = useFormData();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [addressline, setAddressLine] = useState('');  
    const [city, setCity] = useState('');  
    const [country, setCountry] = useState('');  
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [dob, setDob] = useState("");
    
    
  //  const navigate = useNavigate();
      // Submit handler
      const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form from reloading the page
        //firstname = "John";
        const updatedFormData = { 
          ...formData,
          firstname,
          lastname,
          addressline,
          phone,
          city,
          state,
          dob,
          country,
          zip          
        };
  
        setFormData(updatedFormData);
        navigate('/Company');
  
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
        console.log("Form Submitted:" + JSON.stringify(updatedFormData, null, 2));
  
      };
  
    return (
      <div className="App">
        <div className="personal-details-container">
         
          <form className='person-details' onSubmit={handleSubmit}>
          
            <label htmlFor="Heading" className="heading-label">
              License Approval Form
            </label>
            
            <div className="personal-details-child">
              <div className="name-label">
                <label htmlFor="PersonsName">Person's Name</label>
              </div>

              <div classname = 'firstnamediv'>
                <input type="text" id="first" value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First'
                />
              </div>
              <div classname = 'lastnamediv'>
                <input type="text" id="last" value={lastname} 
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last'/>
              </div>
              </div>
              
            <div className="personal-details-child">
              <div classname = 'gender-label'>
              <label htmlFor="Gender">Gender</label>
              </div>

              <div className="gender-grid">
              <label><input type="checkbox" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}  /> Male</label>
              <label><input type="checkbox" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
              </div>
            </div>

            <div className="personal-details-child">
              <div className='phone-label'>
              <label htmlFor="phone">Phone</label>
              </div>
              <div className='phone-text'>
              <input type="tel" placeholder="Phone (### ### ####)" value={phone} onChange={(e) => setPhone(e.target.value)} className="phone-textbox" />
              </div>
            </div>
  
            
          <div className="personal-details-child">
          <div className='dob-label'>
          <label htmlFor="dob">Date of Birth</label>
          </div>
          <div className='dob-text'>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="dob-textbox" />
          </div>
          </div>
  
              <div className="personal-details-child">

              <div className='address-label'>
              <label htmlFor="street">Address</label>
              </div>

              <div className='address-text'>
              <input type="text" placeholder="Street Address" value={addressline} onChange={(e) => setAddressLine(e.target.value)} className="address-textbox"  />
              </div>       
            </div>
            
            <div className="personal-details-child">  
              <div> </div>

              <div className='city-text'>
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="city" />        
              </div>
              <div className='state-text'>
              <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="state" />              
              </div>
              </div>

              <div className='personal-details-child'>
                <div></div>
                <div className='select-dropdown'>
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
              
              
              <div className='postal-text'>
              <input type="text" placeholder="Postal / Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="postal" />        
              </div>
              
              </div>

              <div className='personal-details-child'>
                <div></div>
                <div class="button-container">
                  <button type="submit">Submit</button>          
                </div>
                </div>
  
            </form>       
            </div>     
      </div>   
    );
  }

  export default PersonDetails;