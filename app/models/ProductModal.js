
var mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    imageUri: { type: String, required: true,},
    name: { type: String, required: true, },
    doller: { type: Number, required: true,},
    category: { type: String, required: true,}
})
module.exports = mongoose.model("products", productSchema)



