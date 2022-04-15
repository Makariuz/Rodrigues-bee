import axios from "axios";
import { client} from '../client';
import { useNavigate } from "react-router-dom";



const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();


    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState([])


    const saveToken = (token) => {
      localStorage.setItem("token", `Bearer ${token}`);
    };
  
    const deleteToken = () => {
      localStorage.removeItem("token");
    };
  

    const signup = async (username, email, password) => {
     
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/new-user`, {
        username,
        email,
        password
      });
      navigate('/user/login')
     
    }

    const createRecipe = async (title, ingredients, instructions) => {

      const response = await client.post(`${process.env.REACT_APP_BACKEND_URL}/recipes/create`, {
        title,
        ingredients,
        instructions
      });
      navigate('/recipes')
     
    }

    const getRecipes = async () => {
      const response = await client.get(`${process.env.REACT_APP_BACKEND_URL}/recipes`)
      
      setRecipes(response.data);

    }

    const readRecipe = async (id) => {
      const response = await client.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/read/${id}`)
     
      return response.data
    }

    const login = async (email, password) => {
      try {
        const response = await client.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
          email,
          password,
        });
        saveToken(response.data.token);
        setUser(response.data.user);
        navigate("/user/profile");
      } catch (error) {
        console.error(error);
      }
    };
  
    const verify = async () => {
      try {
        const response = await client.get(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`);
      
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
        login,
        logout,
        createRecipe,
        recipes,
        readRecipe,
      };
    
      return (
        <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
      );
}