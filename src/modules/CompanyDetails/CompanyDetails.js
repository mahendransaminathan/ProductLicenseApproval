import React, { useState } from "react";

import "./CompanyDetails.css"; // Adjust the path if the CSS file is in a different folder
import { v4 as uuidv4 } from "uuid";
import config from "../../config";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

function CompanyDetails() {
  //const { formData, setFormData } = useFormData();
  const [id, setID] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [eircode, setZip] = useState("");

  //  const navigate = useNavigate();
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    setID(uuidv4());
    const updatedFormData = {
      id,
      companyname,
      registrationNumber,
      address,
      city,
      state,
      country,
      eircode,
    };
    alert(
      "Company Details Submitted Successfully" + JSON.stringify(id, null, 2)
    );
    //setFormData(updatedFormData);
    //      navigate('/Company');

    fetch(config.CompanyServiceApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "100%",
          maxWidth: "500px",
          padding: 3,
          borderRadius: 2,          
        }}
      >
        <div className="headername">
          <h1>Company Details</h1>
        </div>

        <TextField
          label="Company Name"
          value={companyname}
          onChange={(e) => setCompanyName(e.target.value)}
          variant="outlined"
        />

        <TextField
          label="RegNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          variant="outlined"
        />

        <TextField
          label="Street Address"
          value={address}
          onChange={(e) => setAddressLine(e.target.value)}
          variant="outlined"
        />

        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
        />

        <TextField
          label="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant="outlined"
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel id="country">Country</InputLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
            variant="outlined"
          >
            <MenuItem value="Select a Country">Select a Country</MenuItem>
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
          label="Postal Code"
          value={eircode}
          onChange={(e) => setZip(e.target.value)}
          variant="outlined"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default CompanyDetails;
