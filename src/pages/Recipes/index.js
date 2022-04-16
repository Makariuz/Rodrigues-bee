import { useContext, useState } from "react"
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NewRecipe } from "../../components";
import { AuthContext } from '../../context';
import './Recipes.scss'
export function Recipes(){
  const navigate = useNavigate();
    const {user,  recipes } = useContext(AuthContext);

    return (
        <div className="recipe__container">
        <div className="recipe__wrapper">
        <div className="wrapper__top">
        <h1> Recipes </h1>
        <div className='recipes__img__container'>
                <img src="/assets/recipe__honey.png" alt="" />
                </div>
        </div>
      
     
      <div className="wrapper__bottom"> 
      <div className="search__input__wrapper">
      <div className="search__input">
      
        <input type='text' placeholder="Search for ingredients"/>
        
      </div>
      <div className="create__recipe__btn">
      <button onClick={() => navigate('/recipes/create')}> New <AiOutlineFileAdd /> </button>
      </div>
      </div>
      <ul>
      {recipes.map((recipe) => {
          return(
            <div  key={recipe._id} className="recipe__card__container" onClick={() => navigate(`read/${recipe._id}`)}>
            <div className="recipe__card">
          <small>Title</small>  
          <li>{recipe.title}</li>
          <small>Ingredients</small>  
          <li className="ing__list"> <div className="ing__card">{recipe.ingredients.slice(0, 25)}...</div> </li>
          <small>Instructions</small>  
          <li>{recipe.instructions.slice(0, 105)}...</li>
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
        </div>
    )
}