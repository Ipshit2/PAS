import {User} from "../models/user.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


//create
const register = asyncHandler(async (req, res)=>{
    //get details
    const {username, email, password} = req.body
    try {
        if (!username|| !email || !password ) {
            return res.status(400).send({
                message: " All fields are required "
            })
        }
    
        //already exist
        const existedUser = await User.findOne({
            $or: [{username}, {email}]
        })
        if(existedUser){
            return res.status(409).send({
                message : " User already exists "
            })
        }
        //creating object
        const hashpass = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password : hashpass,
        })
        //check created successfull or not
        const createdUser = await User.findById(user._id)
        if(!createdUser){
            return res.status(500).send({
                message: "Something went wrong"
            })
        }
        else{
            return res.status(201).send({
                message: "User registered Successfully"
            })
        }
        
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})


//login
const login = asyncHandler(async (req,res)=>{
    //get details fro frontend
    const {email, password} = req.body
    try {
        if ( !email || !password ) {
            return res.status(400).send({
                message: " All fields are required "
            })
        }
        //check if such user exist (by email)
        const existedUser = await User.findOne({email})
        if(!existedUser){
            
            return res.status(404).send({
                message : " User does not exists "
            })
        }
        //compare password
        const isPasswordValid = await bcrypt.compare(password, existedUser.password)
        if (!isPasswordValid) {
            return res.status(401).send({
                message : " Invalid user credentials "
            })
        }
        
        const token = jwt.sign({ 
            id: existedUser._id }, 
            process.env.TOKEN_SECRET, {
            expiresIn: '1h',
            });
        
            // res.cookie('token', token, {
            //   httpOnly: true,
            //   secure: true,
            //   sameSite: 'Strict',
            //   maxAge: 60 * 60 * 1000,
            // })

        return res.status(200).send({
            message: "Succesfully logged in",
            token: token
        })
        

    } catch (error) {
        return res.status(404).send({
            message : " Something went wrong "
        })
        
    }
})

//get single data
const  dashboard= asyncHandler(async (req,res)=>{
    
})


//logout
const logout = asyncHandler(async (req,res)=>{
    try {
        // res.clearCookie('token')
        // return res.status(200).send({
        //     message: "Succesfully logged out"
        // })

        
    } catch (error) {
        return res.status(500).send({
            message : " Something went wrong "
        })
        
    }


})



export {register,
        login,
        logout,
        dashboard       
}