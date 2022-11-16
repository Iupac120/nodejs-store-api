const mongoose = require('mongoose')
const connectDb = (url)=>{
   return mongoose.connect(url,{
      useNewUrlParser: true,
      autoIndex:false,
      maxPoolSize:10,
      serverSelectionTimeoutMS:5000,
      socketTimeoutMS:45000,
      family:4
   })
}

module.exports = connectDb