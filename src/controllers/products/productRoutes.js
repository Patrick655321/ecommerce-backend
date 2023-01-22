const { request } = require("express")
const express = require("express")
const { auth } = require("../../middlewares/auth")
const { admin } = require("../../middlewares/admin")
const { getProducts, getProductById, createProduct, deleteProduct } = require("./productControllers")

const productRouter = express.Router()


productRouter.get("/", async (req, res) => {
    const products = await getProducts()
    res.json(products)
})

productRouter.get("/", async (req, res) => {
    const products = await getProducts()
    res.json(products)
})

productRouter.get("/:productId", async (req, res) => {
    const product = await getProductById(req.params.productId)
    if (!product) {
        res.status(404).json( {
            data: "Product doesn't exist"
        })
    }
    res.json(product)
})

productRouter.post("/", auth, async (req, res) => {
    console.log(req.userId)
    const product = await createProduct({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })
    res.json(product)
})

productRouter.delete("/:productId", auth, admin, async (req, res) => {
    const product = await deleteProduct(req.params.productId)
    res.json(product)
})

module.exports = productRouter