var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express()
app.set("port", process.env.PORT || 8000)
app.use(bodyParser.urlencoded({ extended: true }))




// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//     res.setHeader('Cache-Control', 'no-cache');
//     next();
// });




var account = require("./app/Router/accountes")
var product = require("./app/Router/products")
var order = require("./app/Router/Orders")
var payment = require("./app/Router/payment")
app.use(cors())
app.use(bodyParser.json({ limit: "5000kb" }))
app.use("/account", account);
app.use("/product", product);
app.use("/order", order);
app.use("/payment", payment);


app.listen(app.get("port"), (err, succ) => {
    console.log(`Server is runing on port ${app.get("port")}`)
})
