const express = require('express')
const {
    db
} = require('./db/index.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/vendors', require('./routes/vendors'))
app.use('/products', require('./routes/products'))

db.sync().then(() => {
        console.log('Database synced')
        app.listen(3939, () => {
            console.log('Server started at http://localhost:3939')
        })
    })
    .catch(console.error)