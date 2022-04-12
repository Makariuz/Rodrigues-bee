import './LandingPage.scss'

import {BsChevronCompactDown} from 'react-icons/bs'
import { ProductsCarousel } from '../ProductCarousel';
import { AuthContext } from '../../context';
import { useContext, useState } from "react";
export function LandingPage(){
    const user = useContext(AuthContext)
  
    return (
        <div className="landing__page" id="landing__page">

        
            <div className='wrapper__landing__page'>
             
                    <img src="assets/logo4.png" alt="" />
     
            </div>

        </div>
    )
}