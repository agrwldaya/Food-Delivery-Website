import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
 
 
import validator from "validator"


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECERET)  
   }

   const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email!",
            });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not registered!"
            });
        }

        const decrypt = await bcrypt.compare(password, user.password);
        if (!decrypt) {
            return res.status(401).json({
                success: false,
                message: "Password is not correct!"
            });
        }
        
        const token = createToken(user._id);

        res.status(200).json({
            success: true,
            message:"User login successfully!",
            token: token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
// registered user


const userReg = async(req,res)=>{
        const {name,email,password} = req.body;
        try {
            const isexist = await userModel.findOne({email})

            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    success: false,
                    message: "Please enter a valid email!",
                });
            }

        if(password.length <8){
            return res.json({
                success:false,
                message:"Please enter a strong password!"
             })
        }
        if(isexist){
             return res.json({
                success:false,
                message:"User already registered!"
             })
        }
            
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id);

        res.json({
            success:true,
            token,
            message:"User registered successfullY!"
        })
        } catch (error) {
          console.log(error);
          res.json ({
            success:false,
            message:"error"
          })
        }
}

export {userLogin,userReg};