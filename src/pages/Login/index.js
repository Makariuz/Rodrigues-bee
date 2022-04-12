import './Login.scss'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NewUser } from '../../components';
import { AuthContext } from '../../context';
/* import { Navigation } from "../components"; */




export function Login(){
    const navigate = useNavigate();



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
       /*  const url = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
        const data = {

            email,
            password,
          };

        const tokenRes = await axios.post(url, data);

        if (tokenRes.status === 200) {
            localStorage.setItem("token", `Bearer ${tokenRes.data.token}`);
            localStorage.setItem("user", JSON.stringify(tokenRes.data.user));
            navigate("/user/profile");
        } */
    }

    return (
        <div className='container-user-login'>
            
            <div className='user-card'>

                <div className='logo-container'>
                    <div className='logo'>
                        <img src="/assets/new-logo.png" alt="" />
                    </div>
                    <div className='call-to-action'>
                        <h3> Call to action lorem ispum</h3>
                        <button>Store</button>
                    </div>
                </div>

                        
                <div className='user-info'>
                <div className='acc-container'>
                    <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        className='email-input' 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}     
                        />
                    <input 
                        type="password" 
                        className='password-input' 
                        placeholder='Enter your password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}      
                        />
                    <button type="submit"> Login </button>

                    <a href='#'> Forgot Password </a>
                    <hr className='hr__width'/>
                    </form>
               
                    <button onClick={() => setShow(!show)}> Create New Account </button>
                     {show && <NewUser /> }

                    </div>
                </div>

            </div>
        </div>
    
    )
}