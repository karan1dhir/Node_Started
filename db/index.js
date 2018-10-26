const Sequelize = require('sequelize')
const  {
    vendor,
    product
} = require('./model')
const db = new Sequelize({
    dialect: 'sqlite',
    /*
      username : ' ',
      database : ' ',
      password : ' ',
      host : 'abcd.server.com',
      port : 3000
    */
   storage: __dirname + '/store.db',
})
console.log('Hello')
const Vendor = db.define('vendor',vendor)
const Product = db.define('product',product)

Product.belongsTo(Vendor)
Vendor.hasMany(Product)

module.exports = {
    db,
    Vendor,
    Product
}