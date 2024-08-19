import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import dbconnect from "./config/database.js"
import foodRouter from "./routes/foodRoute.js"
import userRoute from "./routes/userRoute.js"
import cartRoute from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"
 

const app = express();
const Port = process.env.PORT||4001

// middleware
app.use(express.json())
app.use(cors())
dbconnect()

// api end points
app.use('/api/food',foodRouter)
app.use('/image',express.static('uploads'))
app.use('/api/user',userRoute)
app.use('/api/cart',cartRoute)
app.use('/api/cart',orderRoute)
 
app.listen(Port,()=>{
   console.log(`App is listening on port ${Port}`)
})

app.get('/',(req,res)=>{
    res.send("hello Daya! How are you.")
})

