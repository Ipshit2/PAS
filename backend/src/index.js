import connectDB from "./db/database.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})
const Port = 8080;

connectDB()
.then(() => {
    app.listen( Port, () => {
        console.log(" Succesfully Connected at Port ",Port);
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
})
