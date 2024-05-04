import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <h2 style={{ textAlign: "center" }}>Inventory Management System</h2>
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
