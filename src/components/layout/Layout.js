import React from 'react';
import Header from '../header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({children}, props) => {
    return(
        <div>
            <div className="row ml-0 mr-0">
                <div className="col pr-0 pl-0 ">
                    <Header />
                </div>
            </div>
            <div className="row ml-0 mr-0">
                { false ? <div className="col-2 pr-0"> <Sidebar /> </div> : <></> } 
                <div className="col pr-0 pl-0">
                    { children }
                </div> 
            </div>
        </div>
    )
};

export default Layout;
