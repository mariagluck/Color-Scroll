import React from "react";
import Home from '../pages/Home.jsx';
import Clock from '../pages/ScrollClock.jsx';
import {
    HashRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";


export default function App() {

    return (
        <main>
            <Router>
            <Switch>
                <Route>
                <Home /> 
                <div className="App">
                <div className="clock">
                <Clock />
                </div>
                </div>  
                </Route> 
            </Switch>
        </Router>
        </main>
    );
}

