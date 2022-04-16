import axios from 'axios';

import { useContext, useState } from 'react'
import { AuthContext } from '../../context';
import { Link, useNavigate } from "react-router-dom";
import { ProductsCarousel } from '../../components'

import { AiOutlineDelete, AiOutlineEdit, AiOutlineFileAdd } from 'react-icons/ai'
import './Profile.scss'

export function Profile(){
    const navigate = useNavigate();
    
      const { user, logout, recipes } = useContext(AuthContext);
    

      return (
        <div className='container__user__profile'>
         
            <div className='user__profile__page'>

                <div className='pPicture__header__container'>
                    <div className='pPicture'>
                        <img src={user?.picture} alt="" />
                    </div>
                    <div className='uProfile__name'>
                        <h3>  {user?.username} </h3>
                        <smal> {user?.email}</smal>
                    </div>
                </div>

                        
                <div className='user__profile__info'>
              
                    <div className='acc__personal__details'>
                  
                    <h3>  {user?.username} </h3>
                    <h3>  {user?.email} </h3>
                    <h3> recipes created: 1 </h3>
                    <p> Created date:  {user?.createdAt} </p>
                    <hr />
                    <button onClick={logout}>Logout</button>
                    </div>
               
                
                  
                </div>

            </div>
            <div className='user__recipes__page'>

                <h2>My Recipes</h2>
                <div className='recipes__img__container'>
                <img src="/assets/recipe__honey.png" alt="" />
                </div>
                

               <div className='recipes__top__extra'>
               <h3> All my recipes </h3>
               <button onClick={() => navigate('/recipes/create')}> Create Recipe <AiOutlineFileAdd /> </button>
               </div>
                

                <hr />

                {recipes.map(recipe => {
                return    (
                <div key={recipe._id} className='recipe__owned'>
                    {recipe.author.username === user.username &&
                    <div className='recipe__details'>
                      <h3>  {recipe.title} </h3>
                      <p> {recipe.instructions.slice(0, 50)}...</p>
                      </div>
                    }
                    <div className='btn__options'>
                    <button> <AiOutlineEdit /> </button>
                   <button> <AiOutlineDelete /> </button>
                   </div>
                    </div>
                    )
                })}
            </div>

            <div className='user__store__page'>
           
            <div className='carousel__container'>
           
          
            <div className='carousel'>
            <ProductsCarousel />
            </div>
            </div>
             

      
            </div>
        </div>
    )
}