import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Character  from "./components/character";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>    
      <div> 
        <Switch>
          <Route exact path="/" render={() => <Home  path="/" />} />
          <Route path="/character/:id" render={(props) => <Character {...props} />} />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}


export default App;
