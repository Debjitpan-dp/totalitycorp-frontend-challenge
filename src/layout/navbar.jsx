import React, { useState } from "react";
import DebjitImg from "../assets/images/Debjit.jpg";
import {
  DropdownIcon,
  HomeIcon,
  JobIcon,
  Logo,
  MessagingIcon,
  NetworkIcon,
  NineDotMenuIcon,
  NotificationIcon,
  SearchIcon,
} from "../assets/svg";
import ProfileDropDownMenu from "../components/Profile-menu/ProfileDropDownMenu";

function Navbar(props) {

const [status, setStatus] = useState(false);
const [active, setActive] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentLeft">
          <div className="logoContainer">
            <Logo />
          </div>
          <div className="searchNavbar">

          {/* ---------------------Adding effect----------------------- */}
            <input type="text" className={active?'search-input':null} onClick={()=>setActive(!active)} placeholder="Search" />
            <div className="searchIcon-navbar">
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className="navbarContentRight">
          <div className="nav-right-ul-left">
            <ul>
              <li>
                <div className="navRouteIcon nav-icon">
                  <HomeIcon />
                </div>
                <div className="navRouteIconText"><span>Home</span></div>
              </li>
              <li>
                <div className="navRouteIcon nav-icon">
                  <NetworkIcon />
                </div>
                <div className="navRouteIconText ">My Network</div>
              </li>
              <li>
                <div className="navRouteIcon nav-icon">
                  <JobIcon />
                </div>
                <div className="navRouteIconText ">Jobs</div>
              </li>
              <li>
                <div className="navRouteIcon nav-icon">
                  <MessagingIcon />
                </div>
                <div className="navRouteIconText">Messaging</div>
              </li>
              <li>
                <div className="navRouteIcon nav-icon">
                  <NotificationIcon />
                </div>
                <div className="navRouteIconText">Notifications</div>
              </li>

            </ul>
          </div>
          {/* -------------------------profile-drop-down-menu-------------------- */}
          {
            status ? <ProfileDropDownMenu/> : null
          }
          <div className="nav-right-ul-right">
            <ul>
            <li className="nav-user-li">
                <div className="nav-user-li-detail">
                <div className="navRouteIcon" onClick={()=>setStatus(!status)}>
                  <div className="userIcon">
                    <img src={DebjitImg} alt="Profile-image" />
                  </div>
                </div>
                <div className="navRouteIconText dropdown-menu" >
                  <span>Me</span>
                  <span>
                    <DropdownIcon />
                  </span>
                </div>
                </div>

              </li>
              <li>
                <div className="navRouteIcon">
                  <NineDotMenuIcon />
                </div>
                <div className="navRouteIconText dropdown-menu">
                  <span>Work</span>
                  <span>
                    <DropdownIcon />
                  </span>
                </div>
              </li>
              <li>
                <div className="navRouteIcon">
                  <p>
                    <u>
                      Get Hired Faster,
                      <br />
                      Try Premium Free
                    </u>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
