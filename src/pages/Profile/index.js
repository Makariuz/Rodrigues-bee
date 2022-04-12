import axios from 'axios';

import { useState, useEffect,useContext } from 'react'
import { AuthContext } from '../../context';
import { useNavigate } from "react-router-dom";

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
                <div className='acc__details__container'>
                    <div className='acc__personal__details'>
                    <h3>User Details </h3>
                    <p> username </p>
                    <p> email </p>
                    <p> orders created </p>
                    <p> Created date: </p>
                    <hr />
                    
                    </div>
               
                    <button> Check Store </button>
                    </div>
                </div>

            </div>
            <div className='user__extra__page'>

                <h3>My Recipes</h3>
                <h4> Title </h4>
                <img src="/assets/new-logo.png" alt="" />
                <p> Info on the recipes ... </p>

                <hr />
            </div>
        </div>
    )
}