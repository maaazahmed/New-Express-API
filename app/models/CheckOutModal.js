var mongoose = require("mongoose");
const checkoutSchema = mongoose.Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    AddressLine1: { type: String, required: true, },
    AddressLine2: { type: String, required: true, },
    city: { type: String, required: true, },
    zip: { type: Number, required: true, },
    state: { type: String, required: true, },
    contry: { type: String, required: true, },
})
module.exports = mongoose.model("Checkout", checkoutSchema)

