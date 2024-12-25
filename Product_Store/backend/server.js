// const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());            // this is a middleware that allows us to accept json data in the req.body

// app.get("/products", (req, res) => {
//    res.send("Server is ready!");
// });

app.get("/api/products", async (req, res) => {
   try {
       const products = await Product.find({});         //this will get all the products
       res.status(200).json({ success: true, data: products });
   } catch (error) {
       res.status(500).json({ success: false, error: "Server Error" });
   }
});

app.post("/api/products", async (req, res) => {
    const product = req.body;       // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all the fields." });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    // console.log("id: ", id);

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        console.log("Error in deleting product: ", error.message);
        res.status(404).json({ success: false, message: "Product not found." });
    }
});

// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});