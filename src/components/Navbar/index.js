import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context";

import { BsCartPlus } from "react-icons/bs";
export function Navbar({ users, menuOpen, setMenuOpen, showCart, setShowCart }) {

  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            <img src="/assets/logoTop.png" alt="" />
          </Link>
        </div>
        <div className="center">
          <div className="center-links">
            <ul>
              {!users && (
                <>
                  <li>
                    <Link to="/user/create"> Create User </Link>
                  </li>
                  <li>
                    <Link to="/user/login"> Login </Link>
                  </li>
                </>
              )}
              {users && (
                <>
                  {(users.username === 'admin') && <li>
                    <Link to="/user/admin"> Admin </Link>
                  </li>}
                  <li>
                    <Link to="/user/profile"> Profile </Link>
                  </li>
                </>
              )}
            
              <li>
                <Link to="/store"> Store </Link>
              </li>
              <li>
                <Link to="/recipes"> Recipes </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li onClick={() => setShowCart(!showCart)}>
                <BsCartPlus className="cart" />
              </li>
             
            </ul>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
