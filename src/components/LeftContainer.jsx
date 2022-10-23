import React,{useState} from "react";
import DebjitImg from "../assets/images/Debjit.jpg";
import BackgroundImg from "../assets/images/background.jpg";
import "./Style.css"
import {
  AddIcon,
  CommunityIcon,
  GoldTagIcon,
  ItemIcon,
  ThinDropdownIcon,
} from "../assets/svg";
function LeftContainer(props) {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <div className="home-page-card-left">
        <div className="home-page-card-left-home">
          <div className="col-card-left-img1">
            <img src={BackgroundImg} alt="Background-Image" />
          </div>
          <div className="col-card-left-img2">
            <img src={DebjitImg} alt="Profile-image" />
          </div>
          <div className="profile-home-page-name">
            <h1>Debjit Pan</h1>
          </div>

          <div className="profile-home-page-briefAbout">
            <p>Java Full Stack Intern || MCA from RCCIIT</p>
          </div>
          <div
            style={{ marginTop: "10px", marginBottom: "10px" }}
            className="app-hr-line"
          ></div>
          <div className="profile-view">
            <div className="profile-view-count">
              <span>Who's viewed your profile</span>
              <span>33</span>
            </div>
            <div className="profile-connection">
              <div className="profile-view-connection">
                <span>Connections</span>
                <span>224</span>
              </div>
              <div className="profile-grow-network">
                <span>Grow your network</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }} className="app-hr-line"></div>
          <div className="profile-premium">
            <p>Access exclusive tools & insights</p>
            <p>
              <GoldTagIcon />
              Get Hired Faster, Try Premium Free
            </p>
          </div>
          <div className="app-hr-line"></div>
          <div className="profile-items">
            <p>
              <ItemIcon /> My items
            </p>
          </div>
        </div>

        <div className="home-page-card-left-home">
          <div className="recent-details">
            <div className="recent">
              <h6>Recent</h6>
              <div className="recent-details-info-one-hover">
                <div className="recent-details-info-one">
                  <CommunityIcon />
                  <p>Python Developer and Django...</p>
                </div>
              </div>

              <div className="recent-details-info-one-hover">
                <div className="recent-details-info-one">
                  <CommunityIcon />
                  <p>Totality Corp</p>
                </div>
              </div>

              <div className="recent-details-info-one-hover">
                <div className="recent-details-info-one">
                  <CommunityIcon />
                  <p>Java Full Stack Developer Hub</p>
                </div>
              </div>

              <div className="recent-details-info-one-hover">
                <div className="recent-details-info-one">
                  <CommunityIcon />
                  <p>The Flexbox Jobs</p>
                </div>
              </div>
            </div>
            <div className="groups">
              <h5>Groups</h5>
              <div className="recent-details-info-two">
                <CommunityIcon />
                <p>Web designer and HTML CSS...</p>
              </div>
              <div className="recent-details-info-two">
                <CommunityIcon />
                <p>Python Developer and Django...</p>
              </div>
              <div className="recent-details-info-two">
                <CommunityIcon />
                <p>Totality Corp</p>
              </div>
              {/* {
                    status? <h1>hello</h1>:null
                  } */}
              {status ? (
                <div>
                  <div className="recent-details-info-two">
                    <CommunityIcon />
                    <p>Java Developer and Spring...</p>
                  </div>
                  <div className="recent-details-info-two">
                    <CommunityIcon />
                    <p>Off campus recruitments...</p>
                  </div>
                  <div className="recent-details-info-two">
                    <CommunityIcon />
                    <p>UI,UX designer...</p>
                  </div>
                  <div className="show-more">
                    <h6>See all</h6>
                  </div>
                </div>
              ) : (
                <div className="show-more" onClick={() => setStatus(!status)}>
                  <h6>Show more</h6>
                  <ThinDropdownIcon />
                </div>
              )}
            </div>
            <div className="events">
              <h6>Events</h6>
              <span>
                <AddIcon />
              </span>
            </div>
            <div className="events">
              <h6>Followed Hashtags</h6>
            </div>
            <div style={{ marginTop: "10px" }} className="app-hr-line"></div>
            <div className="discover">
              <a href="#">Discover more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
