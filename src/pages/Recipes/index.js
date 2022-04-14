import { useContext, useState } from "react"
import { NewRecipe } from "../../components";
import { AuthContext } from '../../context';

export function Recipes(){

    const {  recipes } = useContext(AuthContext);

    let arr = []

    for (let i = 0; i < recipes.length; i++) {
        {arr.push(recipes[i])}
    }
  

    return (
        <div className="recipe__container">
      <h1> tttt</h1>
     <code>{JSON.stringify(recipes)}</code>
      <div> 
      <ul>
          {arr.forEach(n => {
              <li>{n}</li>
          })}
      </ul>
      {}
  
      </div>
        </div>
    )
}