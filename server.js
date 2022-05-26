const express =require('express')
const router = require('./config/router')
const app = express()
app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
require('./config/mongoose')
app.use(router)

app.listen(4000, () => {
    console.log('server running on port 4000')
})