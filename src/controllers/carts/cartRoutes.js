const { request } = require("express")
const express = require("express")

const { getCarts,
        getCartById,
        getCartByUserId,
        getCartByUserIdWithProductInfo
        } = require("./cartControllers")

const cartRouter = express.Router()


cartRouter.get("/", async (req, res) => {
    const carts = await getCarts()
    res.json(carts)
})

cartRouter.get("/:cartId", async (req, res) => {
    const cart = await getCartById(req.params.cartId)
    if (!cart) {
        res.status(404).json( {
            data: "Cart doesn't exist"
        })
    }
    res.json(cart)
})

cartRouter.get("/user/:userId", async (req, res) => {
    let cart
    if(req.query.getProductInfo) {
        cart = await getCartByUserIdWithProductInfo(req.params.userId)
    } else {
        cart = await getCartByUserId(req.params.userId)
    }
    if(!cart) {
        res.status(404).json( {
            data: "Cart doesn't exist"
        })
    }
    res.json(cart)
}
)



module.exports = cartRouter