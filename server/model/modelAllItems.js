const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allItems = new Schema(
    {
        img: String,
        additionalPictures: [String],
        title: {
            type:String
        },
        titleLowerCase: {
            type: String,
            lowercase: true,
            
        },
        price: Number,
        description: String,
        type: String,
        typeForClient: String,
        salesHits:{
            type: Boolean,
            default: false
        },
        discount: {
            type: Number,
            default: 0
        },
        rate:{
            type: Object,
            default: {},
               
        },
        characteristics:{
            type: Object,
            default: {}

        }
      
    },
    {minimize: false}
)

allItems.methods.avarageRate = function(){
    let rate = Object.values(this.rate);
    let length = rate.length

    if(!length){
        return null;
    }else{
        rate = rate.reduce( (sum, current) => { return sum += current } , 0);
        rate = Math.round(rate/length);
        return rate;
    }

}



module.exports = mongoose.model("allItem", allItems);