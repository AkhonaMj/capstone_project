import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"
import itemRouter from "./routes/itemRoutes.js"
import orderRouter from "./routes/orderRoutes.js"


let port = process.env.PORT || 2001
const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  })
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use("/users",userRouter)
app.use("/items",itemRouter)
app.use("/orders",orderRouter)


app.listen(port, ()=>{
    console.log("http://localhost:"+port);
    
})