import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/cards.css";
import { getAllProducts } from "./store/slices/productSlice";
import { cartActions } from "./store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const allProducts = useSelector((state) => {
    // console.log(state.productList.allProducts);
    return state.productList.allProducts;
  });
  var products = [];
  var notFoundFlag = false;
  const navigation = useNavigate();
  const { filter } = useSelector((state) => state.filter);
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.token);

  const { addToCart } = cartActions;
  const dispatch = useDispatch();
  if (filter) {
    var firstLevelFilter = allProducts.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
    let secondLevelFilter = allProducts.filter((item) => {
      return item.subCategory.includes(filter.toLowerCase());
    });
    let thirdLevelFilter = allProducts.filter((item) => {
      return item.category.toLowerCase().includes(filter.toLowerCase());
    });

    var products = [
      ...new Set([
        ...firstLevelFilter,
        ...secondLevelFilter,
        ...thirdLevelFilter,
      ]),
    ];
    if (products.length > 0) {
      notFoundFlag = false;
    } else {
      notFoundFlag = true;
    }
  } else {
    products = allProducts;
  }
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const addItem = (item) => {
    if (token) {
      dispatch(addToCart(item));
    } else {
      navigation("/login");
    }
  };

  return (
    <div className="container p-5 mx-auto">
      <h1 className="text-center m-5">Products</h1>
      <div className="row mx-auto">
        {products &&
          products.map((item) => {
            return (
              <div
                key={item.id}
                className="col-12 col-sm-5 col-lg-4 px-0  mt-3 card-container mx-auto"
              >
                <div className="card product-card mt-5 mx-3">
                  <div className="p-0 pd-md-3">
                    <img
                      src={item.image}
                      className="card-img-top cardImage my-0 my-md-2"
                    />
                  </div>
                  <div className="card-body p-0 pd-md-3">
                    <p className="card-text my-0 my-md-2 fs-3 fw-bold">
                      {item.title}
                    </p>
                    <p className="card-text my-0 my-md-2 text-black-50">
                      {item.desc}
                    </p>
                    <div d-flex justify-content-around>
                      <p className=" my-0 my-md-2 text-danger fs-4">
                        EGP {item.price - (item.price * item.discount) / 100}
                        {item.discount > 0 && (
                          <span className="prev-price my-0 my-md-2 text-black-50 fs-5">
                            {item.price}
                          </span>
                        )}
                      </p>
                    </div>
                    {item.discount > 0 && (
                      <div className="discount text-danger fw-bold">
                        -{item.discount}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center btn-parent">
                  <div className="col-10 buy">
                    <button
                      onClick={() => {
                        addItem(item);
                      }}
                      className="btn btn-outline-danger text-center mt-2"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {notFoundFlag && (
          <div className="alert alert-danger fs-2 fw-bold">
            Product not Found
          </div>
        )}
      </div>
    </div>
  );
}
