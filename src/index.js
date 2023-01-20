const { response } = require("express");
const express = require("express");
const productRouter = require("./controllers/products/productRoutes")
const cartRouter = require("./controllers/carts/cartRoutes")
const userRouter = require("./controllers/users/userRoutes")
const mongoose = require("mongoose")

const { getProducts, getProductById, createProduct } = require("./controllers/products/productControllers")


const app = express();
const PORT = 5000

app.get("/", (req, res) => {
    res.json({
        data: "Data sent"

    })
})

app.use(express.json());
app.use("/products", productRouter)
app.use("/cart", cartRouter)
app.use("/user", userRouter)

app.listen(PORT, async () => {
    console.log("Server started.")
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", () => {
        console.log("Database Connected!")
    })
    console.log('bananas')
})