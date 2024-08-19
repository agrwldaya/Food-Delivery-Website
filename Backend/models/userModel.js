import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cart:{type:Object,default:{}},
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",UserSchema)

export default userModel;