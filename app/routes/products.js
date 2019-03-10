var express = require("express")
var router = express.Router()
var mongoose = require("mongoose")
var Product = require("../models/ProductModal")
// mongoose.connect("mongodb://quizapp:maaz1234@ds227664.mlab.com:27664/quiz_data");
mongoose.connect("mongodb+srv://test:test@cluster0-tmgwr.mongodb.net/test?retryWrites=true");









var aa = [
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Helena",
        category: "Drasses",
        priceOne: 80,
        priceTwo: null
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Anne-Short",
        priceOne: 80,
        priceTwo: null,
        category: "Drasses",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Drasses",
    }, {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Drasses",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Drasses",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Drasses",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Helena",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Anne-Short",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    }, {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Shoes",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Helena",
        doller: "120",
        category: "Sorts",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Anne-Short",
        doller: "180",
        category: "Sorts",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Sorts",
    }, {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Sorts",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Sorts",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Sorts",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Helena",
        priceOne: 80,
        category: "Sorts",
        category: "Skrits",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Anne-Short",
        priceOne: 80,
        category: "Sorts",
        category: "Skrits",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Skrits",
    }, 
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Skrits",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Skrits",
    },
    {
        imageUri: "https://tokbox.com/blog/wp-content/uploads/2018/03/React-Native-for-OpenTok-blog-feature-image-287x287.png",
        name: "Abudia",
        category: "Drasses",
        priceOne: 80,
        category: "Skrits",
    }
]






// ====>>>  Getting Products
// ====>>>  URL :  http://localhost:8000//getProducts:catogory (Shoes, Drasses, etc) 
router.get("/getProducts:catogory", (req, res) => {
    const id = req.params.catogory.slice(1)
    Product.find({ category: id }).exec().then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})


const product = router;
module.exports = product