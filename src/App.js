import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Dashboard from "./components/Dashboard"; 
import Explore from "./components/Explore"; 
import Repositories from "./components/Repositories"; 
import Settings from "./components/Settings"; 
const URL = "https://api.github.com/users/romebell";


function App() {
  return (
    <div className="App">
      <h1>Github Clone</h1>
      <img width="350px" height="200px" src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />
    <Dashboard/>
    </div>
  );
}

export default App;
