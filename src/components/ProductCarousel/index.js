import './Products.scss'
import axios from 'axios';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export function ProductsCarousel(){

  const navigate = useNavigate()

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

    return(
        <div className="product-wrapper">
       
        {/* https://css-tricks.com/css-only-carousel/ */}

        <div className="product-slides">

       
            
            {products.map((product) => {
               return (
                <div key={product._id} id="product-slide">
                
                <img src={product.image} alt=""  onClick={() => navigate('/store')} />
                {product.name}
                <br />
                {product.price} €
                <br />
               
                </div>
               )

            })}
            
        </div>

        </div>
    )
}