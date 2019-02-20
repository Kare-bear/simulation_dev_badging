import React, {Component} from 'react';
import './AuthView.css';
import {Link} from 'react-router-dom';


import logoAuth from "./logo.png";


export default class AuthView extends Component{

    render(){
        return(
            <div className="auth_main">
                <div className="auth_main_container">
                    <img src={logoAuth} alt="logo" className="auth_logo"/>
                    <h2 className="auth_title">Helo</h2>
                    <Link to ='localhost:3001/login'><button className="auth_button">Login / Register</button></Link>
                </div>
            </div>
        )
    }
}