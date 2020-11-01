import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../src/features/CartSlice";
import { product__remove } from "../src/features/CartSlice";
import "./Mycart.css";
function Mycart() {
  const cart_info = useSelector(selectProduct);
  const dispatch = useDispatch();

  const trim = (value) => {
    var name = value;
    if (name.length > 10) {
      var shortname = name.substring(0, 20) + " ...";
      return shortname;
    }
  };

  const total_price = cart_info.reduce(
    (amount, item) => item.product_price + amount,
    0
  );

  const removeItem = (id) => {
    dispatch(product__remove({ id }));
  };

  return (
    <div className="cart__info">
      <div className="cart__info_subtotal">
        <h3>
          Subtotal({cart_info?.length}items):{total_price.toFixed(2)}$
        </h3>
        <Button>Proceed to Checkout</Button>
      </div>
      <div className="cart_container">
        {cart_info.map((product) => (
          <div className="cart__productinfo">
            <div className="cart__productinfo__left">
              <img src={product.product_image} alt="product_img" />
              <h3>{trim(product.product_title)}</h3>
            </div>
            <div className="cart__productinfo__right">
              <Button onClick={() => removeItem(product.product_id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mycart;
