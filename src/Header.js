import React from "react";
import logo from "./Assets/logo.png";
import "./Header.css";
import cart from "./Assets/cart.png";
import SearchIcon from "@material-ui/icons/Search";

import { useSelector } from "react-redux";
import { selectProduct } from "./features/CartSlice";
import { Link } from "react-router-dom";

function Header() {
  const basket = useSelector(selectProduct);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__image" />
      </Link>
      <div className="header__search">
        <input type="text" placeholder="search a product" />
        <SearchIcon />
      </div>
      <div className="header_navigation">
        <ul>
          <li>
            <Link to="/Mycart" className="mycart__link">
              Mycart
            </Link>
          </li>

          <li>Sign in</li>
          <li>
            <div className="header__cart">
              <img src={cart} alt="cart" className="header__cartimage" />
              <h3>{basket?.length}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
