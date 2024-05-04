import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductDashboard from "./components/Products/ProductDashboard";
import ProductForm from "./components/Products/ProductForm";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./components/StoreOwner/ProductDetailsPage";

import ProductSearch from "./components/Products/ProductSearch";
// import Userview from "./components/Userview";
import HomeOne from "./components/HomeOne";

import CartOne from "./components/CartOne";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/productdashboard" element={<ProductDashboard />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetailsPage />}
          />{" "}
          <Route path="//products/userview" element={<HomeOne />} />
          <Route path="/cart" element={<CartOne />} />
          {/* Include productId parameter */}
          <Route path="/productsearch" element={<ProductSearch />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
