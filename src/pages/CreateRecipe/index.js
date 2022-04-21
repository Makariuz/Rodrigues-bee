import { useContext, useState } from "react"
import { AuthContext } from '../../context';
import './CreateRecipe.scss'
import {  AiOutlineFileAdd } from 'react-icons/ai'


export function CreateRecipe(){

    const { createRecipe, recipes } = useContext(AuthContext);

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')

    let arr = []
    const handleInputs = (e) => {
        e.preventDefault()
        arr.push(ingredients.split(','))
        console.log(arr)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        createRecipe(title, ingredients, instructions)
        
    }


   
    return (
        <div className="create__recipe__container">

        <div className="create__recipe__card">
            <div className="create__header">
            <h1>Create a recipe</h1>
            <div className='recipes__img__container'>
                <img src="/assets/recipe__honey.png" alt="" />
                </div>
            </div>
           
            <form onSubmit={handleSubmit}> 
            <label htmlFor="title">Title</label>
            <input value={title} name="title" placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
            <br/>
            
            <label htmlFor="ingredients">Ingredients</label>
            <div className="ingredients__div">
            <input value={ingredients}  name="ingredients" placeholder="Ingredients (use dash (-) to separate)" onChange={(event) => setIngredients(event.target.value)}/>
            <button onClick={handleInputs}> <AiOutlineFileAdd /> </button>
            </div>

            <br/>
            <label htmlFor="instructions">Instructions</label>
            <textarea value={instructions} name="instructions" placeholder="Instructions" onChange={(event) => setInstructions(event.target.value)}/>
            {/* <p id="inst__saved">{instructions}</p> */}
            <br/>
            <button type="submit" className="submit__btn"> Submit </button>
            </form>
            <div>
            </div>
            </div>
        </div>
    )
}