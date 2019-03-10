var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var CheckOut = require("../models/CheckOutModal")
mongoose.connect("mongodb+srv://test:test@cluster0-tmgwr.mongodb.net/test?retryWrites=true");



// ====>>>  Checkout
// ====>>>  URL :  http://localhost:8000//checkOut
router.post("/addOrder", (req, res) => {
    const checkOut = new CheckOut({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        zip: Number(req.body.zip),
        state: req.body.state,
        contry: req.body.contry,
    })
    checkOut.save((error, success) => {
        if (!error) {
            res.send({
                message: "Order successfuly submited !",
                data: checkOut
            })
        }
        else {
            res.send({
                message: "chekout failed !",
                data: error
            })
        }
    })
})



// ====>>>  Getting Checkouts
// ====>>>  URL :  http://localhost:8000//GetChekouts
router.get("/getOrder", (req, res) => {
    CheckOut.find().exec().then((data) => {
        res.send({
            checkouts: data
        })
    }).catch((err) => {
        res.send({
            message: "Somthing went to wrong !",
            err
        })
    })
})


const order = router
module.exports = order

