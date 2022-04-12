import axios from "axios";
import { client} from '../client';
import { useNavigate } from "react-router-dom";



const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();


    const [user, setUser] = useState(null);

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

    const login = async (email, password) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
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
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`);
        setUser(response.data.user);
        navigate("/");
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
    }, []);

      const value = {
        user,
        signup,
        login,
        logout,
      };
    
      return (
        <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
      );
}