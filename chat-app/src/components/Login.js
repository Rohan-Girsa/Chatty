import React, { useState } from "react";
import logo from "../ChatLogo.png";
import { Link } from "react-router-dom";

let user;

const Login = () => {
  const [name, setName] = useState("");
  const loginIn = () => {
    user = document.getElementById("loginInput").value;
    document.getElementById("loginInput").value = "";
  };

  return (
    <div className="loginPage flex justify-center items-start sm:items-center w-[100vw] h-[100vh] bg-blue-100">
      <div className="loginContainer flex flex-col items-center mt-36 w-full sm:w-1/2">
        <img src={logo} alt="logo" className=" w-[30vw] sm:w-[10vw]" />
        <p className=" text-black items-center w-[70vw] sm:w-[25vw] p-4 sm:p-2 text-xl sm:text-lg font-bold border-b-4 sm:border-b-2 border-black box-border text-center">
          CHAT APP
        </p>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          placeholder="Enter Your Name"
          type="text"
          id="loginInput"
          className=" w-[70vw] sm:w-[25vw] mt-4 p-4 sm:p-2 border-none outline-none text-lg sm:text-base box-border"
        />
        <Link
          onClick={(e) => (!name ? e.preventDefault() : null)}
          to="/Chatpage"
        >
          <button
            onClick={loginIn}
            className="loginbtn w-[70vw] sm:w-[25vw] mt-4 p-4 sm:p-2 border-none outline-none bg-slate-300 hover:bg-slate-400 text-lg sm:text-base cursor-pointer box-border font-semibold"
          >
            Login In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
export { user };
