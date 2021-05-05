const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const data = []

router.get('/', (req,res,next) => {
    res.render('index', { products: data, title: "Shopping List" })
})

router.post('/add-product', (req, res) => {
  data.push({
    id: Math.random(),
    product: req.body.product
  })

  fs.writeFile(path.join(__dirname, '..', 'products.json'), JSON.stringify(data, null, 2), () => {
    res.status(302).redirect('/')
  })
})

module.exports = router