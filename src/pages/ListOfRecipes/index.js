import { useContext } from "react";
import { AuthContext } from "../../context";
import { Recipes } from "../../pages/Recipes";
import { Profile } from "../Profile";


export function ListOfRecipes(){
    const { recipes, setRecipes } =
    useContext(AuthContext);

    return (
        <div>
            {recipes.map((recipe) => {
                return <Profile key={recipe._id} title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} image={recipe.image} setRecipes={setRecipes} recipe={recipe} />;
            }) }
        </div>
    )

}