import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIP_KEY); 


const placeOrder = async (req, res) => {
    console.log(process.env.STRIP_KEY)
    const frontEnd_url = "http://localhost:5173";
    
    try {
        const { userId, items, amount, address } = req.body;
        
        // Basic validation
        if (!userId || !items || !amount || !address) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cart: {} });

        const line_items = items.map(item => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.title
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 200,  // Delivery charge in cents
            },
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${frontEnd_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontEnd_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({
            success: true,
            session_url: session.url
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const verifyOrder = async(req,res)=>{
      try {
        const {orderId,success} = req.body;

        if(success == "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({
                success:true,
                message:"paid"
            })
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success:false,
                message:"Not paid"
            })
        }
        
      } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
        
      }
}

export { placeOrder,verifyOrder};
