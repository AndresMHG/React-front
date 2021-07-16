import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/static/logo.png';
import logo2 from '../../assets/static/logo2.png';
import "./style/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container row">
            <div className="col pr-0 mr-0">
                <img className="header-logo " src={logo} alt="Logo " />
                <img className="header-logo " src={logo2} alt="Logo "/>
            </div>
           
        </div>
        {/*  */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="nav-link active pr-4" aria-current="page">User Master</div>
                </li>
                <li className="nav-item text-center">
                        <div>
                            <FaUserCircle className="container-icon" />
                        </div>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
