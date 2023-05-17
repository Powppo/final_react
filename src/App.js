import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
