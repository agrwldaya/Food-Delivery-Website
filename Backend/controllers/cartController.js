import userModel from "../models/userModel.js";


// additem
const addItem = async(req,res)=>{
   try {
    const userData = await userModel.findOne({_id:req.body.userId});
    const cartData = await userData.cart;
      
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1;
    }else{
        cartData[req.body.itemId]+=1;
    }

    await userModel.findByIdAndUpdate(req.body.userId,{cart:cartData})
        res.json({
            success:true,
            message:"Food added into cart!"
        })
    
   } catch (error) {
         console.log(error);
         res.json({
            success:false,
            message:"Error"
         })
   }
}

// removeItem
const removeItem = async(req,res)=>{
    try {
        const userData = await userModel.findOne({_id:req.body.userId});
        const cartData = await userData.cart;
           
        if(!cartData[req.body.itemId]){
            return res.json({
                success:false,
                message:"Cart is empty!"
        })
        }else{
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart:cartData})
            res.json({
                success:true,
                message:"Food removed into cart"
            })
        
       } catch (error) {
             console.log(error);
             res.json({
                success:false,
                message:"error"
             })
       }
}

// remove whole item 
const deleteItem = async(req,res)=>{
    try {
        const userData =  await userModel.findOne({_id:req.body.userId});
        const cartData = await userData.cart;
         
        cartData[req.body.itemId] = 0;
        await userModel.findByIdAndUpdate(req.body.userId,{cart:cartData})
        res.json({
            success:true,
            message:"Deleted!"
        })
    } catch (error) {
        console.log(error);
        res.json({
           success:false,
           message:"error"
        })
    }
}

// getItem
const getItem = async(req,res)=>{
        try {
            const userData =  await userModel.findOne({_id:req.body.userId});
            const cartData = await userData.cart;

            res.json({
                success:true,
                cartData
            })

        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                message:"error"
            })
        }
}

export {addItem,removeItem,getItem,deleteItem};