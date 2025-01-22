import express from "express";
import cors from "cors";
import { connectToDB } from "./config/DB.js";
import Order from "./router/Order.js";
import Product from "./router/Product.js";
import User from "./router/User.js";
import {config} from "dotenv"

const app=express();
app.use(cors());
app.use(express.json())
config()//גורם לו להיות מסוגל להכיר את משתני הסביבה מenv
connectToDB();

app.use("/api/order",Order);
app.use("/api/product",Product);
app.use("/api/user",User);


app.listen(8080, "localhost", () => {
    console.log("app is runnong on port 8080");
})




