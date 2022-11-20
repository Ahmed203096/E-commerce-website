import React from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.css";

export default function Footer() {
  return (
    <div className="bg-dark text-light p-5 footer">
      <div className="container row">
        <a
          className="navbar-brand logo col-md-3 my-auto fs-2 text-center"
          href="#"
        >
          TECKS
        </a>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <ul className="nav flex-column col-md-4">
            <li className="fw-bold fs-3 text-primary">Go to</li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link ">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link ">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <p className="fw-bold fs-3 text-primary">Folow Us on social media</p>
          <div>
            <a
              href="#"
              className="fa-brands fa-facebook fs-5 text-light mx-3"
            ></a>
            <a
              href="#"
              className="fa-brands fa-twitter fs-5 text-light mx-3"
            ></a>
            <a
              href="#"
              className="fa-brands fa-instagram fs-5 text-light mx-3"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
