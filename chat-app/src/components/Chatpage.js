import React, { useState, useEffect } from "react";
import logo from "../ChatLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ReactScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";
import { user } from "./Login";
import Message from "./Message";

const PORT = "http://localhost:5000";
let socket;

const Chatpage = () => {
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([]);

  const sendChat = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  console.log(messages);
  useEffect(() => {
    socket = io(PORT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setid(socket.id);
    });
    console.log(socket);
    socket.emit("joined", { user });

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="chatPage flex justify-center items-center w-[100vw] h-[100vh] bg-blue-100">
      <div className="chatContainer bg-white h-full sm:h-[60%] w-full sm:w-[50%]">
        <div className="header flex items-center justify-between bg-slate-200 h-[8%] sm:h-[13%] p-3">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className=" w-14 p-2" />
            <p className=" text-black p-2 text-lg font-bold">CHAT APP</p>
          </div>
          <div className=" h-auto w-auto hover:bg-red-500 hover:text-white">
            <a href="/">
              <CloseIcon />
            </a>
          </div>
        </div>
        <ReactScrollToBottom className="chatBox h-[84%] sm:h-[74%] box-border">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              lr={item.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox h-[8%] sm:h-[13%] box-border flex border-black border-t-2">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? sendChat() : null)}
            type="text"
            id="chatInput"
            placeholder="Message"
            className=" w-[80%] p-2 border-none outline-none text-base box-border "
          />
          <button
            onClick={sendChat}
            className="sendBtn w-[21%] p-2 border-none outline-none bg-slate-300 hover:bg-slate-400 text-base cursor-pointer box-border"
          >
            <SendOutlinedIcon className="w-[2vw]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
