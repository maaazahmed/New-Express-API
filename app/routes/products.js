var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var Product = require("../models/ProductModal")
mongoose.connect("mongodb+srv://test:test@cluster0-tmgwr.mongodb.net/test?retryWrites=true");



// ====>>>  Getting Products 
// ====>>>  URL :  http://localhost:8000/product/getProducts?category=Shorts (Shoes, Drasses, etc) 
router.get("/getProducts", (req, res) => {
    Product.find({ category: req.query.category }).exec().then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})


// ====>>>  Getting Products 
// ====>>>  URL :  http://localhost:8000/product/updateProduct
router.post("/updateProduct", (req, res) => {
    Product.updateOne({ _id: req.body._id }, req.body, (error, success) => {
        if (error) {
            res.send({
                message: "Update fail !",
                error
            })
        }
        else {
            res.send({
                message: "Successfuly updated !",
                success
            })
        }
    })
})


// ====>>>  Getting Products 
// ====>>>  URL :  http://localhost:8000/product/deleteProduct
router.post("/deleteProduct", (req, res) => {
    Product.deleteOne({ _id: req.body._id }, (error, success) => {
        if (error) {
            res.send({
                message: "Delete fail !",
                error
            })
        }
        else {
            res.send({
                message: "Successfuly deleted !",
                success
            })
        }
    })
})


const product = router;
module.exports = product