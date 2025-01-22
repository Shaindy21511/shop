import { Schema, model, Types } from "mongoose";


const orderSchema = Schema({
    userId: { type: Types.ObjectId, ref: "User" },
    orderId:{type:String,required:true},
    // address:{type:String,required:true},
    // arrProduct:{type:String,required:true},
    date: { type: Date, default: new Date() }
})

export const orderModel = model("Order", orderSchema);