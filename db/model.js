const Sequelize = require('sequelize')

const DT = Sequelize.DataTypes

module.exports = {

    vendor: {
        name: {
            type: DT.STRING,
            allowNull: false,
            unique: true
        }
    },
    product: {

        name: {
            type: DT.STRING,
            allowNull: false
        },
        price: {
            type: DT.STRING,
            allowNull: false
        },
        quantity: {
            type: DT.STRING,
            defaultValue: 0
        }
    }
}