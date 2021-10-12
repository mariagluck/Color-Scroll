import React from "react";
import Home from '../pages/Home.jsx';
import { Route, Switch } from "react-router-dom";
import Scroll from '../pages/Scroll.jsx'



export default function App() {

    return (
        <main>
            <Switch>
                <Route>
                <Home /> 
                <Scroll />   
                </Route> 
            </Switch>
        </main>
    );
}

