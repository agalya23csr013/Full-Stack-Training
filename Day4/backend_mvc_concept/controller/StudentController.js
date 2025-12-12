const student = require("../model/studentmodel");

const addStudent = async (req, res) => {
  const newStudent = new student({
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    phone: req.body.phone,
    gender: req.body.gender,
    branch: req.body.branch,
    rollNo: req.body.rollNo,
  });
  await newStudent.save();
  res.status(201).json({ message: "User added successfully" }, newStudent);
};

const getAllStudents = async (req, res) => {
  const allStudentDetails = await student.find();
  res.status(200).json({ allStudentDetails });
};

const getStudentBasedOnId = async (req, res) => {
  const studentDetails = await student.findById(req.params.id);
  if (!student) {
    res.status(500).json({ message: "User not found" });
  }
  res.status(200).json({ studentDetails });
};

const deleteStudent = async (req, res) => {
  const deletedStudent = await student.findByIdAndDelete(req.params.id);
  if (!deletedStudent) {
    res
      .status(500)
      .json({ message: "User not found , unable to delete details" });
  }
  res
    .status(200)
    .json({
      deletedStudent,
      message: "student Details deleted successfully..",
    });
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentBasedOnId,
  deleteStudent
};
