
var mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, },
    doller: { type: Number, required: true,},
    category: { type: String, required: true,}
})
module.exports = mongoose.model("products", productSchema)



