import logo from "./logo.svg";
import React from "react"
import "./App.css";
import { Routes,Route, Navigate } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
// import Product from "./Page/Product";

import Navigation from "./Components/Navigation/Navigation";
import NewUser from "./Page/NewUser";
import { Suspense } from "react";
import APIData from "./Components/APIData/APIData";

const Product=React.lazy(()=>import("./Page/Product"));
//  npm install react-router-dom@6
// npm install axios
//xml http
// fetch api
//axios

function App() {
  return (
    <div className="App">
             <Suspense fallback={<h1>Please Wait</h1>}>
    <Navigation/>
    <APIData/>

      <Routes>
        <Route path="/" element={<Navigate to={"/contact"}/>}/>
        <Route path="/home" element={<Home/>}>
          <Route path="user" element={<NewUser/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      </Suspense>
    </div>

  );
}

export default App;
