import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Authentication
import Login from "./containers/Login";
import Register from "./containers/Register";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Layout from "./hocs/Layout";

//import Login from "./components/html/login";
import User from "./components/user/user"
import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Students from "./components/Students";

// import StudentList from "./components/StudentList";
import Manage from "./components/Manage";
import AdmissionResult from "./components/AdmissionResult";
import AddStudentModal from "./components/AddStudentModal";
import UpdateStudent from "./components/UpdateStudent";

import { Provider } from 'react-redux';
import store from './store';
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />

          <Route path='/User' element={<User/>} />
          <Route exact path='/InputData' element={[<Navigation/>,<Home/>]}/>
          <Route exact path='/students' element={[<Navigation/>,<Students/>]}/>
          <Route exact path='/manage' element={[<Navigation/>,<Manage/>]}/>
          <Route exact path='/admissionresult' element={[<Navigation/>,<AdmissionResult/>]}/>
          <Route exact path='/addstudent' element={[<Navigation/>,<AddStudentModal/>]}/>
          <Route exact path='/updatestudent/:studentId' element={[<UpdateStudent/>]}/>
        </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
