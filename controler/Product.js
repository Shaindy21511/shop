import { productModel } from "../models/Product.js";

export const getAllproducts = async (req, res) => {
    try {
        let data = await productModel.find();
        res.json(data)
    } catch (err) {
        console.log("err");
        res.status(400).json({ title: "error cannot get all", message: err.message })
    }
}

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        // לבצע מחיקה לבדוק אם המוצר קיים
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ title: "Product not found", message: "The product does not exist." });
        }
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ title: "Error", message: err.message });
    }
};

export const updateById = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const product = await productModel.findByIdAndUpdate(id, updatedData, { new: true });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const add = async (req, res) => {
    try {
        const { productId, category, productName, description, price, image } = req.body;
        const newProduct = new productModel({
            productId,
            category,
            productName,
            description,
            price,
            image
        });
        await newProduct.save();
        res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });

    } catch (err) {
        res.status(500).json({
            message: "Error adding product",
            error: err.message
        });

    }
}

export const getByCategories = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await productModel.find({ category: category });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found in this category" });
        }

        res.status(200).json(products);

    } catch (err) {
        res.status(500).json({
            message: "Error retrieving products by category",
            error: err.message
        });

    }
}










