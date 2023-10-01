import React from "react";
import Header from "../components/Header";
import "./pages.css";
import copy from '../assets/copy.svg'
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Preview = () => {
      const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ screen: true });
  return (
    <>
      <Header />
      <div className="preview-ctn">
        <info>
          <h3>Your video is ready!</h3>
          <div className="name">
            <small>Name</small>
            <p>
              Untitled_Video_20232509 <span className="icon"></span>
            </p>
          </div>

          <label htmlFor="">
            <input
              className="info-input"
              type="email"
              value="enter email of receiver"
              placeholder="enter email of receiver"
            />
            <button className="send-btn">Send</button>
          </label>

          <label className="video-url">
            <input
              className="input2"
              type="url"
              name=""
              id=""
              disabled
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <button className="send-btn">
              {" "}
              <img src={copy} alt="copy" /> Copy
            </button>
          </label>
          <label htmlFor="share" className="share">
            <p> Share your video</p>
            <div className="share-ctn">
              <button>Facebook</button>
              <button>WhatsApp</button>
              <button>Telegram</button>
            </div>
          </label>
        </info>

        <span className="v-divider"></span>

        <preview>
          <video
            src={mediaBlobUrl}
            autoPlay
            loop
            controls
            className="video-player"
          ></video>
          <p>{status}</p>
          <button onClick={startRecording}>Start</button>
          <button onClick={stopRecording}>Stop</button>

          <label htmlFor="transcript">
            <span></span>
          </label>
        </preview>
      </div>
      <div className="save">
        <h5>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
              </h5>
              <button>Save video</button>
              <b>Don't have an account? <Link to='/login'>Create account</Link></b>
          </div>

          <br />
          <br />
          
          <Footer/>
    </>
  );
};

export default Preview;
