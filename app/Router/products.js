var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");
var Product = require("../models/ProductModal")




// ====>>>  Adding Products | ======= || JUST ONCE || =======
// ====>>>  URL :  http://localhost:8000/addProducts 
router.post("/addProducts", (req, res) => {
    res.send({
        Mess:"Ok"
    })
    // Product.collection.insertMany(aa, (e, s) => {
    //     res.send(e || s)
    // })
})

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