import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { NewRecipe } from "../../components";
import { AuthContext } from '../../context';
import './Recipes.scss'
export function Recipes(){
  const navigate = useNavigate();
    const {user,  recipes } = useContext(AuthContext);

    return (
        <div className="recipe__container">
        <div className="wrapper__left">
        <h1> Recipes </h1>

        </div>
      
     
      <div className="wrapper__right"> 
      <div className="search__input">
      
        <input type='text' placeholder="Search for ingredients"/>
      </div>
      <ul>
      {recipes.map((recipe) => {
          return(
            <div  key={recipe._id} className="recipe__card__container" onClick={() => navigate(`read/${recipe._id}`)}>
            <div className="recipe__card">
          <small>Title</small>  
          <li>{recipe.title}</li>
          <small>Ingredients</small>  
          <li className="ing__list"> <div className="ing__card">{recipe.ingredients}</div> </li>
          <small>Instructions</small>  
          <li>{recipe.instructions}</li>
          <small>Posted by: {recipe.author.username} </small>  
          
          </div>
          <div className="img__card__container">
            <img src='assets/1.png' alt="" />
          </div>
          </div>
      )
      })}
      </ul>
      </div>
        </div>
    )
}