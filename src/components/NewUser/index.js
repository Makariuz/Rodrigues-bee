import './NewUser.scss'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../context';

import { AiOutlineCloseSquare } from 'react-icons/ai'


export function NewUser(){
    const navigate = useNavigate();

  /*   const [menuOpen, setMenuOpen] = useState(false) */

    const { signup } = useContext(AuthContext);
  
    const [show, setShow] = useState(false)

 
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(username, email, picture, password);
        setShow(!show)
       /*  const url = `${process.env.REACT_APP_BACKEND_URL}/auth/new-user`;
        const data = {
            username,
            pPicture,
            email,
            password,
          };

        const tokenRes = await axios.post(url, data);

        if (tokenRes.status === 200) {
        navigate("/");
        } */
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

 

    return (
       
        <div className={'container-user-logss ' +  (show && 'active')}>
   
            <div className='user-cards'>

            <div className='user__header'>
            <div className='user__top__header'>
                <h3>Create an account to save your recipes!</h3>
                <AiOutlineCloseSquare onClick={() => {setShow(!show)} } className='close__btn'/>
                </div>
                <small>Already have an account? Login <Link to='/user/login'> <span onClick={() => {setShow(!show)} } >here.</span></Link></small>
            </div>

                <div className='user__info'>
                    <form onSubmit={handleSubmit}>
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
                        className='pp-input'   
                        onChange={handleFileUpload}  
                        />
                    <input 
                        type="password" 
                        className='password-input' 
                        placeholder='Enter your password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  
                        />
                    <button type="submit"> Create user </button>
                    </form>

                </div>
            </div>
        
        </div>
   
    )

}