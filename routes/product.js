const express = require('express')
const router = express.Router()
const product = require('../controller/products')


router.route('/').get(product.getAllProducts)
router.route('/statics').get(product.getAllProductStatic)


module.exports = router