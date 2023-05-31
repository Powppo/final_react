import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

//import Login from "./components/html/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import User from "./components/user";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import AdmissionResult from "./components/AdmissionResult";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Dashboard' element={[<Navbar/>, <Dashboard/>]}/>
        <Route path='/Register' element={<Register/>} />

        <Route exact path='/InputData' element={[<Navigation/>,<Home/>]}/>
        <Route exact path='/students' element={[<Navigation/>,<Students/>]}/>
        <Route exact path='/manage' element={[<Navigation/>,<Manage/>]}/>
        <Route exact path='/admissionresult' element={[<Navigation/>,<AdmissionResult/>]}/>
      </Routes>
      
    </BrowserRouter>
      
  );
}

export default App;
