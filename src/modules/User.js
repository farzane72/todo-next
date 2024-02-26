import { Schema,model,models } from "mongoose";

const userSchema=Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:String,
    lastName:String,
    todoes:[{title:String,status:String}],
    createAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    }

})

const User=models.User || model("User",userSchema)

export default User