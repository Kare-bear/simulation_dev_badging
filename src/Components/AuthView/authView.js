import React, {Component} from 'react';
import './AuthView.css';

import logoAuth from "./logo.png";


export default class AuthView extends Component{

    render(){
        return(
            <div className="auth_main">
                <div className="auth_main_container">
                    <img src={logoAuth} alt="logo image" className="auth_logo"/>
                    <h2 className="auth_title">Helo</h2>
                    <button className="auth_button">Login / Register</button>
                </div>
            </div>
        )
    }
}