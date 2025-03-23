import { useState } from "react";
import "./ProductDetails.css";
import config from "../../config";

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
    fetch(config.ProductServiceApiUrl,

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
    <div className="ProductApp">
      <div className="product-details-container">
        <form className="product-details" onSubmit={handleSubmit}>
          <h1>Product Details</h1>
          <div className="product-details-left">
            <div className="product-name">
              <div className="product-name-label">
                <label htmlFor="productName">Product Name</label>
              </div>
              <div className="product-name-text">
                <input
                  type="text"
                  id="productName"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
            </div>
            <div className="company-name">
              <div className="company-name-label">
                <label htmlFor="companyName">Company Name</label>
              </div>
              <div className="company-name-text">
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
            <div className="product-category">
              <div className="product-category-label">
                <label htmlFor="productCategory">Product Category</label>
              </div>
              <div className="product-category-text">
                <input
                  type="text"
                  id="productCategory"
                  placeholder="Product Category"
                  value={category}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </div>
            </div>
            <div className="Licence-Type">
              <div className="Licence-Type-Label">
                <label htmlFor="LicenceType">Licence Type</label>
              </div>
              <div className="Licence-Type-Text">
                <input
                  type="text"
                  id="licenseType"
                  placeholder="Licence Type"
                  value={licenseType}
                  onChange={(e) => setlicenseType(e.target.value)}
                />
              </div>
            </div>
            <div className="product-price">
              <div className="product-price-label">
                <label htmlFor="productPrice">Product Price</label>
              </div>
              <div className="product-price-text">
                <input
                  type="text"
                  id="productPrice"
                  placeholder="Product Price"
                  value={price}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="product-currency">
              <div className="product-currency-label">
                <label htmlFor="productCurrency">Product Currency</label>
              </div>
              <div className="product-currency-text">
                <input
                  type="text"
                  id="productCurrency"
                  placeholder="Product Currency"
                  value={currency}
                  onChange={(e) => setProductCurrency(e.target.value)}
                />
              </div>
            </div>
            <div className="product-quantity">
              <div className="product-quantity-label">
                <label htmlFor="productQuantity">Product Quantity</label>
              </div>
              <div className="product-quantity-text">
                <input
                  type="text"
                  id="productQuantity"
                  placeholder="Product Quantity"
                  value={quantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="product-details-right">
            <div className="product-supplier">
              <div className="product-supplier-label">
                <label htmlFor="productSupplier">Product Supplier</label>
              </div>
              <div className="product-supplier-text">
                <input
                  type="text"
                  id="productSupplier"
                  placeholder="Product Supplier"
                  value={supplier}
                  onChange={(e) => setProdductSupplier(e.target.value)}
                />
              </div>
            </div>
            <div className="product-availabilitystatus">
              <div className="product-availabilitystatus-label">
                <label htmlFor="productAvailabilityStatus">
                  Product Availability Status
                </label>
              </div>
              <div className="product-availabilitystatus-text">
                <input
                  type="text"
                  id="productAvailabilityStatus"
                  placeholder="Product Availability Status"
                  value={availabilityStatus}
                  onChange={(e) => setProductAvailabilityStatus(e.target.value)}
                />
              </div>
            </div>
            <div className="product-deliveryOptions">
              <div className="product-deliveryOptions-label">
                <label htmlFor="productDeliveryOptions">
                  Product Delivery Options
                </label>
              </div>
              <div className="product-deliveryOptions-text">
                <input
                  type="text"
                  id="productDeliveryOptions"
                  placeholder="Product Delivery Options"
                  value={deliveryOptions}
                  onChange={(e) => setProductDeliveryOptions(e.target.value)}
                />
              </div>
            </div>

            <div className="product-brandname">
              <div className="product-brandname-label">
                <label htmlFor="productBrandName">Product Brand Name</label>
              </div>
              <div className="product-brandname-text">
                <input
                  type="text"
                  id="productBrandName"
                  placeholder="Product Brand Name"
                  value={brandName}
                  onChange={(e) => setProductBrandName(e.target.value)}
                />
              </div>
            </div>
            <div className="product-modelNumber">
              <div className="product-modelNumber-label">
                <label htmlFor="productModelNumber">Product Model Number</label>
              </div>
              <div className="product-modelNumber-text">
                <input
                  type="text"
                  id="productModelNumber"
                  placeholder="Product Model Number"
                  value={modelNumber}
                  onChange={(e) => setProductModelNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="product-discount">
              <div className="product-discount-label">
                <label htmlFor="productDiscount">Product Discount</label>
              </div>
              <div className="product-discount-text">
                <input
                  type="text"
                  id="productDiscount"
                  placeholder="Product Discount"
                  value={discount}
                  onChange={(e) => setProductDiscount(e.target.value)}
                />
              </div>
            </div>
            <div className="product-countryofOrigin">
              <div className="product-countryofOrigin-label">
                <label htmlFor="productCountryofOrigin">
                  Product Country of Origin
                </label>
              </div>
              <div className="product-countryofOrigin-text">
                <input
                  type="text"
                  id="productCountryofOrigin"
                  placeholder="Product Country of Origin"
                  value={countryofOrigin}
                  onChange={(e) => setProductCountryofOrigin(e.target.value)}
                />
              </div>
            </div>

            <div className="product-submit">
              <button type="submit">Submit</button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
