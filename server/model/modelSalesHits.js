const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesHits = new Schema(
    {
        img: String,
        additionalPictures: [String],
        title: String,
        price: Number,
        description: String,
        type: String,
        typeForClient: String,
        discount: {
            type: Number,
            default: 0
        },
        rate:{
            type: Object,
            default: {0:0}     
        }        
    }
)

module.exports = mongoose.model("SalesHitsItem", SalesHits);