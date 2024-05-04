import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import "../styles/app.scss";
import Header from "./Header";
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear authentication state (e.g., remove token from local storage)
    localStorage.removeItem("token");
    // Navigate back to the login page
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="home-container">
        <button
          className="dashboard-btn"
          onClick={() => navigate("/productdashboard")}
        >
          Show Dashboard
        </button>
        <button
          className="create-products-btn"
          onClick={() => navigate("/productform")}
        >
          Create Products
        </button>

        <button
          className="products-detailsbtn"
          onClick={() => navigate("/product-details/:productId")}
        >
          Show Product Details
        </button>

        <button
          className="userview-btn"
          onClick={() => navigate("/products/userview")}
        >
          Userview
        </button>

        <button
          className="search-btn"
          onClick={() => navigate("/productsearch")}
        >
          Search For Products
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
