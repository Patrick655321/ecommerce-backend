const Product = require("../../models/product")
const Cart = require("../../models/cart")

async function getProducts() {
    const products = await Product.find()
    return products
}

async function getProductById(productId) {
    try {
    const product = await Product.findById(productId)
    return product
} catch(err) {
    console.log(err)
}
}

async function createProduct(product) {
    try {
    const newProduct = await Product.create(product)
    return newProduct
    } catch(err) {
        return err
    }
}

async function deleteProduct(productId) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId)
        return deletedProduct
    } catch(err) {
        return err
    }
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
}

