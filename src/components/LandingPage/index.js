import './LandingPage.scss'

import {BsChevronCompactDown} from 'react-icons/bs'
import { ProductsCarousel } from '../ProductCarousel';
import { AuthContext } from '../../context';
import { useContext, useState } from "react";
export function LandingPage(){
    const user = useContext(AuthContext)
  
    return (
        <div className="landing__page" id="landing__page">
            <div className='left'>
                <div className='imgContainer'>
                    <img src="assets/logo2.jpeg" alt="" />
                </div>
                <div className='wrapper'>
                <h3>Call to actions  sentence Lorem ipsum dolor sit amet... </h3>

                </div>
                <a href="#products">
                    <BsChevronCompactDown className='down__icon' />
                </a>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <ProductsCarousel />
                </div>
 
            </div>
        </div>
    )
}