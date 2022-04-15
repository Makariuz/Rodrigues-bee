import { Products, ProductsCarousel } from "../../components/";
/* import { Navbar } from '../../components/Navbar';
import { Menu } from '../../components/Menu'; */

import './Store.scss'
import { useState } from "react";
export function Store(){

return (
  <div className="store__container">
    <div className="store__wrapper__top">
   {/*  <img src="/assets/honey2.png" alt="" /> */}
    <h1>Our Products</h1>
    </div>
    
    <div className="store__wrapper__right">

    <Products />
    <ProductsCarousel />
  

    </div>
        
    
  </div>


   
        
      
    )
}