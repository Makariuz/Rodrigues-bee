import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsCarousel } from "../../components";

import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileAdd,
  AiOutlineSave,
} from "react-icons/ai";

import { MdOutlineCancel } from "react-icons/md";
import "./Profile.scss";

export function Profile() {
  const navigate = useNavigate();

  const [editOpen, setEditOpen] = useState(true);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newImage, setNewImage] = useState();
  const [newInstructions, setNewInstructions] = useState("");

  const {
    user,
    logout,
    recipes,
    getRecipes,
    setRecipes,
    editRecipe,
    deleteRecipe,
  } = useContext(AuthContext);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    getRecipes();
  };

  const handleEdit = (recipe) => {
    setEditOpen(true);
    setNewId(recipe._id);
    setNewTitle(recipe.title);
    setNewIngredients(recipe.ingredients);
    setNewInstructions(recipe.instructions);
    setNewImage(recipe.image);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(newId + ' -- ' + newTitle + ' -- ' + newIngredients + ' -- ' + newInstructions  + ' -- ' + newImage)
    editRecipe(newId, newTitle, newIngredients, newInstructions, newImage);
    getRecipes()
    setEditOpen(false)


  };

  useEffect(() => {
    getRecipes();
  }, []);

  const [createdDate, setCreatedDate] = useState(
    `${new Date(user?.createdAt.toString())}`
  );

  return (
    <>
      {user ? (
        <div className="container__user__profile">
          <div className="user__profile__page">
            <div className="pPicture__header__container">
              <div className="pPicture">
                <img src={user?.picture} alt="" />
              </div>
              <div className="uProfile__name">
                <h3> {user?.username} </h3>
                <small> {user?.email}</small>
              </div>
            </div>

            <div className="user__profile__info">
              <div className="acc__personal__details">
                <h3> {user?.username} </h3>
                <h3> {user?.email} </h3>
                <h3>
                  recipes created:{" "}
                  {recipes &&
                    recipes?.filter(
                      (recipe) => recipe.author.username === user.username
                    ).length}
                </h3>
                <p> Created date: {createdDate} </p>
                <hr />
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          </div>
          <div className="user__recipes__page">
            {/* EDIT RECIPES */}

            <div className={"edit__recipe " + (editOpen && "edit__open")}>
              <div className="edit__card">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="title">Title</label>
                  <input
                    value={newTitle}
                    name="title"
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <br />

                  <label htmlFor="ingredients">Ingredients</label>
                  <div className="ingredients__div">
                    <input
                      value={newIngredients}
                      name="ingredients"
                      placeholder="Ingredients (use dash (-) to separate)"
                      onChange={(e) => setNewIngredients(e.target.value)}
                    />
                  </div>

                  <br />

                  <label htmlFor="image">Image</label>
                  <input type="file" name="image" className="image__input" />
                  <br />
                  <label htmlFor="instructions">Instructions</label>
                  <textarea
                    value={newInstructions}
                    name="instructions"
                    placeholder="Instructions"
                    onChange={(e) => setNewInstructions(e.target.value)}
                  />
                  <div className="btn__save__cancel">
                    {/* submit button...save button */}
                    <button type="submit">
                      <AiOutlineSave />
                    </button>
                    <button type="text" onClick={() => setEditOpen(false)}>
                      <MdOutlineCancel />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="top__recipe__container">
              <h2>My Recipes</h2>
              <div className="recipes__img__container">
                <img src="/assets/recipe__honey.png" alt="" />
              </div>

              <div className="recipes__top__extra">
                <h3> All my recipes </h3>
                <button onClick={() => navigate("/recipes/create")}>
                  Create Recipe <AiOutlineFileAdd />
                </button>
              </div>
            </div>

            <hr />

            <div className="recipes__owned__wrapper">
              {recipes &&
                recipes
                  .filter((recipe) => recipe.author.username === user?.username)
                  .map((recipe, i) => {
                    return (
                      <div key={i} className="recipe__owned">
                        <div className="recipe__details">
                          <h3> {recipe.title} </h3>
                          <p> {recipe.instructions.slice(0, 50)}...</p>
                        </div>
                        <div className="btn__options">
                          <button onClick={() => handleEdit(recipe)}>
                            <AiOutlineEdit />
                          </button>
                          <button onClick={() => handleDelete(recipe._id)}>
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>

          <div className="user__store__page">
            <div className="carousel__container">
              <div className="carousel">
                <ProductsCarousel />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}
