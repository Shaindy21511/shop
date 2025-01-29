import {orderModel} from "../models/Order.js";
import { productModel } from "../models/Product.js";


export const getAllOrder=async(req,res)=>{
    try{
        let data =await orderModel.find();
        res.json(data);
    }catch(err){
        console.log("err");
        res.status(400).json({ title: "error cannot get all", message: err.message })
    }

};
export const getOrderByUserId=async(req,res)=>{
    try{
        const { userId } = req.params; 
        const orders = await orderModel.find({ userId: userId });

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" });
        }
        res.status(200).json(orders);

    }catch(err){
        res.status(500).json({
            message: "Error retrieving orders for user",
            error: err.message
        });

    }
};
export const getOrderById=async(req,res)=>{
    const {orderId}=req.params;
    try{
        let data=await orderModel.findById(orderId);
        if (!data)
            return res.status(404).json({ title: "error cannot get by id", message: "not valid  id parameter found" })
        res.json(data);
    }catch(err){
        console.log("err");
        res.status(400).json({ title: "error cannot get by id", message: err.message });

    }
};
export const addOrder=async(req,res)=>{
    try{
        const {userId,address,arrProduct}=req.body;
        const newOrder=new orderModel({userId,address,arrProduct});
        await newOrder.save();
        res.status(201).json({
            message: "order added successfully",
            order: newOrder
        });

    }catch(err){
        res.status(500).json({
            message: "Error adding product",
            error: err.message
        });

    }

};
export const updateOrder=async(req,res)=>{
    const { orderId } = req.params;
    const update = req.body;
    try {
        const order = await orderModel.findByIdAndUpdate(orderId, update);

        if (!order) {
            return res.status(404).json({ message: "order not found" });
        }

        res.status(200).json(order);

    }catch(err){
        res.status(500).json({
            message: "Error update order",
            error: err.message
        })
    }
    };

    export const deleteOrder=async(req,res)=>{
        try{
            const { orderId } = req.params;

            // לבצע מחיקה לבדוק אם המוצר קיים
            const order = await orderModel.findByIdAndDelete(orderId);
            if (!order||order.orderGoOut==true) {
                return res.status(404).json({ title: "order not found or ordor go out", message: "The order does not exist. or the order sending" });
            }
            res.status(200).json(order);

        }catch(err){
            res.status(500).json({
                message: "Error delete order",
                error: err.message
        })
    }
}