const { response } = require("express");
const express = require("express");
const productRouter = require("./products/productRoutes")
const cartRouter = require("./carts/cartRoutes")


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

app.listen(PORT, () => {
    console.log("Server started.")
})