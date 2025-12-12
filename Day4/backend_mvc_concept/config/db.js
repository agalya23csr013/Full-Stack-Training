const mongoose = require("mongoose");

const connection = async() => {
 try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
    
}catch(err){
     console.log("Error to  Connect DB : ",err);
    process.exit(1);
 }
};
module.exports=connection;
