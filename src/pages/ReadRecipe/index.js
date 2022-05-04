import { AuthContext } from "../../context";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ReadRecipe.scss";

import default__img from "../../images/default__honey.png";
import { BsSave, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";

export function ReadRecipe() {
  const { user, readRecipe, bookmarkRecipe } = useContext(AuthContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  //const [savedRecipes, setSavedRecipes] = useState(user.recipes)

  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const navigate = useNavigate();

  useEffect(() => {
    readRecipe(id).then(setRecipe);
  }, []);

  let newArr = [];

  recipe
    ? (newArr = recipe.ingredients.split(";"))
    : console.log("loading ingredients...");

  return (
    <div className="read__recipes__container">
      {recipe ? (
        <div className="read__card">
          <div className="header__read__recipe">
            <div className="img__wrapper" title="Click and hold to view image">
              <img src={recipe.image ? recipe.image : default__img} alt="" />
            </div>

            <div className="title__wrapper">
              <h2>{recipe.title}</h2>
            </div>
          </div>

          <div className="ingredients__instructions__wrapper">
            <ul>
              <h3>Ingredients</h3>
              {newArr.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient}</li>;
              })}
            </ul>
            <hr />
            <div className="inst__section">
              <h3>Instructions</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <div className="btns__wrapper">
            <div className="back__wrapper">
              <button className="go__back__btn" onClick={() => navigate(-1)}>
                Go Back{" "}
              </button>
            </div>

            <div className="star__wrapper">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                x
                size={20}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="foo" //
              />
            </div>

            <div className="save__wrapper">
              <button
                onClick={() => bookmarkRecipe(id)}
                className="save__recipe__btn"
              >
                Save recipe{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading__screen">
          <div className="img__wrapper__loading">
            <img src="/assets/bees__loading.png" alt="" />
          </div>
          <div className="loading__message__container">
            <h1>Loading..</h1>
          </div>
        </div>
      )}
    </div>
  );
}
