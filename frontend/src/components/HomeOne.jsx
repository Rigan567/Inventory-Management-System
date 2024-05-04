import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Header from "./Header";
import "./HomeOne.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ name, id, price, description, handler }) => {
  return (
    <div className="productCard">
      <p>{name}</p>
      <h4>${price}</h4>
      <p>{description}</p>
      <button
        onClick={() => handler({ name, price, id, quantity: 1, description })}
      >
        Add to Cart
      </button>
    </div>
  );
};

const HomeOne = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };

  return (
    <>
      <Header />
      <button
        className="back-btn"
        onClick={() => {
          navigate("/home");
        }}
      />
      <div className="home">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            id={product.id}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

export default HomeOne;
