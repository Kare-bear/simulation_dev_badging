import React, {Component} from 'react';
import './AuthView.css';


export default class AuthView extends Component{

    render(){
        return(
            <div className="auth_main">
                <div className="auth_main_container">
                    <p className="auth_icon">:)</p>
                    <h2 className="auth_title">Helo</h2>
                    <button className="auth_button">Login / Register</button>
                </div>
            </div>
        )
    }
}