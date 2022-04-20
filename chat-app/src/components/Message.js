import React from "react";
import "./LeftRight.css";

const Message = ({ user, message, lr }) => {
  if (user) {
    return (
      <div
        className={`messageBox m-3 p-2 inline-block clear-both rounded-md text-base text-black ${lr}`}
      >{`${user}: ${message}`}</div>
    );
  } else {
    return (
      <div
        className={`messageBox m-3 p-2 inline-block clear-both rounded-md text-base text-black ${lr}`}
      >{`${message}:You`}</div>
    );
  }
};

export default Message;
