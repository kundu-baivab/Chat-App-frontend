import React,{useState,useEffect} from "react";
import axios from "axios";

import ba from "../left-arrow.png";
import ed from "../edit.png";
import mv from "../menu-vertical.png";
import p from "../people.png";
import dm from "../delete-message.png";
import c from "../call.png";

const Header = () => {
  const [data, setInfo] = useState({});

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://3.111.128.67/assignment/chat?page=0"
      );
      setInfo(response.data);
    } catch (error) {
      console.error("Error retrieving messages:", error);
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
  <>
    <div className="head">
          <div className="lhead">
            <img className="arr" src={ba} alt="" />
            <h1 className="lh">
              {data.name &&
                data.name.split(" ")[0] + " " + data.name.split(" ")[2]}
            </h1>
          </div>
          <div className="h3">
            <img className="edit" src={ed} alt="" />
          </div>
        </div>
        <div className="head2">
          <div className="image-container">
            {data.chats &&
              [...new Set(data.chats.map((chats) => chats.sender.image))]
                .map((image, index) => (
                  <div className="image-wrapper" key={index}>
                    <img
                      className={`imgs img${index + 1}`}
                      src={image}
                      alt=""
                    />
                  </div>
                ))
                .reduce((rows, img, index) => {
                  if (index % 2 === 0) rows.push([]);
                  rows[rows.length - 1].push(img);
                  return rows;
                }, [])
                .map((row, index) => (
                  <div className="image-row" key={index}>
                    {row}
                  </div>
                ))}
          </div>
          <div className="journey">
            <p
              className="jtext"
              dangerouslySetInnerHTML={{
                __html: `From <b>${data.from}</b> <br /> To <b>${data.to}</b>`,
              }}
            ></p>
          </div>{" "}
          <div className={`dropdown-button ${isDropdownOpen ? "open" : ""}`}>
            <img
              className="menu-button"
              src={mv}
              alt="Menu"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <ul className="menu-item">
                  <img className="ic" src={p} alt="" />
                  Members
                </ul>
                <ul className="menu-item">
                  <img className="ic" src={c} alt="" />
                  Share Number
                </ul>
                <ul className="menu-item">
                  <img className="ic" src={dm} alt="" />
                  Report
                </ul>
              </ul>
            )}
          </div>
        </div>
        <p className="pt">
          <span className="st">
            {data.chats &&
              data.chats.length > 0 &&
              new Date(data.chats[0].time).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
          </span>
        </p>
  </>
)};

export default Header;
