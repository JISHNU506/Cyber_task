import axios from 'axios';
import React, { useState } from 'react'

export default function Updation() {
    const  [sentotp,setSentotp]=useState()
const otp=(e)=>{
    const{name,value}=e.target;
    setSentotp({
        ...sentotp,
        [name]:value,
    });
    console.log("mobnum=====>",sentotp);



    }
    const submitotp=(e)=>{
        e.preventDefault();
        axios.post("https://api.oopacks.com/api/auth/sendotp",sentotp)
        .then(resp=>console.log("oto====>",resp))
        
}

  return (
    <div>
           <div className="login-card">
        <h2>Generate OTP</h2>
 
        <form className="login-form"  onSubmit={submitotp} >
          <input
            type="text"
            placeholder=" Enter  phonenumber"
        name='phonenumber'
     onChange={otp}
          />
         <a href="/">Back to Login Page</a>
          <button type="submit">SEND OTP</button>
        </form>
    
      </div>
      
    </div>
  )
}
