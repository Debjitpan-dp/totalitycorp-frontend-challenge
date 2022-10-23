import React from "react";
import DebjitImg from "../../assets/images/Debjit.jpg";
import { GoldTagIcon } from "../../assets/svg";
import "./Style.css";

function ProfileDropDownMenu() {
  return (
    <div>
      <div className="profile-menu-middle" id="myDiv">
        <div className="profile-user-details">
          <div className="profile-user-details-img">
            <img src={DebjitImg} alt="logo" />
          </div>
          <div className="profile-user-details-main">
            <span className="profile-user-details-name">Debjit Pan</span>
            <span className="profile-user-details-about">
              Java Full Stack Intern || MCA <br />
              from RCCIIT
            </span>
          </div>
        </div>
        <div className="view-profile-btn">
          <h5>View Profile</h5>
        </div>
        <div
          style={{ marginTop: "10px", marginBotton: "10px" }}
          className="app-hr-line"
        ></div>
        <div className="account">
          <h5>Account</h5>
          <div className="account-informations">
            <div className="account-information-opt premium-opt">
              <GoldTagIcon />
              <span>Try premium for free</span>
            </div>
            <div className="account-information-opt">
              <span>Setting & Privacy</span>
            </div>
            <div className="account-information-opt">
              <span>Help</span>
            </div>
            <div className="account-information-opt">
              <span>Language</span>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "10px", marginBotton: "10px" }}
          className="app-hr-line"
        ></div>
        <div className="account">
          <h5>Manage</h5>
          <div className="account-informations">
            <div className="account-information-opt">
              <span>Posts & Activity</span>
            </div>
            <div className="account-information-opt">
              <span>Job Posting Account</span>
            </div>
          </div>

        </div>
        <div
          style={{ marginTop: "10px", marginBotton: "10px" }}
          className="app-hr-line"
        ></div>
                  <div className="account-informations">
            <div className="account-information-opt sign-out">
              <span>Sign Out</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProfileDropDownMenu;
