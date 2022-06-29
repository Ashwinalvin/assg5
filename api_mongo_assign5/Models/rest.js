const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const locationschema = new Schema(
    {
        id:{
         type:Number,
         required:true
        },
        name:{
        type:String,
        required:true
        },
        meal_type:{
        type:Number,
        required:true
        }


   }

);
    
   
module.exports = mongoose.model('rest',locationschema,'orders')