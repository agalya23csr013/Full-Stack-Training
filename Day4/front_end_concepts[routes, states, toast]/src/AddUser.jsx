import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    city: "",
  });

  const [gender, setGender] = useState("");

  const addUserHandler = async (e) => {
    e.preventDefault();

    let gen = document.getElementsByName("gender");
    let city = await document.getElementsByName("city");
    gen.forEach((inp) => {
      if (inp.checked) {
        setGender(inp.value);
      }
    });

    city.forEach((opt) => {
      if (opt.selected) {
        setUserDetails({ ...userDetails, city: opt.value });
      }
    });

    console.log("Name ", userDetails.name);
    console.log("Email ", userDetails.email);
    console.log("PHone No ", userDetails.phoneNo);
    console.log("City", userDetails.city);
    console.log("Gender :" + gender);
    toast.success("User Added Successfully");
};

const resetHandler=()=>{
      toast.warning("Form Data Reset Successfully.. !");

  }
  return (
    <div>
      <h1 className="text-center bg-info m-4 p-3">Add User Details </h1>
      <form action="">
        <fieldset>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => {
              setUserDetails({ ...userDetails, name: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="Enter Email "
            required
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Gender :</label>
          <input type="radio" value="Male" name="gender" /> <em>Male</em>
          <input type="radio" value="Female" name="gender" /> <em>Female</em>
          <br />
          <br />
          <label htmlFor="">Phone No :</label>
          <input
            type="tel"
            placeholder="+91"
            required
            onChange={(e) => {
              setUserDetails({ ...userDetails, phoneNo: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">City :</label>
          <select name="" id="">
            <option value="">Choose City</option>
            <option name="city" value="Hyderabad">
              Hyderabad
            </option>
            <option name="city" value="Bangalore">
              Bangalore
            </option>
            <option name="city" value="Kochi">
              Kochi
            </option>
            <option name="city" value="chennai">
              chennai
            </option>
            <option name="city" value="vijayawada">
              vijayawada
            </option>
          </select>
          <br />
          <div className="row btn-container">
            <button
              type="submit"
              onClick={addUserHandler}
              className="btn btn-primary"
            >
              <strong>Add User</strong>
            </button>
          </div>
          <div className="row">
            <button type="reset" onClick={resetHandler} className="btn btn-warning">
              <strong>Reset </strong>
            </button>
          </div>
        </fieldset>
      </form>



      <ToastContainer/>
    </div>
  );
};

export default AddUser;
