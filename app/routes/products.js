var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var Product = require("../models/ProductModal")
mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");


// ====>>>  Getting Products
// ====>>>  URL :  http://localhost:8000//getProducts:catogory (Shoes, Drasses, etc) 
router.get("/getProducts:catogory", (req, res) => {
    const id = req.params.catogory.slice(1)
    Product.find({ category: id }).exec().then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})


const product = router;
module.exports = product