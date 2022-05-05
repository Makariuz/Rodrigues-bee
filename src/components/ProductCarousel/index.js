import './Products.scss'
import axios from 'axios';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineFundView } from 'react-icons/ai';
import { BsCartPlus, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Loading } from '../Loading';

export function ProductsCarousel(){

  const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState([]);
    const [emptyDetails, setEmptyDetails] = useState(true);

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
        setEmptyDetails(false)
      };

      const handleDetails = () => {
        setProductDetails([]);
        setEmptyDetails(true);
      };

    return(
        <div className="product-wrapper">
       
        {/* https://css-tricks.com/css-only-carousel/ */}

        <div className="product-slides">

        {products ? 
            
            products.map((product) => {
               return (
                <div key={product._id} id="product-slide">
                
                <img src={product.image} alt=""  onClick={() => navigate('/store')} />
                {product.name}
                <br />
                {product.price} €
                <br />
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
                View <AiOutlineFundView/>
              </button>
               
                </div>
               )

            })
            
            : (
              <Loading />
              )} 
            
        </div>

        <div className={'product__details '   + (emptyDetails && 'empy__details')}>
     
            <div className='detail__card'>
            <IoMdCloseCircleOutline
                className="close__btn"
                onClick={handleDetails}
              />
            <img src={productDetails.image} alt="" />
              <h3>{productDetails.name}</h3>
              <p> {productDetails.description} </p>
              <small>
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf />
                <BsStar />
              </small>
              <small>{productDetails.price} €</small>
              <button>
                Add <BsCartPlus />{" "}
              </button>
            </div>
             

        </div>

        </div>
    )
}