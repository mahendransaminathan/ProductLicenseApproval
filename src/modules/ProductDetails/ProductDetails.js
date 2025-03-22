import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const [productName, setProductName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [licenceType, setLicenceType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productSupplier, setProdductSupplier] = useState("");
  const [productAvailabilityStatus, setProductAvailabilityStatus] =
    useState("");
  const [productDeliveryOptions, setProductDeliveryOptions] = useState("");
  const [productBrandName, setProductBrandName] = useState("");
  const [productModelNumber, setProductModelNumber] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  const [productCountryofOrigin, setProductCountryofOrigin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  value={productCategory}
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
                  id="LicenceType"
                  placeholder="Licence Type"
                  value={licenceType}
                  onChange={(e) => setLicenceType(e.target.value)}
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
                  value={productPrice}
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
                  value={productCurrency}
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
                  value={productQuantity}
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
                  value={productSupplier}
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
                  value={productAvailabilityStatus}
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
                  value={productDeliveryOptions}
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
                  value={productBrandName}
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
                  value={productModelNumber}
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
                  value={productDiscount}
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
                  value={productCountryofOrigin}
                  onChange={(e) => setProductCountryofOrigin(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
