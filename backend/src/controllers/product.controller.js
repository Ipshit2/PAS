import { Product } from "../models/product.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"

const create= asyncHandler(async (req, res)=>{
    const {name,age,category,sex,description,price} = req.body
    
    try {
        if (!name || !age  || !category || !sex  || !description || !price ) {
            return res.status(400).send({
                message: " All fields are required "
            })
        }
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({
                message: "No token found, authorization denied",
            });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const owner = decoded.id; 

        const pet = await Product.create({
            name,
            age,
            category,
            sex,
            description,
            price,
            owner, 
        });
        
        
        const createdpet = await Product.findById(pet._id).populate('owner', 'username email');
        if(!createdpet){
            return res.status(500).send({
                message: "Something went wrong"
            })
        }
        else{
            return res.status(201).send({
                message: "Pet registered Successfully",
                data: createdpet
            })
        }
        
    } catch (error) {
        return res.status(500).send({
            message: "error  wrong"
        })
        
    }
})

const allpets = asyncHandler(async (req,res)=>{
    try {
        const allPets = await Product.find({}).populate('owner', 'username email')
        return res.status(200).send({
            message: "Pets retrieved successfully",
            data: allPets,
        });
        
    } catch (error) {
        return res.status(500).send({
            message: "Server error",
        });
        
    }
})

const ownerpet = asyncHandler(async (req,res)=>{
    const token = req.cookies.token;
    try {
        if (!token) {
            return res.status(401).send({
                message: "No token found, authorization denied",
            });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        const userId = decoded.id

        const myPets = await Product.find({ owner: userId }).populate('owner', 'username email')
        return res.status(200).send({
            message: "Pets retrieved successfully",
            data: myPets,
        });
        
    } catch (error) {
        return res.status(500).send({
            message: "Server error",
        });
        
    }

})


const deletepet= asyncHandler(async(req, res)=>{
    try {
        const pet =await Product.findByIdAndDelete(req.params.id)
        if(!pet){
            return res.status(500).send({
                message: "No such pet"
            })
        }
        else{
            return res.status(201).send({
                message: "pet is removed"
            })

        }
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong"
        })
    }
})

export {create ,
        allpets,
        ownerpet,
        deletepet     
}