import React from 'react'
import "./App.css";
import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from "react-media-recorder";

import Logo from "./assets/logo.png";
import Settings from "./assets/setting-2.png";
import CloseTab from "./assets/close-circle.png";
import FullScreen from "./assets/monitor.png";
import CurrentTab from "./assets/copy.png";
import VideoCamera from "./assets/video-camera.png";
import ToggleSwitch from "./Toggle";
import { Link, Routes, Route } from 'react-router-dom';



const App = () => {

    function recordFunc() {

         document.body.innerHTML = "Hello Wprld";
        //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        //     const activeTabId = tabs[0].id
        //     chrome.scripting.executeScript({
        //         target: { tabId: activeTabId },
        //         function:()=>document.body.innerHTML="Hello Wprld"
        //     })
        // })
    }

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });
  
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="setting">
            <img src={Settings} alt="settings icon" />
            <img src={CloseTab} alt="settings icon" />
          </div>
        </div>

        <p>This extension helps you record and share help videos with ease.</p>

        <div className="active-tab">
          <span>
            <img src={FullScreen} alt="full screen icon" />
            <span style={{ color: "#928FAB" }}>Full screen</span>
          </span>

          <span>
            <img src={CurrentTab} alt="current tab icon" />
            Current tab
          </span>
        </div>

        <div className="permit">
          <div className="toggle-ctn">
            <span>
              {" "}
              <img src={VideoCamera} alt="camera" />
              Camera
            </span>
            <ToggleSwitch label=" " />
          </div>
          <div className="toggle-ctn">
            <span>
              {" "}
              <img src={VideoCamera} alt="camera" />
              Audio
            </span>
            <ToggleSwitch label="  " />
          </div>
        </div>

        <button className="record" onClick={startRecording}>
         Start Recording 
        </button>

        {/* <div className="controlRec">
          <video src={mediaBlobUrl} autoPlay loop controls className='video-player'></video>
          <p>{status}</p>
          <button onClick={startRecording}>Start</button>
          <button onClick={stopRecording}>Stop</button>
        </div> */}
      </div>
    );
}

export default App