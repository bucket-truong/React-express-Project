const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    name: {type:String, required: true},
    post: {type:String, required:true},
    rating:{type:Number, required:true},
    yelpID: {type: String, required: true}
})

const Posts = mongoose.model('Post', postsSchema)

module.exports = Posts
