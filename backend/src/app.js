import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
  };

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//route
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.route.js"
//route declaration
app.use("/user", userRouter)
app.use("/pet", productRouter)


export {app}