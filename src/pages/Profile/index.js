import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsCarousel } from "../../components";

import {
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileAdd,
  AiOutlineSave,
} from "react-icons/ai";

import { MdOutlineCancel } from "react-icons/md";
import "./Profile.scss";
import Draggable from "react-draggable";

export function Profile() {
  const navigate = useNavigate();

  const [editOpen, setEditOpen] = useState(false);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newPicture, setNewPicture] = useState("");
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
    setNewPicture(recipe.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecipe(newId, newTitle, newIngredients, newInstructions, newPicture);
    getRecipes();
    setEditOpen(false);
  };

  const uploadImage = (file) => {
    return axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/upload`, file)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();

    uploadData.append("picture", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        setNewPicture(response.path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
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
            <Draggable>
              <div className={"edit__recipe " + (editOpen && "edit__open")}>
                <div className="edit__card">
                  <div
                    className="close__card"
                    onClick={() => setEditOpen(false)}
                  >
                    {" "}
                    <AiOutlineCloseCircle />{" "}
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form__wrapper">
                      <div className="title__ing__div">
                        <label htmlFor="title">Title</label>
                        <input
                          value={newTitle}
                          name="title"
                          onChange={(e) => setNewTitle(e.target.value)}
                          placeholder="Title"
                        />
                        <br />

                        <label htmlFor="ingredients">Ingredients</label>

                        <input
                          value={newIngredients}
                          name="ingredients"
                          placeholder="Ingredients (use / to separate)"
                          onChange={(e) => setNewIngredients(e.target.value)}
                        />

                        <br />

                        <label htmlFor="picture">Image</label>
                        <input
                          type="file"
                          name="picture"
                          className="image__input"
                          onChange={handleFileUpload}
                        />
                      </div>

                      <div className="instructions__div">
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                          value={newInstructions}
                          name="instructions"
                          placeholder="Instructions"
                          onChange={(e) => setNewInstructions(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="btn__save__cancel">
                      {/* submit button...save button */}

                      <button type="text" onClick={() => setEditOpen(false)}>
                        Cancel <MdOutlineCancel />
                      </button>
                      <button type="submit" className="submit__btn">
                        Save <AiOutlineSave />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Draggable>
            {/* EDIT END RECIPE */}

            <div className="top__recipe__container">
              <h2>My Recipes</h2>
              <div className="recipes__img__container">
                <img src="/assets/recipe__honey.png" alt="" />
              </div>

              <div className="recipes__top__extra">
                <h3> All my recipes </h3>
                <button onClick={() => navigate("/recipes/create")}>
                <span>  Create Recipe </span><AiOutlineFileAdd />
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
