import React from "react";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="first-container">
        <h1 className="title">Hi and Welcome to Pic-A-Place</h1>
        <br />
        <h3 className="text">
          This is a website for photographers who like to take pictures of
          different places and share them.
        </h3>
        <br />
        <h3 className="text">
          Also for those who like to see pictures of some places and wonder
          where they should go next time they travel.
        </h3>
      </div>
      <div className="second-container">
        <div className="about-section">
          <h2 className="subTitle">
            It's simple as that, here's how it works..
          </h2>
          <h3 className="text">
            First you create an account in order to share your places with
            others
          </h3>
          <img src="./images/pica3.png" alt="login page" />
        </div>
        <div className="about-section">
          <h2 className="subTitle">Once you are ready</h2>
          <h3 className="text">
            You may take a look at other users pictures of places and and post
            your pictures at the under your account
          </h3>
          <img src="./images/pica1.png" alt="user with a place picture" />
        </div>
        <div className="about-section">
          <h2 className="subTitle">Final steps</h2>
          <h3 className="text">
            Now after adding your place, you can enjoy our website with all
            users sharing their places and they could enjoy yours
          </h3>
          <img src="./images/pica2.png" alt="shared place" />
        </div>
      </div>
    </>
  );
};

export default About;
