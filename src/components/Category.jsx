import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/category.css";
import { filterActions } from "./store/slices/filterSlice";

export default function Category() {
  const query = useLocation();
  let path = query.pathname;
  const fieldRef = useRef();
  const { filter } = useSelector((state) => state.filter);

  const { setData } = filterActions;
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const setFilterToAcc = () => {
    dispatch(setData("accessories"));
    if (path == "/products") {
      fieldRef.current.scrollIntoView({ behavior: "smooth" });
    }
    navigation("/products");
  };

  const setFilterToLaptop = () => {
    dispatch(setData("laptops"));
    if (path == "/products") {
      fieldRef.current.scrollIntoView({ behavior: "smooth" });
    }
    navigation("/products");
  };
  const setFilterToMobile = () => {
    dispatch(setData("mobiles"));
    if (path == "/products") {
      fieldRef.current.scrollIntoView({ behavior: "smooth" });
    }
    navigation("/products");
  };

  return (
    <div className="row container m-auto mt-5">
      <h1 className="text-center mb-5">Search Categories</h1>
      <div
        onClick={setFilterToLaptop}
        className="card category col-11 col-md-5 col-lg-3 mx-auto mt-3 p-2 shadow"
      >
        <img src="./images/laptops.png" className="card-img-top col-12" />
        <div className="card-body">
          <h2 className="card-title text-light">Laptops</h2>
        </div>
      </div>

      <div
        onClick={setFilterToAcc}
        className="card category col-11 col-md-5 col-lg-3 mx-auto mt-3 p-2 d-flex justify-content-center shadow"
      >
        <img
          src="./images/keyboard3.png"
          className="card-img-top col-12 mt-5 "
        />
        <div className="card-body">
          <h2 className="card-title text-light mt-5">Accessories</h2>
        </div>
      </div>

      <div
        onClick={setFilterToMobile}
        className="card category col-11 col-md-5 col-lg-3 mx-auto mt-3 p-2 shadow"
      >
        <img src="./images/mobiles.png" className="card-img-top col-12 mt-5" />
        <div className="card-body">
          <h2 className="card-title text-light mt-5">Mobiles</h2>
        </div>
      </div>
      <div ref={fieldRef}></div>
    </div>
  );
}
