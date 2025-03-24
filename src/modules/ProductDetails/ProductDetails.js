import { useState } from "react";
import "./ProductDetails.css";
import config from "../../config";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function ProductDetails() {
  const [productName, setProductName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setProductCategory] = useState("");
  const [licenseType, setlicenseType] = useState("");
  const [price, setProductPrice] = useState("");
  const [currency, setProductCurrency] = useState("");
  const [quantity, setProductQuantity] = useState("");
  const [supplier, setProdductSupplier] = useState("");
  const [availabilityStatus, setProductAvailabilityStatus] = useState("");
  const [deliveryOptions, setProductDeliveryOptions] = useState("");
  const [brandName, setProductBrandName] = useState("");
  const [modelNumber, setProductModelNumber] = useState("");
  const [discount, setProductDiscount] = useState("");
  const [countryofOrigin, setProductCountryofOrigin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      productName,
      companyName,
      category,
      licenseType,
      price,
      currency,
      quantity,
      supplier,
      availabilityStatus: Boolean(availabilityStatus),
      deliveryOptions,
      brandName,
      modelNumber,
      discount,
      countryofOrigin,
    };
    //alert("Product Details Submitted Successfully" + JSON.stringify(updatedFormData, null, 2));
    fetch(
      config.ProductServiceApiUrl,

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

    console.log("Form submitted");
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
          width: "50%",
          gap: 2,
          padding: "20px",
        }}
      >
        <Box sx={{flex: 1, display: "flex", justifyContent: "center", width: "600px"}}>
        <h1>Product Details</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Product Name"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              variant="outlined"
            />

            <TextField
              label="Company Name"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <TextField
              label="Product Category"
              id="productCategory"
              value={category}
              onChange={(e) => setProductCategory(e.target.value)}
              variant="outlined"
            />

            <TextField
              label="Licence Type"
              id="licenseType"
              value={licenseType}
              onChange={(e) => setlicenseType(e.target.value)}
              variant="outlined"
            />

            <TextField
              label="Price"
              id="productPrice"
              value={price}
              onChange={(e) => setProductPrice(e.target.value)}
            />

            <TextField
              label="Currency"
              id="productCurrency"
              placeholder="Currency"
              value={currency}
              onChange={(e) => setProductCurrency(e.target.value)}
              variant="outlined"
            />

            <TextField
              label="Quantity"
              id="productQuantity"
              value={quantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              variant="outlined"
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Supplier"
              variant="outlined"
              id="productSupplier"
              value={supplier}
              onChange={(e) => setProdductSupplier(e.target.value)}
            />

            <TextField
              label="Availability Status"
              variant="outlined"
              id="productAvailabilityStatus"
              value={availabilityStatus}
              onChange={(e) => setProductAvailabilityStatus(e.target.value)}
            />
            <TextField
              label="Delivery Options"
              variant="outlined"
              id="productDeliveryOptions"
              value={deliveryOptions}
              onChange={(e) => setProductDeliveryOptions(e.target.value)}
            />

            <TextField
              label="Brand Name"
              variant="outlined"
              id="productBrandName"
              value={brandName}
              onChange={(e) => setProductBrandName(e.target.value)}
            />
            <TextField
              label="Model Number"
              variant="outlined"
              id="productModelNumber"
              value={modelNumber}
              onChange={(e) => setProductModelNumber(e.target.value)}
            />

            <TextField
              label="Discount"
              variant="outlined"
              id="productDiscount"
              value={discount}
              onChange={(e) => setProductDiscount(e.target.value)}
            />

            <TextField
              label="Country of Origin"
              variant="outlined"
              id="productCountryofOrigin"
              value={countryofOrigin}
              onChange={(e) => setProductCountryofOrigin(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            width: "575px"
          }}>
          <Box sx={{ flex: 1 }}> </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;
