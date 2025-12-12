const  mongoose= require("mongoose");

const staffSchema=new mongoose.Schema(
    {
        name:{type:String , required:true},
        email:{type :String , required:true , unique:true},
        type:{type :String , required:true },
        phone:{type :String , required:true, unique:true},
        gender:{type :String , required:true},
        department:{type :String , required:true},
        salary:{type :Number , required:true},
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model("staff",staffSchema);