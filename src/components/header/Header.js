import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/static/logo.png';
import "./style/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img className="header-logo" src={logo} alt="Logo "/>
            </Link>
        </div>
        {/*  */}
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Sobre</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Faq</Link>
                </li>
                <li className="nav-item text-center">
                    <div className="container">
                        <Link className="btn btn-outline-success justify-content-end " 
                            to={{
                                pathname: "/cadastro",
                                registerProps:{
                                    formType: "Patient"
                                }
                            }}
                        >Cadastro</Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
