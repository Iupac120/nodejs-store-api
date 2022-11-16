

require('dotenv').config()
const connectDb = require('./db/connectDb')
const Product = require('./models/product')
const jsonProduct = require('./product.json')

console.log(jsonProduct)
const start =async(req,res)=>{
    try{
        await connectDb(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log('successful')
        process.exit(0)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
start()