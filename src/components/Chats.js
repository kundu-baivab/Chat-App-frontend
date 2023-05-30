import React, { useState, useEffect } from "react";
import axios from "axios";

const Chats = () => {
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
  return (
    <>
      {data.chats &&
        data.chats.map((chats) => (
          <div className={`msginfo ${chats.sender.self && "sender"}`}>
            <img
              className={chats.sender.self ? "rimg" : "limg"}
              src={chats.sender.image}
              alt=""
            />
            <div className="mssginfo">
              <div className={chats.sender.self ? "rmessage" : "lmessage"}>
                <span
                  className="text"
                  dangerouslySetInnerHTML={{ __html: chats.message }}
                ></span>
              </div>
              <p className={chats.sender.self ? "rt" : "lt"}>
                {chats.time.split(" ")[1]}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Chats;
