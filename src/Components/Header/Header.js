import React, {Component} from "react";
import "./Header.css"




export default class Header extends Component{
    render(){
        return(
            <header className = 'header_main'>
                <nav className = 'header_nav'>
                    <li>Helo</li>
                    <li>house_image</li>
                    <li>search_image</li>
                </nav>
                <div>Profile* change based on render</div>
                <div>Logout</div>
            </header>
        )
    }

}