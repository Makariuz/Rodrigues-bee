import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import "./CreateRecipe.scss";
import { AiOutlineFileAdd } from "react-icons/ai";
import axios from "axios";

export function CreateRecipe() {
  const { createRecipe, recipes, getRecipes, setRecipes } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [picture, setPicture] = useState("");
  const [instructions, setInstructions] = useState("");

  let arr = [];
  const handleInputs = (e) => {
    e.preventDefault();
    arr.push(ingredients.split("--"));
 
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
   createRecipe(title, ingredients, instructions, picture);
 
 
  };

  const uploadImage = (file) => {
    return axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/recipes/upload`, file)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        setPicture(response.path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="create__recipe__container">
      <div className="create__recipe__card">
        <div className="create__header">
          <h1>Create a recipe</h1>
          <div className="recipes__img__container">
            <img src="/assets/recipe__honey.png" alt="" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            name="title"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />

          <label htmlFor="ingredients">Ingredients</label>
          <div className="ingredients__div">
            <input
              value={ingredients}
              name="ingredients"
              placeholder="Ingredients (use / to separate)"
              onChange={(event) => setIngredients(event.target.value)}
            />
            <button onClick={handleInputs}>
              <AiOutlineFileAdd />
            </button>
          </div>

          <br />

          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            className="image__input"
            onChange={handleFileUpload}
          />
          <br />
          <label htmlFor="instructions">Instructions</label>
          <textarea
            value={instructions}
            name="instructions"
            placeholder="Instructions"
            onChange={(event) => setInstructions(event.target.value)}
          />
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
}
