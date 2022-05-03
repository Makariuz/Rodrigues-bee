import './LandingPage.scss'
import { useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-image-loading";
import flying__bee from '../../images/flying__bee.png'

export function LandingPage(){
    const navigate = useNavigate();
   
    const handleNavigate = () => {
        navigate('/store')
    }
    return (
        <div className="landing__page" id="landing__page">

        {/* <div className='fly_div'>
        <img className='fly_img' src={flying__bee} alt="" />
        </div> */}
     
            <div className='wrapper__landing__page'>
                <div className='img__container'>
                <ProgressiveImage
                    preview="assets/logo1.png"
                    src="assets/logo8.png"
                    render={(src, style) => <img src={src} style={style} alt="" />}
                  />   
                    <button onClick={handleNavigate}>STORE!</button>
                </div>
           
            </div>

        </div>
    )
}