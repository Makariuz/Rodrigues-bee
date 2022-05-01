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
import { AiOutlineFundView } from "react-icons/ai";

import ProgressiveImage from "react-progressive-image-loading";

export function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const [emptyCart, setEmptyCart] = useState(true);
  const [total, setTotal] = useState(0);

  const [productDetails, setProductDetails] = useState([]);

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

  const handleRemove = async (i) => {
    /* cart.splice(i, 1) */
  };

  /* console.log(cart) */

  const addItemToCart = async (e) => {
    const item = e.target.value;
    let matches = await item.match(/(\d+)/);
    setPrice([...price, matches[0]]);
    setCart([...cart, item]);
    setEmptyCart(false);
  };

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
      
        {products.map((product) => {
          return (
            <div key={product._id} className="prod__card">
              <div className="prod__card__pic">
                <img height="50px" width="50px" src={product.image} alt="" />
              </div>

              <div className="prod__card__name">
                <h3> {product.name}</h3>
                <small>
                  {" "}
                  <i>See more</i>{" "}
                </small>
              </div>

              <div className="prod__card__price">
                <span> {product.price} €</span>
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
              <button
                value={`${product.name} ${product.price}€ `}
                onClick={addItemToCart}
              >
                Add <BsCartPlus />{" "}
              </button>
            </div>
          );
        })}
      </div>

      <div
        className={"products__shop__cart__wrapper " + (!emptyCart && "active")}
      >
        <div className="empty__cart">
          <ProgressiveImage
            preview={pic1}
            src={storeImages[Math.floor(Math.random() * storeImages.length)]}
            render={(src, style) => <img src={src} style={style} alt="" />}
          />
        </div>

        {/*         {cart &&
          cart.map((item, i) => {
            return (
              <div key={item._id} className="prod__cart__list">
                <div index={i} className="prod__added__cart">
                  {item}
                </div>

                <div className="btn__remove">
                  <button onClick={() => cart.splice(0, 1)}>
                    Remove <IoMdRemoveCircleOutline />{" "}
                  </button>
                </div>
              </div>
            );
          })} */}

        {productDetails && (
          <div className="prod__detail__wrapper">
            <div
              className={"prod__detail__item " + (emptyCart && "hide__details")}
            >
              <IoMdCloseCircleOutline
                className="close__btn"
                onClick={handleDetails}
              />
              <img src={productDetails.image} alt="" />
              <h3>{productDetails.name}</h3>
              <p> {productDetails.description} </p>
              <small>
                {" "}
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf />{" "}
                <BsStar />{" "}
              </small>
              <small>{productDetails.price} €</small>
              <button onClick={addItemToCart}>
                Add to Cart <BsCartPlus />{" "}
              </button>
            </div>

            {/*                 <div className="add__to__cart">
                  <button onClick={() => cart.splice(0, 1)}>
                    Remove <IoMdRemoveCircleOutline />{" "}
                  </button>
                </div> */}
          </div>
        )}
      </div>

      <div className="product-wrapper">
        {/* https://css-tricks.com/css-only-carousel/ */}

        <div className="product-slides">
          {products.map((product) => {
            return (
              <div key={product._id} id="product-slide">
                <img src={product.image} alt="" />
                {product.name}
                <br />
                {product.price} €
                <br />
              </div>
            );
          })}
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
