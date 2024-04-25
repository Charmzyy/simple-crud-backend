const getProduct = require("./product/getProduct");
const getProducts = require("./product/getProducts");
const updateProduct = require("./product/updateProduct");
const createProduct = require("./product/createProduct");
const deleteProduct = require("./product/deleteProduct");


const login = require('./auth/login')
const register =require('./auth/register')


module.exports = {
    product: {
        getProduct,
        getProducts,
        updateProduct,
        createProduct,
        deleteProduct
    },
    auth : {
        login,
        register
    }
}