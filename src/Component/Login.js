import axios from "axios";
import React, { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const navigate = useNavigate();
  const sucess = () => toast.success("Login Success");
  const [logindata, setLogindata] = useState();
  const login = (e) => {
    const { name, value } = e.target;
    setLogindata({
      ...logindata,
      [name]: value,
    });
    console.log("logindataas======>", logindata);
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.oopacks.com/api/test/login", logindata)
      .then((resp) => {
        console.log("logeddata==>", resp.data.token);
        if (resp.status == 200) {
          sucess();
          localStorage.setItem("tocken", JSON.stringify(resp.data.token));
          navigate("/Updation");
        }
      });
  };

  return (
    <>
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={loginSubmit}>
          <input
            type="text"
            placeholder=" Enter email or phonenumber"
            onChange={login}
            name="emailorphonenumber"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={login}
          />
          <a href="/registration">Dont Have Account? Register</a>
          <a href="/ForgottPassword">Forgot Password</a>
          <a href="/Updation">Upload files</a>
          <button type="submit">LOGIN</button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
