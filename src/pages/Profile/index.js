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

  const { user, logout, recipes, getRecipes, deleteRecipe } =
    useContext(AuthContext);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    getRecipes();
  };
  console.log(recipes);

  return (
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
              {
                recipes?.filter(
                  (recipe) => recipe.author.username === user?.username
                ).length
              }
            </h3>
            <p> Created date: {user?.createdAt} </p>
            <hr />
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
      <div className="user__recipes__page">
        <div className="edit__recipe">
          <div className="edit__card">
            <label htmlFor="title">Title</label>
            <input name="title" placeholder="Title" />
            <br />

            <label htmlFor="ingredients">Ingredients</label>
            <div className="ingredients__div">
              <input
                name="ingredients"
                placeholder="Ingredients (use dash (-) to separate)"
              />
              <button>
                <AiOutlineFileAdd />
              </button>
            </div>

            <br />

            <label htmlFor="image">Image</label>
            <input type="file" name="image" className="image__input" />
            <br />
            <label htmlFor="instructions">Instructions</label>
            <textarea name="instructions" placeholder="Instructions" />
            <div className="btn__save__cancel">
              <button>
                <AiOutlineSave />
              </button>
              <button>
                <MdOutlineCancel />
              </button>
            </div>
          </div>
        </div>

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

        <hr />

        {recipes
          .filter((recipe) => recipe.author.username === user?.username)
          .map((recipe, i) => {
            return (
              <div key={recipe._id} className="recipe__owned" onClick={() => navigate(`read/${recipe._id}`)}>
                <div className="recipe__details">
                  <h3> {recipe.title} </h3>
                  <p> {recipe.instructions.slice(0, 50)}...</p>
                </div>
                <div className="btn__options">
                  <button>
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

      <div className="user__store__page">
        <div className="carousel__container">
          <div className="carousel">
            <ProductsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
