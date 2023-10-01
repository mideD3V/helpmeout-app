import React from "react";
import FBcontent from "../assets/fb-cont.png";
import avater from "../assets/avater.png";
import rec from "../assets/rec.png";
import controls from "../assets/controls.png";


const Recording = () => {
  return (
    <div className="recording">
      <img src={FBcontent} alt="facebook content" className="fb-cont" />

      <div className="rec-controls">
        <div className="avater">
          <img src={avater} alt="" />
        </div>
        <div className="ctrls">
          <span>00:03:45 </span>
          <span className="ctrl-img">
            <img src={rec} alt="rec dot" />
                  </span>
                  <img src={controls} alt="" className="ctrl-btns"/>
          {/* <button>start</button>
          <button>stop</button> */}
        </div>
      </div>
    </div>
  );
};

export default Recording;
