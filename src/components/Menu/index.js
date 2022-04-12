import { Link } from 'react-router-dom'
import './Menu.scss'

export function Menu({menuOpen, setMenuOpen}){
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul> {/* create a component for the function */}
                <li onClick={() => setMenuOpen(false)}>
                <a href="/"> Home </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/new-user">  Create User </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/landing-page" > Login      </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/landing-page" > Admin        </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/landing-page" > Store        </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/landing-page" > Recipes      </Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link to="/landing-page" > About        </Link>
                </li>
                
                
               
                
            </ul>
        </div>
    )
}