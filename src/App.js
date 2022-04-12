import './app.scss';
import { useState } from "react";

import { Outlet } from 'react-router-dom';

import {  Menu, Navbar } from './components'



function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     
        <div className='sections'>
      
          <Outlet />
        </div>
    </div>
  );
}

export default App;
