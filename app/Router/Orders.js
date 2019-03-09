// https://www.youtube.com/watch?v=iUqjlzTGGbU
var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");
var CheckOut = require("../models/CheckOutModal")





// ====>>>  Checkout
// ====>>>  URL :  http://localhost:8000//checkOut
router.post("/checkOut", (req, res) => {
    const checkOut = new CheckOut({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        AddressLine1: req.body.AddressLine1,
        AddressLine2: req.body.AddressLine2,
        city: req.body.city,
        zip: Number(req.body.zip),
        state: req.body.state,
        contry: req.body.contry,
    })
    checkOut.save((error, success) => {
        if (!error) {
            res.send({
                message: "successful checkout !",
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
router.get("/GetChekouts", (req, res) => {
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


const Order = router
module.exports = Order

