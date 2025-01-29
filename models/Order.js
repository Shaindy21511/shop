import { Schema, model, Types } from "mongoose";

const minimalProduct=Schema({
    productName:{type:String,required:true},
    price:{type:Number,required:true},
})

const orderSchema = Schema({
    userId: { type: Types.ObjectId, ref: "User" },
    // orderId:{type:String,required:true},
     address:{type:String,required:true},
     arrProduct:[minimalProduct],
    orderGoOut:{type:Boolean,default:false},
    date: { type: Date, default: new Date() },
    dateComming:{ type: Date, default: new Date().setDate(new Date().getDate() + 14)}
})

export const orderModel = model("Order", orderSchema);