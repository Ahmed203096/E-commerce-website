import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "./store/slices/cartSlice";
import "./css/cart.css";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  var totalPrice = 0;
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { removeFromCart } = cartActions;
  const remove = (item) => {
    dispatch(removeFromCart(item));
  };
  const goToProduct = () => {
    navigation("/products");
  };

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let j = i + 1;
      let current = cart[i];
      totalPrice += current.price;
    }
  }
  return (
    <div className="container">
      {cart &&
        cart.map((item) => {
          return (
            <div className="row">
              <div className="card d-flex flex-row flex-wrap justify-content-center p-5 align-items-center">
                <img className="col-md-4 cartImg" src={item.image}></img>
                <div className="col-md-4">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
                <div className="col-md-2 fw-bold fs-4 text-success mx-5 mx-sm-0">
                  LE {item.price}
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-outline-danger rounded-pill mx-5 mx-sm-0"
                    onClick={() => remove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      {cart.length > 0 && (
        <div className="p-5 vstack">
          <h4 className="fw-bold text-center">
            Total Price :{" "}
            <span className="text-danger fw-bold">L.E {totalPrice}</span>
          </h4>
          <div className="py-3">
            <button className="btn btn-success">Check out</button>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className="alert alert-secondary mt-5 mb-5 vstack">
          <h2 className="mb-5">The Cart is empty!!!</h2>
          <i className="fa-brands fa-opencart my-5 cartLogo"></i>
          <button className="btn btn-outline-success" onClick={goToProduct}>
            Shop now
          </button>
        </div>
      )}
    </div>
  );
}
