import React from "react";
import AuthNavBarContainer from "../nav_bar/auth_nav_bar_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const SplashPage = ({ login }) => {
  return (
    <div className="splash-page">
      <div>
        <AuthNavBarContainer />
        <div className="splash-page-header">
          <div className="splash-page-contain">
            <div className="splash-page-hero">
              <h1 className="splash-page-hero-h1">Investing for Everyone</h1>
              <h2 className="splash-page-hero-h2">
                Commission-free investing, plus the tools you need to put your
                money in motion. Sign up and get your first stock for free.
                Certain limitations apply.
                <br />
                <input
                  type="button"
                  value="Demo Login"
                  onClick={() =>
                    login({ email: "test@mail.com", password: "123456" })
                  }
                  className="demo-login-input-button"
                />
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
              />
              <img src={window.splashphone} className="splash-phone" />
            </div>
          </div>
        </div>
        <div className="splash-second-flex">
          <div className="github-link">
            <a
              href="https://github.com/KennySchl/Tulip-Exchange"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} className="splash-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kenneth-schlappkohl"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="splash-icon" />
            </a>
            <a href="mailto:kschlappkohl@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                className="splash-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
