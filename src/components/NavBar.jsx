import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/navBar.css";
import { filterActions } from "./store/slices/filterSlice";

export default function NavBar() {
  const { filter } = useSelector((state) => state.filter);
  const { cart } = useSelector((state) => state.cart);
  const { setData } = filterActions;
  const dispatch = useDispatch();
  var inputValues = "";
  const navigation = useNavigate();
  function getSearchValue(e) {
    if (e) {
      inputValues = e.target.value;
    }
  }

  const setFilter = () => {
    dispatch(setData(inputValues));
    console.log(filter);
    console.log(cart);
    navigation("/products");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark stickyNav p-3">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            TECKS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="input-group mx-5 ">
              <div className="form-outline col-9">
                <input
                  id="search-input"
                  type="search"
                  className="form-control"
                  placeholder="What are you looking for?"
                  onChange={(event) => getSearchValue(event)}
                />
              </div>
              <button className="btn btn-dark col-1" onClick={setFilter}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <i className="fa-solid fa-cart-shopping">
                    <sub id="sub">{cart.length}</sub>
                  </i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
