import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/static/logo.png';
import logo2 from '../../assets/static/logo2.png';
import "./style/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";

const Header = () => (
    <nav className="navbar navbar-expand-lg border-bottom  ">
        <div className="container ">
            <div className="">
                <img className="header-logo " src={logo} alt="Logo " />
                {/* <img className="header-logo " src={logo2} alt="Logo "/> */}
            </div>
           
        </div>
        {/*  */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="nav-link active pr-4" aria-current="page">User Master</div>
                </li>
                <li className="nav-item text-center">
                        
                            <FaUserCircle className="container-icon" />
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
