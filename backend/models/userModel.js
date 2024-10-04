import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name:{type:String, required:true},
    email:{type:String, requied:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}

},{minimize:false})  // if i not mention this minmize is false then this cartdata will not
 //created because i did not provided data here this cartModel is created without any data


 const userModel = mongoose.models.user || mongoose.model("user",userSchema);

 export default userModel;
 