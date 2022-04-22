const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: Number,
    hasStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [String],
        enum:["spirits","drink","italian","cocktail","best-sellers"]
    },
    imageFile:{
        type: String,
        default: "empty-bottle.jpeg" ,
    },
    stores: {
        type: [String],
        enum: ["online","germany","colombia"]
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;