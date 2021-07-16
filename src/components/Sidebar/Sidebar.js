
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { MdKeyboardBackspace } from "react-icons/md";
// import * as FaIcons from 'react-icons/fa';
import './style/Sidebar.css';
import SubMenu from './SubMenu';


const Sidebar = (props) => {
  const location = useLocation();

  const [ sidebar, setSidebar ] = useState(false);

    return (
        <div className="row ml-0 mr-0">
          <div className="col-2 pr-0 pl-0 shadow">
            <IconContext.Provider value={{ color: '#fff' }}>
              <nav className='nav-menu active'>
              <div className="toggle-menu-btn">
                    <MdKeyboardBackspace onClick={() => setSidebar(!sidebar)}></MdKeyboardBackspace>
                </div> 
                  <div className="border-text">
                  </div>
                  <ul className='nav-menu-items'>
                  {/* <ul className='nav-menu-items' onClick={showSidebar}> */}
                    {SidebarData.map((item, index) => {
                      return <SubMenu item={item} key={index} />;
                    })}
                  </ul>
              </nav>
            </IconContext.Provider>
          </div>
          <div className="col pr-0 pl-0">
            <props.currentComponent />
          </div> 
        </div>
    )
}

export default Sidebar;