import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    type: "",
    phone: "",
    gender: "",
    branch: "",
    rollNo: "",
  });

  const handleChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:5000/api/addstudent",
        studentDetails
      );
      toast.success(res.data.message);

      setStudentDetails({
        name: "",
        email: "",
        type: "",
        phone: "",
        gender: "",
        branch: "",
        rollNo: "",
      });
    } catch (err) {
      toast.error("Error to add Student");
    }
  };

  return (
    <div>
      <h1>Add Student Information</h1>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            name="name"
            value={studentDetails.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            name="email"
            value={studentDetails.email}
            placeholder="Enter email"
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Type :</label>
          <select name="type" value={studentDetails.type} onChange={handleChange}>
            <option value="">--Choose Type---</option>
            <option value="Student">Student</option>
            <option value="Staff">Faculty</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Phone No: </label>
          <input
            type="tel"
            name="phone"
            value={studentDetails.phone}
            required
            placeholder="+91"
            onChange={handleChange}
            pattern="[5-9]{1}[0-9]{9}"
          />
          <br />
          <br />
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            required
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            required
            onChange={handleChange}
          />
          Female
          <br />
          <br />
          <label htmlFor="">Branch :</label>
          <select name="branch" value={studentDetails.branch} onChange={handleChange}>
            <option value="">--Choose Branch---</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ISE">ISE</option>
            <option value="IT">IT</option>
            <option value="AIML">AIML</option>
            <option value="AIML & DS">AIML & DS</option>
            <option value="AIDS">AIDS</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Roll Number : </label>
          <input
            type="text"
            name="rollNo"
            value={studentDetails.rollNo}
            placeholder="23CSR..."
            required
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddUser;
