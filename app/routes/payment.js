var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var Payment = require("../models/PaymentModal")
// mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");
mongoose.connect("mongodb+srv://test:test@cluster0-tmgwr.mongodb.net/test?retryWrites=true");




// ====>>>  Save Payment
// ====>>>  URL :  http://localhost:8000/payment
router.post("/savepayment", (req, res) => {
    const payment = new Payment({
        creditCardNumber: req.body.creditCardNumber,
        expire: req.body.expire,
        CVVCode: req.body.CVVCode,
    })
    payment.save((error, success) => {
        if (error) {
            res.send({
                message: "Something went wrong !",
                error
            })
        }
        else {
            res.send({
                message: "Peyment successful !",
                success
            })
        }
    })
})


// ====>>>  Getting Checkouts
// ====>>>  URL :  http://localhost:8000//GetChekouts
router.get("/getPayment", (req, res) => {
    Payment.find().exec().then((data) => {
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



const peymentrout = router
module.exports = peymentrout