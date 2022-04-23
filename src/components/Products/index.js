import './ProductList.scss'
import axios from 'axios';
import bees from '../../images/bee__bg.png'

import { useState, useEffect } from 'react'
import { ProductsCarousel } from '../ProductCarousel';

import {BsCartPlus} from 'react-icons/bs';
import {IoMdRemoveCircleOutline} from 'react-icons/io'


export function Products(){

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [emptyCart, setEmptyCart] = useState(true);




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
       
      }

      console.log(cart)
      

      const addItemToCart = (e) => {
        const item = e.target.value;

        console.log(item)
        setCart([...cart, item]);
        setEmptyCart(false)
      }

    return (
        <div className='products__list__container'>
          

            <div className='products__list__wrapper'>
            
            
           
              {products.map((product) => {
                return(
                  <div  key={product._id} className='prod__card'>
                  <div className='prod__card__pic'>
                  <img height='50px' width="50px" src="https://res.cloudinary.com/portkey/image/upload/v1645273815/profile-pictures/hp_owshdn.png" alt="" />
                  
                
                  </div>

                  <div className='prod__card__name'> 
                  <h3> {product.name}</h3>

                  lorem stuff
                  </div>
              

                  <div className='prod__card__price'>
                  <span> {product.price} €</span>
                  </div>
                  <button value={`${product.name} ${product.price}€ `}  onClick={addItemToCart}>Add to Cart <BsCartPlus /> </button>
                  </div>
                )
              })}
       
       
              </div>


               <div className={'products__shop__cart__wrapper ' + (!emptyCart && "active")}>

              <div className='empty__cart'>
                <h1>Nothing added to the cart!</h1>
              </div>

              {/* <ul>
          {cart.map(item => <li key={item}>{item}</li>)}
        </ul> */}
   
        {cart && cart.map((item, i) => {
          return(
            <div key={item._id} className='prod__cart__list'>
            <div index={i}  className='prod__added__cart'>


            {item}

            </div>

            <div className='btn__remove'>
            <button onClick={() => cart.splice(i, 1)}>Remove <IoMdRemoveCircleOutline /> </button>
            </div>
            </div>
          )
   
        })}

           
      
       
              </div>

              <div className="product-wrapper">
        
        {/* https://css-tricks.com/css-only-carousel/ */}

        <div className="product-slides">
            
            {products.map((product) => {
               return (
                <div key={product._id} id="product-slide">
                <img src="/assets/1.png" alt="" />
                {product.name}
                <br />
                {product.price} €
                <br />
               
                </div>
               )

            })}
            
        </div>

        </div>

        </div>
    )
}