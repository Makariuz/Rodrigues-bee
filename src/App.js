import "./app.scss";
import { useContext, useState } from "react";
import { AuthContext } from "./context";
import { Outlet, useNavigate } from "react-router-dom";

import { Cart, Menu, Navbar, ScreenSize } from "./components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [prodCart, setProdCart] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const { user, recipes, setRecipes } = useContext(AuthContext);

  const navigate = useNavigate();


  return (
    <div className="app">
      <Navbar
        users={user}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        showCart={showCart}
        setShowCart={setShowCart}
     
      />
      <Menu
        users={user}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
  
      />
      <Cart
        users={user}
        showCart={showCart}
        setShowCart={setShowCart}
    
      />
      <div className="screen__size">
        <ScreenSize />
      </div>

      <div className="app__sections">
        <Outlet
          users={user}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </div>
    </div>
  );
}

export default App;
