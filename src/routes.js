import React from "react";
import {Switch, Route} from "react-router-dom";

import Auth from './Components/AuthView/AuthView';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';

export default(
    <Switch>
        <Route exact path = "/" component = {Auth} />
        <Route path ="/profile" component = {Profile} />
        <Route path = "/header" component = {Header} />
     </Switch>
);