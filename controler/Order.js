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
        const products = await productModel.find({ userId: userId });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this user" });
        }
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({
            message: "Error retrieving products for user",
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
        const {userId,orderId,date}=req.body;
        const newOrder=new orderModel({
            userId,orderId,data
        });
        await newOrder.save();
        res.status(201).json({
            message: "Product added successfully",
            order: newProduct
        });

    }catch(err){
        res.status(500).json({
            message: "Error adding product",
            error: err.message
        });

    }

};



    
   