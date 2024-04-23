import React, { useState } from "react";
import axios from "axios";
import "./ProductSearch.css";
import { useNavigate } from "react-router-dom";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .post("http://localhost:8081/search", { searchTerm })
      .then((response) => {
        if (response.data.length === 0) {
          setError("No products found");
        } else {
          setSearchResults(response.data);
          setError(null);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <button
        className="back-btn"
        style={{ position: "absolute", top: "32px" }}
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </button>
      <div className="product-search-container">
        <div className="searchbtn">
          <input
            className="product-search-input"
            type="text"
            placeholder="Type name of the product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="product-search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <ul className="product-list">
          {searchResults.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-description">{product.description}</div>
            </li>
          ))}
        </ul>
        {error && (
          <h3
            style={{
              textAlign: "center",
              boxShadow: "5px 6px 20px 1px gray",
              padding: "10px",
              width: "100%",
              color: "white",
              backgroundColor: "crimson",
              borderRadius: "8px",
            }}
          >
            No Product Found !!!
          </h3>
        )}
      </div>
    </>
  );
}

export default ProductSearch;
