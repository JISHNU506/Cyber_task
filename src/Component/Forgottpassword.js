import axios from "axios";
import React, { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Forgottpassword() {
  const navigate = useNavigate();
  const [forgotdata, setForgotdata] = useState();
  const Forgot = (e) => {
    const { name, value } = e.target;
    setForgotdata({
      ...forgotdata,
      [name]: value,
    });
    console.log("forgotdataas======>", forgotdata);
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://api.oopacks.com/api/test/forgotpassword", forgotdata)
      .then((resp) => console.log("logeddata==>", resp));
  };

  return (
    <div>
      <div className="login-card">
        <h2>Forgott Password</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={loginSubmit}>
          <input
            type="text"
            placeholder=" Enter email or phonenumber"
            onChange={Forgot}
            name="emailorphonenumber"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={Forgot}
          />
          {/* <a href="/registration">Dont Have Account? Register</a>
    <a href="/ForgottPassword">Forgot Password</a> */}
          <a href="/">Back to Login Page</a>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
