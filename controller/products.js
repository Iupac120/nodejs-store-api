const Products =  require('../models/product')

const getAllProducts = async(req,res)=>{
//     const limit = req.query.limit;
//     const offset = req.query.offset
//    const product = Products.find({}).limit(limit).offset(offset)
const {page,limit} =  req.query
try{
    const product = await Products.find({}).limit(limit).skip((page-1)*limit)
    const count = await Products.countDocuments()
    res.status(201).json({
        data:product,
    totalPage: Math.ceil()})
}catch(error){
    console.log(error)
}
}

const getAllProductStatic = async(req,res)=>{
    try{
        const product = await Products.find({price:{$gt:30}})
        .sort('price')
        .select('name price')
     res.status(201).json({product})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}