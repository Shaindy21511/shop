import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    productId:{type:String,required:true},
    category:[String],
    productName:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}
})

export const productModel=mongoose.model("Product",productSchema);