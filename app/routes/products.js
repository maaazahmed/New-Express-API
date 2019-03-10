var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var Product = require("../models/ProductModal")
mongoose.connect("mongodb+srv://test:test@cluster0-tmgwr.mongodb.net/test?retryWrites=true");





// ====>>>  Getting Products
// ====>>>  URL :  http://localhost:8000//getProducts:catogory (Shoes, Drasses, etc) 
router.get("/getProducts", (req, res) => {
    Product.find({ category: req.query.category }).exec().then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})


const product = router;
module.exports = product