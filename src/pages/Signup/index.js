import './Signupp.scss'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../context';

import { client} from '../../client'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Draggable from 'react-draggable';





export function Signup(){
    const navigate = useNavigate();

  /*   const [menuOpen, setMenuOpen] = useState(false) */

    const { signup, loginResult, setLoginResult } = useContext(AuthContext);
  
    const [hideClosePop, setHideClosePop] = useState(false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {return setLoginResult('Please add an email address') }
        if (username.length === 0) {return setLoginResult('Please add an username') }
        
        signup(username, email, picture, password);
    }

    const uploadImage = (file) => {
        return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/upload`, file)
          .then(res => res.data)
          .catch((err) => console.log(err))
      };
    
    const handleFileUpload = async (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("picture", e.target.files[0]);
      
        
        uploadImage(uploadData)
          .then(response => {
            // console.log("response is: ", response);
            // response carries "fileUrl" which we can use to update the state
            setPicture(response.path);
      
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };


/*       useEffect(() => {
       
        const timer = setTimeout(() => {
        
            setLoginResult("")
            setHideClosePop(true)
          }, 3000);
          return () => clearTimeout(timer);

    }, []) */

   /*  const handlePopUp = () => {
        
        const timer = setTimeout(() => {
        
           
            setHideClosePop(true)
          }, 3000);
          return () => clearTimeout(timer);
    } */


    
    return (
        <div className='container-user-logs'>
    
            <div className='user-card'>

            <div className='user-header'>
                <h3>Create an account to save your recipes!</h3>
                <small>Already have an account? Login <Link to='/user/login'>here.</Link></small>
            </div>

                <div className='user-info'>
                
                    <form onSubmit={handleSubmit}>
                    <Draggable>
                    <span>{loginResult}</span>
                    </Draggable>
                    <input 
                        type="text" 
                        className='username-input' 
                        placeholder='Enter your username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}    
                        />
                    <input 
                        type="email" 
                        className='email-input' 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}     
                        />
                    <input 
                        type="file" 
                        name="picture"
                        className='pp-input'   
                        onChange={handleFileUpload} 
                        />
                    <input 
                        type="password" 
                        className='password-input' 
                        placeholder='Enter your password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  
                        minLength='4'
                        />
                    <button type="submit"> Create user </button>
                    </form>

                </div>
            </div>
        </div>
    )
}