import './NewUser.scss'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
 /*    const [pPicture, setPPicture] = useState(""); */
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(username, email, password);
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

    const handleShow = () => {
        setShow(!show)
    }

    return (
       
        <div className={'container-user-logss ' +  (show && 'active')}>
   
            <div className='user-cards'>

            <div className='user__header'>
            <div className='user__top__header'>
                <h3>Create an account to save your recipes!</h3>
                <AiOutlineCloseSquare onClick={() => {setShow(!show)} } className='close__btn'/>
                </div>
                <small>Already have an account? Login <a href="">here.</a></small>
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