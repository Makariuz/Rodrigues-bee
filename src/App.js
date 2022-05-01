import "./app.scss";
import { useContext, useState } from "react";
import { AuthContext } from "./context";
import {  Outlet, useNavigate } from "react-router-dom";

import { Menu, Navbar, ScreenSize } from "./components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, recipes, setRecipes } = useContext(AuthContext);

  const navigate = useNavigate()
  return (
    <div className="app">
      <Navbar
        users={user}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu users={user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="screen__size">
        <ScreenSize />
      </div>
      
      
      <div className="app__sections">
        <Outlet users={user} />
        
      </div>
    </div>
  );
}

export default App;
