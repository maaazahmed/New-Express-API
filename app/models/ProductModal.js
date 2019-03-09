
var mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, },
    doller: { type: Number, required: true,},
    category: { type: String, required: true,}
})
module.exports = mongoose.model("products", productSchema)





// var aa = [
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Helena",
//         category: "Drasses",
//         priceOne: 80,
//         priceTwo: null
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Anne-Short",
//         priceOne: 80,
//         priceTwo: null,
//         category: "Drasses",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Drasses",
//     }, {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Drasses",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Drasses",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Drasses",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Helena",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Anne-Short",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     }, {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Shoes",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Helena",
//         doller: "120",
//         category: "Sorts",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Anne-Short",
//         doller: "180",
//         category: "Sorts",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Sorts",
//     }, {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Sorts",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Sorts",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Sorts",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Helena",
//         priceOne: 80,
//         category: "Sorts",
//         category: "Skrits",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Anne-Short",
//         priceOne: 80,
//         category: "Sorts",
//         category: "Skrits",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Skrits",
//     }, 
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Skrits",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Skrits",
//     },
//     {
//         imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
//         name: "Abudia",
//         category: "Drasses",
//         priceOne: 80,
//         category: "Skrits",
//     }
// ]