import React, { useEffect } from "react";
import "./css/cards.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { getAllProducts } from "./store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "./css/sales.css";
import { cartActions } from "./store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Sales() {
  const swiper = useSwiper();

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { token } = useSelector((state) => state.token);
  const { addToCart } = cartActions;
  const allProducts = useSelector((state) => {
    // console.log(state.productList.allProducts);
    return state.productList.allProducts;
  });
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  var products = allProducts.filter((item) => {
    return item.discount > 10;
  });

  var newProducts = allProducts.filter((item) => {
    return item.discount < 6;
  });

  const addItem = (item) => {
    if (token) {
      dispatch(addToCart(item));
    } else {
      navigation("/login");
    }
  };

  return (
    <div className="mt-5 container">
      <h2 className="text-danger ml-5 text-start container mb-0 customTag">
        Flash Sales
      </h2>
      <Swiper
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={true}
        // pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="mb-5 p-5"
      >
        {products.map((item) => {
          return (
            <SwiperSlide>
              <div
                key={item.id}
                className="col-12 px-0 mt-3 card-container mx-auto"
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
            </SwiperSlide>
          );
        })}
      </Swiper>

      <h2 className="text-danger ml-5 text-start container mb-0 customTag mt-5">
        New Products
      </h2>
      <Swiper
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={true}
        // pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="mb-5 p-5"
      >
        {newProducts.map((item) => {
          return (
            <SwiperSlide>
              <div
                key={item.id}
                className="col-12 px-0 mt-3 card-container mx-auto"
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
