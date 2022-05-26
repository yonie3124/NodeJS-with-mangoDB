const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    title :{
        type: String,
        required: true,
        minLength: 25
    },
    article :{
        type: String,
        required: true,
        minLength: 100
    },
},{timestamp:true})

const Article = mongoose.model('Demo Challenge for Back End Project', articleSchema)


module.exports = {
    Article
}
