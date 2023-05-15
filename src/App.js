import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
