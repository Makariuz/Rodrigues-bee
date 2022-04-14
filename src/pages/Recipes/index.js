import { useContext, useState } from "react"
import { NewRecipe } from "../../components";
import { AuthContext } from '../../context';
import './Recipes.scss'
export function Recipes(){

    const {user,  recipes } = useContext(AuthContext);

    return (
        <div className="recipe__container">
        <div className="wrapper__left">
        <h1> Recipes </h1>

        </div>
      
     
      <div className="wrapper__right"> 
      
      <ul>
      {recipes.map((recipe) => {
          return(
            <>
          <li>{recipe.title}</li>
          <li>{recipe.ingredients}</li>
          <li>{recipe.instructions}</li>
          <li>{recipe.author.username}</li>
          
          </>
      )
      })}
      </ul>
      </div>
        </div>
    )
}