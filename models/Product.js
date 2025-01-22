import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    productId:{type:String,required:true},
    category:{type:String,required:true,enum:['socks','dresses','skirts','Shirts']},
    productName:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true}
})

export const productModel=mongoose.model("Product",productSchema);