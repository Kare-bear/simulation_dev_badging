import React from "react";
import {Switch, Route} from "react-router-dom";

import Auth from './Components/AuthView/AuthView';
import Profile from './Components/Profile/Profile';

export default(
    <Switch>
        <Route exact path = "/" component = {Auth} />
        <Route path ="/profile" component = {Profile} />
    </Switch>
);