import './app.scss';
import { useContext, useState } from "react";
import { AuthContext } from './context';
import { Outlet } from 'react-router-dom';

import {  Menu, Navbar, ScreenSize } from './components'



function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const user = useContext(AuthContext)

  return (
    <div className="app">
     <Navbar users={user.user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu users={user.user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='screen__size'>
        <ScreenSize />
        </div>
      
        <div className='app__sections'>

        <Outlet users={user.user}  />
  
         
        </div>
    </div>
  );
}

export default App;
