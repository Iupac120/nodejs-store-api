require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./db/connectDb')
const productRoute = require('./routes/product')
const notFound = require('./middleWare/notFound')
const errorHandler = require('./middleWare/errorHandler')
app.use(express.json())
const PORT = process.env.PORT || 3000

// //app.get('/',(req,res)=>{
//     res.send('<h1>store api</h1><a href="/api/v1/product">products route</a>')
// })

app.use('/api/v1/product',productRoute)

app.use(errorHandler)
app.use(notFound)

const start=async()=>{
    await connectDb(process.env.MONGO_URI)
    app.listen(PORT,()=>{
        console.log(`port listens at port ${PORT}`)
    })
}
start()
