import React from 'react';
import Header from '../header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import Login from '../../pages/login/Login';


const Layout = ({children}, props) => {
    let location = useLocation();
    console.log(location.pathname);
     if ( location.pathname === '/' ){
        var raiz = location.pathname;
    }else {
        var raiz = null
    } 

    console.log(raiz)
    return(
        <div>
            {raiz ? <Login /> : <>
            
                <div className="row mx-0 my-0 px-0 py-0">
                <div className="col mx-0 my-0 px-0 py-0">
                    <Header />
                </div>
            </div>
            <div className="row mx-0 my-0 px-0 py-0">
                { false ? <div className="col-2 mx-0 my-0 px-0 py-0"> <Sidebar /> </div> : <></> } 
                <div className="col ">
                    { children }
                </div> 
            </div>
            </>

            }
            
        </div>
    )
};

export default Layout;
