const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    
        name:{
            type: String,
            required:[true,'This is required']
        },
        price:{
            type: Number,
            required:[true,'This is required'],
        },
        featured:{
            type:Boolean,
            default: false,
        },
        rating:{
            type:Number,
            default:4.5,
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        company:{
            type:String,
            enum:{
                values:['ikea','marcos','liddy','caressa'],
                message:'{VALUE} is not allowed'
            }
        }
    
    }
)

module.exports = mongoose.model('Products',productSchema)