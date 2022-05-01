import { useContext } from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context';
import './Menu.scss'

export function Menu({users, menuOpen, setMenuOpen}){

    const { logout } = useContext(AuthContext);


    const handleLogout = () => {
        setMenuOpen(false)
        logout()

    }
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul> {/* create a component for the function */}
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/"> Home </Link>
                </li>
                {!users &&
                <li onClick={() => setMenuOpen(false)}>
                 <Link to="/user/create"> Create User  </Link>
                </li>}
                {!users &&
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/user/login" > Login        </Link>
                </li>}
                {users && 
                <>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/user/admin" > Admin        </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/user/profile" > Profile        </Link>
                </li>
                </>
                }
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/store" > Store        </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/recipes" > Recipes      </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/about" > About        </Link>
                </li>
                {users && 
                <li  onClick={handleLogout}>
                <button> Logout        </button>
                </li>
                }
                
                
               
                
            </ul>

            <div className='about__dev'>
            <AiFillGithub /> <AiFillTwitterCircle /> made by Sam.
            </div>
        </div>
    )
}