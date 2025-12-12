const express = require("express");
const router = express.Router();
const {
  addStudent,
  getAllStudents,
  getStudentBasedOnId,
  deleteStudent
} = require("../controller/StudentController");


router.post("/addstudent", addStudent);
router.get("/getallstudents", getAllStudents)
router.get("/getstudent/:id", getStudentBasedOnId); 
router.delete("/deletestudent/:id", deleteStudent)

module.exports=router;