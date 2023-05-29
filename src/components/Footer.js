import React,{useState} from "react";

import cam from "../camera.png";
import vid from "../video.png";
import doc from "../document.png";

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div className="chat-input">
      <span className="icon0" onClick={togglePopup}></span>
      <span className="icon"></span>
      <input type="text" placeholder="Type your message..." />
      {isPopupOpen && (
        <div className="popup-menu">
          <ul className="pop-item">
            <img className="ic" src={cam} alt="" />
          </ul>
          <ul className="pop-item">
            <img className="ic" src={vid} alt="" />
          </ul>
          <ul className="pop-item">
            <img className="ic" src={doc} alt="" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
