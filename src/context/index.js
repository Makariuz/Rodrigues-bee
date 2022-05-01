import axios from "axios";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loginResult, setLoginResult] = useState("");
  const [recipeRating, setRecipeRating] = useState('')

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (username, email, picture, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/new-user`,
        {
          username,
          email,
          picture,
          password,
        }
      );

      navigate("/user/login");
    } catch (error) {
      console.log(error);
      setLoginResult("Email already exists in the database.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await client.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      saveToken(response.data.token);
      setUser(response.data.user);

      navigate("/user/profile");
    } catch (error) {
      console.error("incorrect user " + error);
      setLoginResult(`Email or Password is incorrect.`);
    }
  };

  const editUser = async (id, newUsername) => {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/auth/edit-user/${id}`,
      {
        newUsername,
        /* newEmail,
        newPicture,
        newPassword, */
      }
    );
    navigate("/user/profile");
  };

  const addProduct = async (name, description, image, price) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/products/add`,
      {
        name,
        description,
        image,
        price
      }
    );

    console.log(response.data)
    navigate("/user/profile");
  };

  const createRecipe = async (title, ingredients, instructions, image) => {
    const response = await client.post(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/create`,
      {
        title,
        ingredients,
        instructions,
        image,
      }
    );
    //console.log(recipes + ' RECIPES description of the data response create recipe')
    /* setRecipes(...recipes, response.data) */
    setRecipes((previousRecipes) => {
      return ([ ...previousRecipes , response.data])
    });
    navigate("/recipes");
  };

  const getRecipes = async () => {
    const response = await client.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipes`
    );
    setRecipes(response.data);
  };

  const readRecipe = async (id) => {
    const response = await client.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/read/${id}`
    );

    return response.data;
  };

  const editRecipe = async (
    id,
    newTitle,
    newIngredients,
    newInstructions,
    newImage
  ) => {
    const response = await client.put(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/edit/${id}`,
      {
        newTitle,
        newIngredients,
        newInstructions,
        newImage,
      }
    );
  };

  const deleteRecipe = async (id) => {
    const response = await client.delete(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`
    );

    return response.data;
  };

  const verify = async () => {
    try {
      const response = await client.get(
        `${process.env.REACT_APP_BACKEND_URL}/auth/verify`
      );
      setUser(response.data);
      navigate("/user/profile");
    } catch (error) {
      navigate("/");
    }
  };

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    verify();
    getRecipes();
  }, []);

  const value = {
    user,
    signup,
    editUser,
    login,
    logout,
    createRecipe,
    recipes,
    getRecipes,
    readRecipe,
    editRecipe,
    deleteRecipe,
    addProduct,
    setRecipes,
    loginResult,
    setLoginResult,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
