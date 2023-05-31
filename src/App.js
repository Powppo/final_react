import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
//import Login from "./components/html/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Dashboard' element={[<Navbar/>, <Dashboard/>]}/>
        <Route path='/user' element={<User/>}/>

      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
