import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Java from "./components/lenguajes/Java/java";
import Python from "./components/lenguajes/PythonWeb_v2/python";
import Cmas from "./components/lenguajes/Cmasmas/cmas";
import Js from "./components/lenguajes/JScript/js";
import Html from "./components/lenguajes/HTML Y CSS/html"
import Cshart from "./components/lenguajes/Cshart/cshart"

import AuthService from "./services/auth.service";



import "../src/components/lenguajes/Java/css/estilosPy_v2.css"
import "../src/components/styles.module.scss"
import './App.module.scss'
import Users from "./crud/Users";
import CreateUser from "./crud/CreateUser";
import UpdateUser from "./crud/UpdateUser";




const App =() =>{
  
  const [currentUser, setCurrentUser] = useState(null);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []); // Se ejecutará solo una vez al montar el componente

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(null);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };

  return (
  <BrowserRouter>
    
  <div >
    <Routes>
      <Route path="/" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/menu/:id" element={<Menu />} ></Route> 
      <Route path="/menu/java" element={<Java />} ></Route> 
      <Route path="/menu/python" element={<Python />}></Route>
      <Route path="/menu/cmas" element={<Cmas />}></Route>
      <Route path="/menu/js" element={<Js />}></Route>
      <Route path="/menu/html" element={<Html />}></Route>
      <Route path="/menu/cshart" element={<Cshart />}></Route>

      <Route path="/dates" element={<Users />}></Route>
      <Route path="/create" element={<CreateUser />}></Route>
      <Route path="/update" element={<UpdateUser />}></Route>

      </Routes> 
      </div>    
  </BrowserRouter>
  );
};

export default App;
