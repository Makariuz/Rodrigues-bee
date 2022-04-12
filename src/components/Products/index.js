import './ProductList.scss'
import axios from 'axios';

import { useState, useEffect } from 'react'
import { ProductsCarousel } from '../ProductCarousel';


export function Products(){

    const [products, setProducts] = useState([])

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

    return (
        <div className='product-list-page'>
            <div className='top-banner-wrapper'>
            <div className='top-banner'>
            <h1 id="products">Productss page</h1>
            </div>
            </div>

            <div className='product-list'>
              {products.map((product) => {
                return(
                  <div className='prod-card'>
                  <div className='prod-card-pic'>
                  <img height='100px' src="https://res.cloudinary.com/portkey/image/upload/v1645273815/profile-pictures/hp_owshdn.png" alt="" />
                  <h3> {product.name}</h3>
                  </div>
                  <div className="prod-card-info">
                 
                  <span> {product.price} €</span>
                  </div>
                  <button>Add to Cart</button>
                  </div>
                )
              })}
            </div>
            
            <div className="product-car-2">
              <ProductsCarousel  />
            </div>

            <div className='bottom-banner-wrapper'>
            <div className='bottom-banner'>
            <h1 id="products">Products bottom</h1>
            </div>
            </div>

        
      
        </div>
    )
}