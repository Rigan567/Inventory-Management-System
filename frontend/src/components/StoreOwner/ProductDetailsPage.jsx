import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Destructure productId from route params
  const [productDetails, setProductDetails] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    quantity: "",
    movementType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = () => {
    axios
      .get(`http://localhost:8081/products/`) // Use productId to fetch specific product details
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/product-details/${productId}`, formData)
      .then((res) => {
        console.log(res.data);
        // Redirect or show success message
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <button
        className="back-btn"
        style={{ position: "absolute", top: "10px" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </button>
      <div>
        <h2>Product Details</h2>
        {productDetails ? (
          productDetails.map((product) => (
            <div key={productId}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
                <label>Type of Movement:</label>
                <select
                  name="movementType"
                  value={formData.movementType}
                  onChange={handleChange}
                >
                  <option value="GR">Goods Receipt</option>
                  <option value="GI">Goods Issue</option>
                  <option value="TP">Transfer Posting</option>
                  <option value="ST">Stock Transfer</option>
                  <option value="RD">Return Delivery</option>
                </select>
                <button type="submit">Update</button>
              </form>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProductDetailsPage;
