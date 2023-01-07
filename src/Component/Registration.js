import React, { useState } from "react";
import "./Style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const validation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneno = /^\d{10}$/;
  const reg = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });

    console.log("details====>", register);
  };
  const submit = (event) => {
    event.preventDefault();
    if (
      register.emailorphonenumber.match(validation) ||
      register.emailorphonenumber.match(phoneno)
    ) {
      axios
        .post("https://api.oopacks.com/api/test/register", register)
        .then((resp) => {
          console.log("responce======>", resp);

          navigate("/");
        });
    } else {
      setRegister(true);
      toast.warn("INVALID EMAIL OR PHONE NUMBER!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div
        className="login-card"
        id={register == true ? "reg-card2" : "reg-card"}
      >
        <h2>Registration Form</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={submit}>
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
            onChange={reg}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME"
            onChange={reg}
          />
          <input
            type="text"
            name="emailorphonenumber"
            id={register == true ? "code-red" : ""}
            placeholder="E-MAIL or PHONE NUMBER"
            onChange={reg}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id={register == true ? "code-red" : ""}
            onChange={reg}
          />
          <a href="/ForgottPassword">Forgot your password?</a>
          <button type="submit">Register</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
