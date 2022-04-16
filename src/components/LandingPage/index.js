import './LandingPage.scss'
import { useNavigate } from "react-router-dom";

export function LandingPage(){
    const navigate = useNavigate();
   
    const handleNavigate = () => {
        navigate('/store')
    }
    return (
        <div className="landing__page" id="landing__page">

        
            <div className='wrapper__landing__page'>
                <div className='img__container'>
                    <img src="assets/logo8.png" alt="" />
                    <button onClick={handleNavigate}>STORE</button>
                </div>
           
            </div>

        </div>
    )
}