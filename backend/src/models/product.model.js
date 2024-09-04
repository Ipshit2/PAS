import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        sex: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User" ,        
        },
        
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model("Product", productSchema)