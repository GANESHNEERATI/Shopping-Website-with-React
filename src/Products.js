import { Button } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import "./Products.css";
import { product__add } from "../src/features/CartSlice";
import { useDispatch } from "react-redux";
const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const trim = (value) => {
  var name = value;
  if (name.length > 20) {
    var shortname = name.substring(0, 150) + " ...";
    return shortname;
  }
};

const Products = () => {
  const { data, status } = useQuery("products", fetchProducts);
  const dispatch = useDispatch();
  const addToBasket = (product) => {
    dispatch(
      product__add({
        product_id: product.id,
        product_title: product.title,
        product_image: product.image,
        product_price: product.price,
      })
    );
  };

  return (
    <div className="products">
      <div className="products__rows">
        {status === "loading" && <div className="loader"> </div>}
        {status === "error" && (
          <div className="products__error">
            <h3>Error while fetching data</h3>
          </div>
        )}

        {status === "success" &&
          data.map((product) => (
            <div className="product">
              <img src={product.image} alt="img" />
              <div className="product__info">
                <h3>{product.title}</h3>
                <p>{trim(product.description)}</p>
                <h4>Price:{product.price}$</h4>
                <div className="product_Button">
                  <Button onClick={() => addToBasket(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
