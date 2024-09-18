import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        city: {
            type: String,

        },
        state: {
            type: String,
            
        },
        phone:{
            type: Number,
        },
        pincode:{
            type: Number,
        },

        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        shop:{
            type:Boolean,
        },
        shelter:{
            type:Boolean,
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)