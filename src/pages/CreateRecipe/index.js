import { useContext, useState } from "react"
import { AuthContext } from '../../context';

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
        <div className="recipe__container">
            <h1>Create a recipe</h1>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="title">Title</label>
            <input value={title} name="title" placeholder="title" onChange={(event) => setTitle(event.target.value)}/>
            <br/>
            <label htmlFor="ingredients">ingredients</label>
            <input value={ingredients}  name="ingredients" placeholder="ingredients (use comma to separate)" onChange={(event) => setIngredients(event.target.value)}/>
            <button onClick={handleInputs}>add</button>

            <br/>
            <label htmlFor="instructions">instructions</label>
            <textarea value={instructions} name="instructions" placeholder="instructions" onChange={(event) => setInstructions(event.target.value)}/>
            <br/>
            <button type="submit"> submit </button>
            </form>
            <div>
           
            </div>
        </div>
    )
}