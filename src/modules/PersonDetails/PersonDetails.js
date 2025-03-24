import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";

import "./PersonDetails.css"; // Adjust the path if the CSS file is in a different folder
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function PersonDetails() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [addressline, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [dob, setDob] = useState("");
  const [companyName, setCompanyName] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(""); // To store selected company's ID


  useEffect(() => {
    // Function to fetch data from backend
    const fetchData = async () => {
      
        const response = await fetch(config.PLAServiceCompanyNamesApiUrl, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
        );
        const result = await response.json();
        setCompanyName(result);
        //alert("Company Names Fetched Successfully" + JSON.stringify(result, null, 2));
      };

    
    // Fetch data every 60 seconds
    const interval = setInterval(fetchData, 20000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  //  const navigate = useNavigate();
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    //firstname = "John";
    const updatedFormData = {
      
      firstname,
      lastname,
      addressline,
      phone,
      city,
      state,
      dob,
      country,
      zip,
      // companyName,
    };

    
    navigate("/Company");

    fetch(config.PLAServiceApiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((errorMessage) => {
            throw new Error(`HTTP ${response.status}: ${errorMessage}`);
          });
        }
        return response.json();
      })
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Fetch Error:", error.message));

    // You can replace the above line with any API call or other logic.
    console.log("Form Submitted:" + JSON.stringify(updatedFormData, null, 2));
  };

  return (
    <div className="PersonApp">
      <div className="personal-details-container">
        <form className="person-details" onSubmit={handleSubmit}>
          <div className="personalheadername">
            <h1>Personal Details</h1>
          </div>

          <div className="personal-details-child">

            
              <TextField
                fullWidth
                label="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Last Name"                
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
              />
            
            <div className="gender-grid">
              <label className="malegender">
                <input
                  type="checkbox"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </label>

              <label className="femalegender">
                <input
                  type="checkbox"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>
            </div>
          

              <TextField
                fullWidth
                label="Phone"                
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="phone-textbox"
                variant="outlined"
              />
            
              <TextField
                fullWidth
                label="Date of Birth"                
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="dob-textbox"
                variant="outlined"
              />
            

            
              <TextField
                fullWidth
                label="Street Address"                         
                value={addressline}
                onChange={(e) => setAddressLine(e.target.value)}
                className="address-textbox"
                variant="outlined"
              />
            

            
              <TextField
                fullWidth
                label="City"                
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="city"
                variant="outlined"
              />
            
              <TextField
                fullWidth
                label="State"                               
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="state"
                variant="outlined"
              />
            
            
            <FormControl fullWidth className="select-dropdown">
              <InputLabel>Country</InputLabel>
              <Select
                className="country"
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <MenuItem value="SelectCountry">Select a Country</MenuItem>
                <MenuItem value="UnitedStates">United States</MenuItem>
                <MenuItem value="UnitedKingdom">United Kingdom</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
              </Select>
            </FormControl>

            
              <TextField
                fullWidth
                label="Postal Code"                              
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="postal"
                variant="outlined"
              />
            

            <FormControl fullWidth className="company-dropdown">
              <Select
                label="Company"
                className="company"                
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                {companyName.map((item) => {
                  // alert("Company Names Fetched Successfully" + JSON.stringify(item, null, 2));
                  return <MenuItem key={item.id} value={item.id}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            
              <Button type="submit" variant="contained" 
              className="buttontext">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonDetails;
