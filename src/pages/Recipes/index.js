import { useContext, useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { NewRecipe } from "../../components";
import { AuthContext } from "../../context";
import "./Recipes.scss";

import default__img from '../../images/default__honey.png'
export function Recipes() {
  const navigate = useNavigate();
  const { user, recipes, getRecipes } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(recipes);

  const handleSearch = (e) =>
    setRecipe(
      recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(e.target.value)
      )
    );

  useEffect(() => {
    setRecipe(recipes)
    
  },[recipes])

/*   useEffect(() => {
    getRecipes()
  }, []) */

  return (
    <div className="recipe__container">
      <div className="logo__left">
        <div className="logo__left__img">
          <img src="/assets/logo8.png" alt="" />
        </div>
      </div>

      <div className="recipe__wrapper">
        <div className="recipe__list__wrapper">
          <div className="wrapper__top">
            <h1> Recipes </h1>
            <div className="recipes__img__container">
              <img height="100px" src="/assets/recipe__honey.png" alt="" />
            </div>

            <div className="search__input__wrapper">
              <div className="search__input">
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder="Search for ingredients"
                />
              </div>
             {user && <div className="create__recipe__btn">
                <button onClick={() => navigate("/recipes/create")}>
                  {" "}
                  New <AiOutlineFileAdd />{" "}
                </button>
              </div>}
            </div>
          </div>
          <div className="wrapper__bottom">
            <ul>
         
              {recipe && 
                recipe.map((recipe) => {
                  return (
                    <div
                      key={recipe._id}
                      className="recipe__card__container"
                      onClick={() => navigate(`read/${recipe._id}`)}
                    >
                      <div className="recipe__card">
                        <small>Title</small>
                        <li className="title__list">{recipe.title}</li>
                        <small className="ing__list">Ingredients</small>
                        <li className="ing__list">
                          {" "}
                          <div className="ing__card">
                            {recipe.ingredients.slice(0, 25)}...
                          </div>{" "}
                        </li>
                        <small className="inst"> Instructions</small>
                        <li className="inst">
                          {recipe.instructions.slice(0, 105)}...
                        </li>
                        <small>Posted by: {recipe.author.username} </small>
                      </div>
                      <div className="img__card__container">
                        <img height="100px" src={recipe.image ? recipe.image : default__img}  alt="" />
                      </div>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
