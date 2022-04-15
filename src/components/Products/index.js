import './ProductList.scss'
import axios from 'axios';
import bees from '../../images/bee__bg.png'

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
    )
}