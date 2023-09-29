import React from "react";
import "./home.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// Image imports
import Img1 from "../../assets/AdobeStock1.png";
import Img2 from "../../assets/AdobeStock_man.png";
import Img3 from "../../assets/woman-2.png";
import dot2 from "../../assets/dot-grid-2.png";
import dot1 from "../../assets/dot-grid-1.png";
import recordIcon from "../../assets/Icon placeholder.png";
import shareIcon from "../../assets/Icon placeholder (1).png";
import revisitIcon from "../../assets/Icon placeholder (2).png";
import screenshot from "../../assets/Video Repository.png";
import recPreview from "../../assets/rec-preview.svg.png";

const Home = () => {
  return (
    <div id="home">
      <nav>
        <logo>
          <img src={Logo} alt="help me out logo" />
        </logo>

        <navlinks>
          <p>Features</p>
          <p>How it works</p>
        </navlinks>

        <Link to="/" className="link">
          Get started
        </Link>
      </nav>

      <hero>
        <herotext>
          <h1>Show Them Don’t Just Tell</h1>
          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button>
            Install HelpMeOut
            <span>
              <BsArrowRight />
            </span>
          </button>
        </herotext>
        <heroimage>
          <img src={Img1} alt="" />
          <img src={Img3} alt="" />
          <img src={Img2} alt="" className="img3" />

          <span className="dots">
            <img src={dot1} alt="" className="dot1" />
            <img src={dot2} alt="" className="dot2" />
          </span>
        </heroimage>
      </hero>

      {/* features */}
      <div className="features">
        <div className="feature-head">
          <h2>Features</h2>
          <p>Key Highlights of Our Extension</p>
        </div>

        <div className="feature-body">
          <div className="feat-items">
            <div className="feature">
              <img src={recordIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Simple Screen Recording</h3>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={shareIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Easy-to-Share URL</h3>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="feature">
              <img src={revisitIcon} alt="record icon" />
              <div className="feature-desc">
                <h3>Revisit Recordings</h3>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <div className="screeshot">
            <img src={screenshot} alt="" />
          </div>
        </div>
      </div>

      {/* how it works */}
      <div id="how-it-works">
        <div className="how-head">
          <h2> How it works</h2>
        </div>
        <div className="hows-ctn">
          <div className="how">
            <span className="how-num">1</span>
            <h3>Record Screen</h3>
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={recPreview} alt="" />
          </div>
          <div className="how">
            <span className="how-num">1</span>
            <h3>Share Your Recording </h3>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={recPreview} alt="" />
          </div>
          <div className="how">
            <span className="how-num">1</span>
            <h3>Learn Effortlessly</h3>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={recPreview} alt="" />
          </div>
        </div>
          </div>
          
          {/* FOOTER */}
          <div id="footer">
              
          </div>
    </div>
  );
};

export default Home;
