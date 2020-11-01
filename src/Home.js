import React from "react";
import "./Home.css";
import banner from "./Assets/banner.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="products">
      <div className="products__banner">
        <img src={banner} alt="banner" />
      </div>
      <Products />
    </div>
  );
}

export default Home;
