import { Product } from "../models/product.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const create= asyncHandler(async (req, res)=>{
    const {name,age,category,sex,description,price} = req.body
    
    try {
        if (!name || !age  || !category || !sex  || !description || !price ) {
            return res.status(400).send({
                message: " All fields are required "
            })
        }
        const pet = await Product.create({
            name,
            age,
            category,
            sex,
            description,
            price

        })
        
        
        const createdpet = await Product.findById(pet._id)
        if(!createdpet){
            return res.status(500).send({
                message: "Something went wrong"
            })
        }
        else{
            return res.status(201).send({
                message: "Pet registered Successfully"
            })
        }
        
    } catch (error) {
        return res.status(500).send({
            message: "error  wrong"
        })
        
    }
})

const readall= asyncHandler(async(req, res)=>{
   
    let category = req.query.category;
    let pet 
    try {
        if (category) 
            pet = await Product.find({ category: category });
        else 
            pet = await Product.find({}).populate("owner",["username"]);
        return res.status(201).send({
            data: pet
        })
    
    } catch (error) {
        return res.status(500).send({
            message: "error  wrong"
        })
        
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
        readall,
        deletepet     
}