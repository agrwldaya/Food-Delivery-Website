import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
 const  dbconnect = async()=>{
    
      await mongoose.connect(process.env.DBURL)
      .then(()=>{
              console.log("Database connected successfully!")
      })
      .catch((err)=>{
          console.log("Error in database connection!")
          console.error(err)
          process.exit(1)
      })
}

export default dbconnect;

