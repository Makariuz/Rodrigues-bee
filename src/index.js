import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context";

import { About, Admin, CreateRecipe, Home, Login, NotFound, Profile, ReadRecipe, Recipes, Signup, Store } from "./pages";






ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="user/create" element={<Signup />} />
            <Route path="user/login" element={<Login />} />
            
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/admin" element={<Admin />} />
            <Route path="store" element={<Store />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/read/:id" element={<ReadRecipe />} />
            <Route path="recipes/create" element={<CreateRecipe />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>  
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
