import "./ProductList.scss";
import axios from "axios";
import bees from "../../images/bee__bg.png";

import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";

import { useState, useEffect } from "react";
import { ProductsCarousel } from "../ProductCarousel";

import { BsCartPlus, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {
  IoMdCloseCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import { AiOutlineDoubleRight, AiOutlineFundView } from "react-icons/ai";

import ProgressiveImage from "react-progressive-image-loading";
import { Loading } from "../Loading";

export function Products({showCart, setShowCart, het}) {
  const [products, setProducts] = useState([]);
  //console.log(het)
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const [emptyCart, setEmptyCart] = useState(true);
  const [total, setTotal] = useState(0);

  const [productDetails, setProductDetails] = useState([]);
  const [seeMore, setSeeMore] = useState(true);

  const [storeImages, setStoreImages] = useState([pic1, pic2, pic3]);

  const getProducts = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/products`;

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);




  const addProdDetails = (name, price, image, description) => {
    setProductDetails({ name, price, image, description });
    setEmptyCart(false);
  };

  const handleDetails = () => {
    setProductDetails([]);
    setEmptyCart(true);
  };




  return (
    <>
      {products ? (
        <div className="products__list__container">
          <div className="products__list__wrapper">
          {products ?   
            products.map((product) => {
              return (
                <div key={product._id} className="prod__card">
                  <div className="prod__card__pic">
                    <img
                      height="50px"
                      width="50px"
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="prod__card__name">
                    <h3> {product.name}</h3>
                    <small>
                      {" "}
                      <i>See more</i>{" "}
                    </small>
                  </div>

                  <div className="prod__card__price">
                    <span> {product.price} ???</span>
                  </div>
                  <button
                    onClick={() =>
                      addProdDetails(
                        product.name,
                        product.price,
                        product.image,
                        product.description
                      )
                    }
                  >
                    View <AiOutlineFundView />
                  </button>
                  <button onClick={() => setShowCart(!showCart)}>
                    Add <BsCartPlus />{" "}
                  </button>
                </div>
              );
            })
            : ( <Loading /> )}
          </div>

          <div
            className={
              "products__shop__cart__wrapper " + (!emptyCart && "active")
            }
          >
            <div className="empty__cart">
              <ProgressiveImage
                preview={pic1}
                src={
                  storeImages[Math.floor(Math.random() * storeImages.length)]
                }
                render={(src, style) => <img src={src} style={style} alt="" />}
              />
            </div>

            {productDetails && (
              <div className="prod__detail__wrapper">
                <div
                  className={
                    "prod__detail__item " + (emptyCart && "hide__details")
                  }
                >
                  <IoMdCloseCircleOutline
                    className="close__btn"
                    onClick={handleDetails}
                  />
                  <img src={productDetails.image} alt="" />

                  <h3>{productDetails.name}</h3>

                  <p> {productDetails.description} </p>
                  <small>
                    <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                    <BsStarHalf />
                  </small>
                  <small>{productDetails.price} ???</small>
                  <button onClick={() => setShowCart(!showCart)}>
                    Add to Cart <BsCartPlus />{" "}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="product-wrapper">
            {/* https://css-tricks.com/css-only-carousel/ */}

            <div className="product-slides">
              {products.map((product) => {
                return (
                  <div key={product._id} id="product-slide">
                    <img src={product.image} alt="" className="see-more" />
                    <h3>{product.name} </h3>

                    <p> {product.price} ??? </p>

                    <button
                      onClick={() =>
                        addProdDetails(
                          product.name,
                          product.price,
                          product.image,
                          product.description
                        )
                      }
                    >
                      View <AiOutlineFundView />
                    </button>
                  </div>
                );
              })}
            </div>

            <div
              className={"product__details " + (emptyCart && "empy__details")}
            >
              <div className="detail__card">
                <IoMdCloseCircleOutline
                  className="close__btn"
                  onClick={handleDetails}
                />
                {/*  <img src={productDetails.image} alt="" className={seeMore && 'hideImage'}/> */}
                <h3>{productDetails.name}</h3>

                <p>{productDetails.description}</p>

                <small>
                  <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf />
                  <BsStar />
                </small>
                <small>{productDetails.price} ???</small>

                <button onClick={() => setShowCart(!showCart)}>
                  Add <BsCartPlus />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading__screen">
          <div className="img__wrapper__loading">
            <img src="/assets/bees__loading.png" alt="" />
          </div>
          <div className="loading__message__container">
            <h1>Loading..</h1>
          </div>
        </div>
      )}
    </>
  );
}
