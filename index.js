var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express()
app.set("port", process.env.PORT || 8000)
app.use(bodyParser.urlencoded({ extended: true }))

var account = require("./app/routes/accounts")
var product = require("./app/routes/products")
var order = require("./app/routes/orders")
var payment = require("./app/routes/payment")

app.use(cors())
app.use(bodyParser.json({ limit: "5000kb" }))
app.use("/account", account);
app.use("/product", product);
app.use("/order", order);
app.use("/payment", payment);

app.listen(app.get("port"))
