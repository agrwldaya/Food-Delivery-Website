import foodmodel from "../models/foodModel.js"

import fs from "fs"

const addFood =  async(req,res)=>{
        const image_filename = req.file.filename
        
        console.log(image_filename)
        const food  = new foodmodel({
            name:req.body.name,
            description:req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename
        })

        try {
            await food.save();

            res.json({
                success:true,
                message:"Food added successfully!",
                data:food
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                message:"error in food adding"
            })
        }
}

const food_list = async(req,res)=>{
    try {
         const food_list = await  foodmodel.find({})
                 
         res.json({
            success:true,
            message:"food items get succcessfully!",
            data:food_list
         })
    } catch (error) {
          console.log(error),
          res.json({
            success:false,
            message:"error  in geting succcessfully!",
         })
    }
}


const  removeFood = async(req,res)=>{
  try {
      const food  = await foodmodel.findById(req.body.id)
      fs.unlink(`uploads/${food.image}`,()=>{})

      await foodmodel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            message:"Item deleted successfullly!",
        })
  } catch (error) {
    console.log(error),
          res.json({
            success:false,
            message:"Error..",
         })
  }
}

export {addFood,food_list,removeFood}
