import axios from "axios";
import { client} from '../client';

const { createContext, useState } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const signup = async (username, email, password) => {

      const response = await client.post(`/auth/new-user`, {
        username,
        email,
        password
      });
     
    }
/* 
    useEffect(() => {
      
        const token = localStorage.getItem("token");
  
        if (token) {
          const url = `${process.env.REACT_APP_BACKEND_URL}/auth/verify`;
          const config = {
            headers: {
              authorization: token,
            },
          };
    
          
          axios
            .get(url, config)
            .then((response) => {
              if (response.status === 200) {
                console.log()
                setUser(response.data);
              } else {
                setUser(null);
                localStorage.removeItem("token");
              }
            })
            .catch((err) => {
              localStorage.removeItem("token");
            });
        }
      }, []); */

      const value = {
        user,
        signup,
      };
    
      return (
        <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>
      );
}