

// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import logo from "../img/logo.svg";
import { IoIosLogOut } from "react-icons/io";
import SidebarData from "./SidebarData";

import './sidebar.css'
import "boxicons";
import "boxicons/css/boxicons.min.css";
function Sidebar() {
  // const [mainSidebar, setMainSidebar] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  //   const handleSidebar = () => {
  //     setMainSidebar(!mainSidebar);
  //   };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  //const { sidebarOpen, setSidebarOpen } = state;
  const [SidebarItems, setSidebarItems] = useState(SidebarData);
  //let dark = window.localStorage.getItem("dark");

  const toggleSubmenu = (index) => {
    const updatedSidebarItems = [...SidebarItems];
    updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
    setSidebarItems(updatedSidebarItems);
  };
  return (
    <>

      <div className={` ${sidebarOpen ? "col-2 menu" : "col-1 menu"}`} >
        <div className={`sidebar ${sidebarOpen ? "" : "close"}`} >
          <header>
            <div className="image-text">
              <span className="image">
                <img src={logo} alt="" />
              </span>
              <div className="text logo-text">
                <span className="name">SNP</span>
              </div>
            </div>
          </header>
          <div className="toggle">
            <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
          </div>

          {/* //todo sidebar map function */}
          <div className="menu-bar">
            <div className="menus" >
              <ul className="menu-links">

                {SidebarItems.map((item, index) => (
                  <li className="nav-link" key={index}>
                    <Link to={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
                      <i className="icon " onClick={toggleSidebar} >{item.icon}</i>
                      <span className="text nav-text">{item.title}</span>
                      {item.subNav && <i className={`bx ${item.subNavOpen ? "bx-chevron-down" : "bx-chevron-up"} caret-icon`} ></i>}
                    </Link>
                    {item.subNav && item.subNavOpen && (
                      <ul className="submenu d-block">
                        {item.subNav.map((subItem, subIndex) => (
                          <li className="subnav-link" key={subIndex}>
                            <Link to={subItem.path}>
                              <i className="icon " onClick={toggleSidebar} >{subItem.icon}</i>
                              <span className="text nav-text">{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

            </div>
            <div className='bottom-menu' >
              <Link to='/logout' >
              <IoIosLogOut style={{float:'right', fontSize:'30px',  color: 'var(--text-color)'}}/>
              </Link>
            </div>
          </div>

          {/* //todo sidebar map function */}
        </div>
      </div>

    </>

  );
}

export default Sidebar;
