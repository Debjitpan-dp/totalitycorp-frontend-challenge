import React from "react";
import { useState } from "react";
import Layout from "../../layout/index";
import "./home.css";
import DebjitImg from "../../assets/images/Debjit.jpg";
import BackgroundImg from "../../assets/images/background.jpg";
import GFGlogoimg from "../../assets/images/gfg.jpeg";
import GFGpostimg from "../../assets/images/gfg-post.jpeg";
import HeathyfyMe from "../../assets/images/healthy.png";
import {
  AddIcon,
  CommentIcon,
  CommunityIcon,
  EventIcon,
  GoldTagIcon,
  InformationIcon,
  ItemIcon,
  LikedByIcon,
  LikeIcon,
  LinkedinIcon,
  PhotoIcon,
  RepostIcon,
  SendIcon,
  SolidDownIcon,
  ThinDropdownIcon,
  ThreeDotMenuIcon,
  VideoIcon,
  WorldIcon,
  WriteArticleIcon,
} from "../../assets/svg";

function Index() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <Layout>
        <div className="home-page-cards">
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
                    <div
                      className="show-more"
                      onClick={() => setStatus(!status)}
                    >
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
                <div
                  style={{ marginTop: "10px" }}
                  className="app-hr-line"
                ></div>
                <div className="discover">
                  <a href="#">Discover more</a>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------Middle Window------------------------------------------------------- */}
          <div className="home-page-card-middle">
            <div className="middle-card-top">
              <div className="middle-col-user-post-home">
                <img src={DebjitImg} alt="" />
                <input type="text" placeholder="Start a post" />
              </div>

              <div className="home-page-upload-section">
                <ul>
                  <li>
                    <div className="upload-posts">
                      <span>
                        <PhotoIcon />
                      </span>
                      <div className="upload-text">Photo</div>
                    </div>
                  </li>
                  <li>
                    <div className="upload-posts">
                      <span>
                        <VideoIcon />
                      </span>
                      <div className="upload-text">Video</div>
                    </div>
                  </li>
                  <li>
                    <div className="upload-posts">
                      <span>
                        <EventIcon />
                      </span>
                      <div className="upload-text">Event</div>
                    </div>
                  </li>
                  <li>
                    <div className="upload-posts">
                      <span>
                        <WriteArticleIcon />
                      </span>
                      <div className="upload-text">Write Article</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sort-by">
              <hr />
              <p>
                Sort by:&nbsp; <span>Top </span>
                <SolidDownIcon />
              </p>
            </div>
            {[..."12345678910"].map(() => {
              return (
                <div className="post-container">
                  {/* <div className="who-viewed-post">
                    <span className="who-viewed-post-details">
                      <span>LinkedIn</span> commented on this
                    </span>
                    <span className="who-viewed-post-dots">
                      <ThreeDotMenuIcon />
                    </span>
                  </div> */}
                  {/* <div
                    style={{ marginTop: "2px", marginBottom: "2px" }}
                    className="app-hr-line"
                  ></div> */}
                  <div className="user-post-details">
                    <div className="user-post-details-img">
                      <img src={GFGlogoimg} alt="logo" />
                    </div>
                    <div className="user-post-main-details">
                      <span className="user-post-details-name">
                        GeeksforGeeks
                      </span>
                      <span className="user-post-details-about">
                        1,021,429 followers
                      </span>
                      <span className="user-post-postingTime">
                        4h.
                        <WorldIcon />
                      </span>
                    </div>
                  </div>
                  <div className="main-post-feed-post">
                    <p>
                      Hey Geeks! Let's learn together 👨‍💻🙋‍♀️ Here's one of the
                      questions asked at MAANG interviews:
                    </p>
                    <br />
                    <p>
                      You have 4 bottles of milk. One of them is poisonous while
                      the other 3 are
                      {status ? (
                        <span>
                          {" "}
                          non-poisonous. There is a rat that dies exactly after
                          10 hours of drinking the poisoned bottle. You have a
                          clock that measures time only in hours. Suggest an
                          optimal strategy to identify the poisoned bottle
                          within 24 hours. Comment down your answers and we will
                          LYK if it is correct.
                          <br />
                          <p>P.S. Don't Google</p>{" "}
                        </span>
                      ) : (
                        <div className="see-more-content">
                          <span onClick={() => setStatus(!status)}>
                            ...See more
                          </span>
                        </div>
                      )}
                    </p>
                    <img src={GFGpostimg} alt="" />
                    <div className="liked-by-people">
                      <LikedByIcon />
                      <span>121</span>
                    </div>
                    <div className="post-stats">
                      <div></div>
                    </div>
                    <div
                      style={{ marginTop: "3px" }}
                      className="app-hr-line"
                    ></div>
                    <div className="post-action">
                      <ul>
                        <li>
                          <div className="reaction-icon">
                            <LikeIcon />
                          </div>
                          <div className="reaction-text">Like</div>
                        </li>
                        <li>
                          <div className="reaction-icon">
                            <CommentIcon />
                          </div>
                          <div className="reaction-text">Comment</div>
                        </li>
                        <li>
                          <div className="reaction-icon">
                            <RepostIcon />
                          </div>
                          <div className="reaction-text">Repost</div>
                        </li>
                        <li>
                          <div className="reaction-icon">
                            <SendIcon />
                          </div>
                          <div className="reaction-text">Send</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ----------------------------------------------Right Window------------------------------------------------------------ */}
          <div className="home-page-card-right">
            <div className="linkedin-news-section">
              <div className="linkedin-news-head">
                <p>LinkedIn News</p>{" "}
                <span>
                  <InformationIcon />
                </span>
              </div>
              <div className="linkedin-news">
                <div className="linkedin-news-list">
                  <div className="linkedin-news-details-col1">
                    <span>•</span>
                  </div>
                  <div className="linkedin-news-details-col2">
                    <span>UK PM Truss resigns after six weeks</span>
                    <span>8h ago • 87,258 readers</span>
                  </div>
                </div>
              </div>
              <div className="linkedin-news">
                <div className="linkedin-news-list">
                  <div className="linkedin-news-details-col1">
                    <span>•</span>
                  </div>
                  <div className="linkedin-news-details-col2">
                    <span>IT firms face high attrition</span>
                    <span>1day ago • 87,258 readers</span>
                  </div>
                </div>
              </div>
              <div className="linkedin-news">
                <div className="linkedin-news-list">
                  <div className="linkedin-news-details-col1">
                    <span>•</span>
                  </div>
                  <div className="linkedin-news-details-col2">
                    <span>Most affordable Indian cities</span>
                    <span>2d ago • 10,178 readers</span>
                  </div>
                </div>
              </div>
              <div className="linkedin-news">
                <div className="linkedin-news-list">
                  <div className="linkedin-news-details-col1">
                    <span>•</span>
                  </div>
                  <div className="linkedin-news-details-col2">
                    <span>Web3 startups on the rises</span>
                    <span>22h ago • 468 readers</span>
                  </div>
                </div>
                {/* <div className="show-more-news">
                  <h6>Show more</h6>
                  <ThinDropdownIcon />
                </div> */}
                
              </div>
              {status ? (
                  <div>
                    <div className="linkedin-news">
                      <div className="linkedin-news-list">
                        <div className="linkedin-news-details-col1">
                          <span>•</span>
                        </div>
                        <div className="linkedin-news-details-col2">
                          <span>Most affordable Indian cities</span>
                          <span>2d ago • 10,178 readers</span>
                        </div>
                      </div>
                    </div>
                    <div className="linkedin-news">
                      <div className="linkedin-news-list">
                        <div className="linkedin-news-details-col1">
                          <span>•</span>
                        </div>
                        <div className="linkedin-news-details-col2">
                          <span>Most affordable Indian cities</span>
                          <span>2d ago • 10,178 readers</span>
                        </div>
                      </div>
                    </div>
                    <div className="linkedin-news">
                      <div className="linkedin-news-list">
                        <div className="linkedin-news-details-col1">
                          <span>•</span>
                        </div>
                        <div className="linkedin-news-details-col2">
                          <span>Most affordable Indian cities</span>
                          <span>2d ago • 10,178 readers</span>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div
                      className="show-more-news"
                      onClick={() => setStatus(!status)}
                    >
                      <h6>Show less</h6>
                      <ThinDropdownIcon />
                    </div>
                  </div>
                ) : (
                  <div
                    className="show-more-news linkedin-news"
                    onClick={() => setStatus(!status)}
                  >
                    <h6>Show more</h6>
                    <ThinDropdownIcon />
                  </div>
                )}
            </div>
            <div className="right-side-ad-section">
              <small>Ad &middot; &middot; &middot;</small>
              <p>Debjit, stay informed on industry news and trends</p>
              <div>
                <img src={DebjitImg} alt="Profile-img" />
                <img src={HeathyfyMe} alt="Ad-img" />
              </div>
              <h5>
                Debjit, you might like to follow <br />
                <b>HealthifyMe</b>
              </h5>
              <a href="#" className="follow-btn">
                Follow
              </a>
            </div>
            <div className="right-side-useful-links">
              <a href="#">About</a>
              <a href="#">Accecibiltiy</a>
              <a href="#">Help Center</a>
              <a href="#" onClick={()=>setStatus(!status)}>
                Privacy & Terms
                {/* {
                  status?             <div className="privacy-policy">
                <div className="policies">Privacy Policy</div>
                <div className="policies">User Agreement</div>
                <div className="policies">Cookie Policy</div>
                <div className="policies">Copyright Policy</div>
              </div>:null
                } */}
                <span>
                  <ThinDropdownIcon />
                </span>
              </a>

              <a href="#">Ad choices</a>
              <a href="#">Advertising</a>
              <a href="#">
                Business Services
                <span>
                  <ThinDropdownIcon />
                </span>
              </a>
              <a href="#">Get the LinkedIn App</a>
              <a href="#">More</a>
            </div>

            <div className="copyright-msg">
              <LinkedinIcon /> <p>LinkedIn Corporation © 2022</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Index;
