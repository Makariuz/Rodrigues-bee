import axios from 'axios';

import { useState, useEffect,useContext } from 'react'
import { AuthContext } from '../../context';
import { useNavigate } from "react-router-dom";
import { ProductsCarousel } from '../../components'
import './Profile.scss'

export function Profile(){
/*   const navigate = useNavigate();
  
      const [uiUser, setUiUser] = useState('')

      const user = useContext(AuthContext)
      
      const getUser = async () => {
        if(user.user !== null){ 
          setUiUser(user.user)
        } else {
          setUiUser('')
        }
      }
      useEffect(() => {
        getUser()
      }, []) */
    
 
      return (
        <div className='container__user__profile'>
            
            <div className='user__profile__page'>

                <div className='pPicture__header__container'>
                    <div className='pPicture'>
                        <img src="/assets/new-logo.png" alt="" />
                    </div>
                    <div className='uProfile__name'>
                        <h3> USERNAME </h3>
                    </div>
                </div>

                        
                <div className='user__profile__info'>
              
                    <div className='acc__personal__details'>
                  
                    <h3> username </h3>
                    <h3> email </h3>
                    <h3> orders created </h3>
                    <p> Created date: </p>
                    <hr />
                    
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