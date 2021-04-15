import React from "react";
import AuthNavBarContainer from "../nav_bar/auth_nav_bar_container";

const SplashPage = () => {
  return (
    <div>
      <AuthNavBarContainer />
      <div className="auth-nav-box-shadow">
        <div className="splash-page-header">
          <div className="splash-page-contain">
            <div className="splash-page-hero">
              <h1 className="splash-page-hero-h1">Investing for Everyone</h1>
              <h2 className="splash-page-hero-h2">
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations apply.
              </h2>
            </div>
            <div className="photo-gif-splash">
              <iframe
                src="https://giphy.com/embed/xTiTnqUxyWbsAXq7Ju"
                width="400"
                height="480"
                frameBorder="0"
                className="counting-money-gif"
                allowFullScreen
              ></iframe>
              <img src={window.splashphone} className="splash-phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
