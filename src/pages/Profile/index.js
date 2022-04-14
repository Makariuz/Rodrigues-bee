import axios from 'axios';

import { useContext, useState } from 'react'
import { AuthContext } from '../../context';
import { useNavigate } from "react-router-dom";
import { ProductsCarousel } from '../../components'
import './Profile.scss'

export function Profile(){

    
      const { user, logout, recipes } = useContext(AuthContext);
    

 
      console.log(user)

      return (
        <div className='container__user__profile'>
         
            <div className='user__profile__page'>

                <div className='pPicture__header__container'>
                    <div className='pPicture'>
                        <img src="/assets/new-logo.png" alt="" />
                    </div>
                    <div className='uProfile__name'>
                        <h3>  {user.username} </h3>
                    </div>
                </div>

                        
                <div className='user__profile__info'>
              
                    <div className='acc__personal__details'>
                  
                    <h3>  {user.username} </h3>
                    <h3>  {user.email} </h3>
                    <h3> orders created: 0 </h3>
                    <p> Created date:  {user.createdAt} </p>
                    <hr />
                    <button onClick={logout}>Logout</button>
                    </div>
               
                
                  
                </div>

            </div>
            <div className='user__recipes__page'>

                <h3>My Recipes</h3>
                <h4> Title </h4>
                <img src="/assets/new-logo.png" alt="" />
                <p> Info on the recipes ... </p>

                <hr />
            </div>

            <div className='user__store__page'>

              <ProductsCarousel />

      
            </div>
        </div>
    )
}