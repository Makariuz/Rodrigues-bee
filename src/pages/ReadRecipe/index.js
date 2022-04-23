import { AuthContext } from '../../context';
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import './ReadRecipe.scss'
export function ReadRecipe(){
    const {readRecipe } = useContext(AuthContext);
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null)
 




    useEffect(() => {
     readRecipe(id).then(setRecipe)
    }, [])

    let newArr= []

    recipe ?
    newArr = recipe.ingredients.split(',')
    :
    console.log('loading...')
    
  
    return (
       <div className='read__recipes__container'>

       
      

       {recipe ? (
           <div className='read__card'>
            <div className='header__read__recipe'> 
            <div className='img__wrapper'>
            <img src="/assets/Emily-s-Honey-Lime-Coleslaw_EXPS_THJJ17_201853_C02_02_4b-10.jpeg" alt="" />          
            </div>
            
            <div className='title__wrapper'>
            <h2>{recipe.title}</h2>
            </div>
           
           </div>
         
         <div className='ingredients__instructions__wrapper'>
         <ul> 
         <h3>Ingredients</h3>
         {newArr.map((ingredient) => {
          return  <li>{ingredient}</li>
         })}
    
         </ul>
         <hr />
         <div className='inst__section'>
         <h3>Instructions</h3>
         <p>{recipe.instructions}</p>
         </div>
         </div>
         </div>
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