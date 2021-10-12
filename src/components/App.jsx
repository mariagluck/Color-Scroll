import React from "react";
import Home from '../pages/Home.jsx';
import Scroll from '../pages/Scroll.jsx';
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
                <Scroll />   
                </Route> 
            </Switch>
        </Router>
        </main>
    );
}

