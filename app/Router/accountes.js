// https://www.youtube.com/watch?v=iUqjlzTGGbU
var express = require("express")
var account = express.Router()
var mongoose = require("mongoose")
var bcrypt = require("bcrypt");
mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");
var User = require("../models/userModel")






// ====>>>  Sign Up Route 
// ====>>>  URL http://localhost:8000/SignUp
account.post("/signup", (req, res) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                })
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            username: req.body.username,
                            email: req.body.email,
                            password: hash
                        })
                        user.save().then((success) => {
                            res.status(201).json({
                                message: "User Created"
                            })
                        }).catch((err) => {
                            res.status(500).json({
                                error: "err"
                            })
                        })
                    }
                })
            }
        })
})















// ====>>>  Sign In Route
// ====>>>  URL http://localhost:8000/SignIn
account.post("/signin", (req, res) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user < 1) {
                res.status(401).json({
                    message: "Auth field"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, async (err, result) => {
                if (err) {
                    await res.status(401).json({
                        userId: "Auth field"
                    })
                }
                else if (result) {
                    await res.status(200).json({
                        message: "Login Successful",
                        user: user[0]
                    })
                }
                else {
                    await res.status(401).json({
                        userId: "Invalid email or password !"
                    })
                }
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = account











// // ====>>>  Adding Products | ======= || JUST ONCE || =======
// // ====>>>  URL :  http://localhost:8000/addProducts 
// router.post("/addProducts", (req, res) => {
//     // Product.collection.insertMany(aa, (e, s) => {
//     //     res.send(e || s)
//     // })
// })










// // ====>>>  Getting Products
// // ====>>>  URL :  http://localhost:8000//getProducts:catogory (Shoes, Drasses, etc) 
// router.get("/getProducts:catogory", (req, res) => {
//     const id = req.params.catogory.slice(1)
//     Product.find({ category: id }).exec().then((data) => {
//         res.send(data)
//     }).catch((error) => {
//         res.send(error)
//     })
// })











// // ====>>>  Checkout
// // ====>>>  URL :  http://localhost:8000//checkOut
// router.post("/checkOut", (req, res) => {
//     const checkOut = new CheckOut({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         AddressLine1: req.body.AddressLine1,
//         AddressLine2: req.body.AddressLine2,
//         city: req.body.city,
//         zip: Number(req.body.zip),
//         state: req.body.state,
//         contry: req.body.contry,
//     })
//     checkOut.save((error, success) => {
//         if (!error) {
//             res.send({
//                 message: "successful checkout !",
//                 data: checkOut
//             })
//         }
//         else {
//             res.send({
//                 message: "chekout failed !",
//                 data: error
//             })
//         }
//     })
// })



// // ====>>>  Getting Checkouts
// // ====>>>  URL :  http://localhost:8000//GetChekouts
// router.get("/GetChekouts", (req, res) => {
//     CheckOut.find().exec().then((data) => {
//         res.send({
//             checkouts: data
//         })
//     }).catch((err) => {
//         res.send({
//             message: "Somthing went to wrong !",
//             err
//         })
//     })
// })






// // ====>>>  Save Payment
// // ====>>>  URL :  http://localhost:8000/payment
// router.post("/payment", (req, res) => {
//     const payment = new Payment({
//         creditCardNumber: req.body.creditCardNumber,
//         expire: req.body.expire,
//         CVVCode: req.body.CVVCode,
//     })
//     payment.save((error, success) => {
//         if (error) {
//             res.send({
//                 message: "Something went wrong !",
//                 error
//             })
//         }
//         else {
//             res.send({
//                 message: "Peyment successful !",
//                 success
//             })
//         }
//     })
// })





// // ====>>>  Getting Checkouts
// // ====>>>  URL :  http://localhost:8000//GetChekouts
// router.get("/getPayment", (req, res) => {
//     Payment.find().exec().then((data) => {
//         res.send({
//             checkouts: data
//         })
//     }).catch((err) => {
//         res.send({
//             message: "Somthing went to wrong !",
//             err
//         })
//     })
// })



