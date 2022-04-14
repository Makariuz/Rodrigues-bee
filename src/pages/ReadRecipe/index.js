import { AuthContext } from '../../context';
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import './ReadRecipe.scss'
export function ReadRecipe(){
    const {readRecipe } = useContext(AuthContext);
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null)
 




  /*   useEffect(() => {
     readRecipe(id).then(setRecipe)
    }, [])
 */
    
    
    console.log(recipe)
  
    return (
       <div className='read__recipes__container'>
       {recipe ? (
           <>           
           <h2>{recipe.title}</h2>
          <h3>Ingredientss</h3>
         <p> {recipe.ingredients} </p>
         </>
        ) :
        <div className='loading__screen'>        
        <div className='img__wrapper__loading'> 
        <img src="/assets/bees__loading.png" alt="" />
        </div>
        <div className='loading__message__container'> 
        <h1>Loading..</h1>
        </div>
        </div>

        }

       </div>
    )
}