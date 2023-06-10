import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

//import Login from "./components/html/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import User from "./components/user/user"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Students from "./components/Students";
// import StudentList from "./components/StudentList";
import Manage from "./components/Manage";
import AdmissionResult from "./components/AdmissionResult";
import AddStudentModal from "./components/AddStudentModal";
import UpdateStudent from "./components/UpdateStudent";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Dashboard' element={[<Navbar/>, <Dashboard/>]}/>
        <Route path='/Register' element={<Register/>} />
        <Route path='/User' element={<User/>} />

        <Route exact path='/InputData' element={[<Navigation/>,<Home/>]}/>
        <Route exact path='/students' element={[<Navigation/>,<Students/>]}/>
        <Route exact path='/manage' element={[<Navigation/>,<Manage/>]}/>
        <Route exact path='/admissionresult' element={[<Navigation/>,<AdmissionResult/>]}/>
        <Route exact path='/addstudent' element={[<Navigation/>,<AddStudentModal/>]}/>
        <Route exact path='/updatestudent/:studentId' element={[<UpdateStudent/>]}/>
      </Routes>
      
    </BrowserRouter>
      
  );
}

export default App;
