import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" 
import userRouter from "./routes/userRoutes.js"
import itemRouter from "./routes/itemRoutes.js"
import orderRouter from "./routes/orderRoutes.js"


let port = process.env.PORT || 2001
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors({
  origin: "http://localhost:8080",
  credentials:true
}))
app.use(cookieParser()) 
app.use("/users",userRouter)
app.use("/items",itemRouter)
app.use("/orders",orderRouter)


app.listen(port, ()=>{
    console.log("http://localhost:"+port);
    
})