const express = require('express');
const env=require("dotenv");
const connection=require("./config/db")
const cors=require("cors")
const app = express()
env.config();


connection()

app.use(cors())
app.use(express.json())
const port=process.env.PORT;



const studentRoutes=require("./routes/StudentRoute")

app.use("/api",studentRoutes)

app.listen(port, () =>{
     console.log(`Server Running On port ${port}!`)
})