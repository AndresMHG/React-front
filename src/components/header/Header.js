import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/static/logo.png';
import avatar from '../../assets/static/avatar.png';
import "./style/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

const Header = () => (
    <>
       <nav class="navbar navbar-light border-bottom shadow-sm">
            <div class=" mx-0 pr-0">
                <div className="row mx-0">
                <div className="col-10">
                    <img src={logo} className="header-logo" />
                </div>

                <div className="col-1 mt-2">
                <p className="m-2 container_avatar">UserName</p>
                </div>
                <div className="col-1 container_avatar mt-2">
                    <Avatar src={avatar} />
                </div>
                </div>
            </div>
        </nav>
    </>
);

export default Header;
