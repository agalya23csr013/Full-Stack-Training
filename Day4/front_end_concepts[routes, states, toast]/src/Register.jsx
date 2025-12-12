import React from "react";
import { useState } from "react";
import "./styles/register.css"
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandler=(e)=>{
    e.preventDefault()
    console.log(`Name :${name}`);
    console.log(`Email :${email}`);
    console.log(`Phone No :${phoneNo}`);
    console.log(`Created Password :${password}`);
  }

  return (
    <div>
      <form action="">
        <fieldset>
          <h2>Register Form</h2>
          <label htmlFor="">User Name :</label>
          <input
            type="text"
            placeholder="Enter user name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Create Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Phone :</label>
          <input
            type="tel"
            placeholder="Enter phone Number"
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <button type="submit" onClick={submitFormHandler}>Register </button>
          <button type="reset">Cancel </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
