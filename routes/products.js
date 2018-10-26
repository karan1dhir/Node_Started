const {
    Router
} = require('express')
const {
    Op
} = require('sequelize')

const {
    Product,
    Vendor
} = require('../db/index')
const route = Router()


route.get('/', async (req, res) => {

    let whereClause = []
    for (let key of Object.keys(req.query)) {

        switch (key) {
            case 'minQty':
                whereClause.push({
                    quantity: {
                        [Op.gt]: req.query.minQty
                    }
                })
                break;

            case 'maxQty':
                whereClause.push({
                    quantity: {
                        [Op.lt]: req.query.maxQty
                    }
                })
                break;
        }
    }
    const products = await Product.findAll({
        include: [Vendor],
        where: {
            [Op.and]: whereClause
        }
    })
    res.status(200).json(products)
})


route.post('/', async (req, res) => {
    if (req.body.vendor) {
        const vendor = await Vendor.findOne({
            where: {
                name: req.body.vendor
            }
        })
        console.log("debugger done");
        if (!vendor) {
            return res.status(400).json({
                message: 'vendor name not found'
            })
        }

        const newProduct = await Product.create({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            vendorId: vendor.id
        })

        res.status(201).json({
            message: 'Product added',
            id: newProduct.id
        })
    }
})

module.exports = route;