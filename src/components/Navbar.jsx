import React, { Component } from 'react';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class= "navbar-brand" href="https://www.google.com/search?q=doge&rlz=1C1CHBF_enUS694US694&oq=doge&aqs=chrome..69i57j0l4j69i60.1548j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
                        <img src={logo} width="30" height="30" alt="doge" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"> Todo</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
