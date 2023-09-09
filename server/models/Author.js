const mongoose = require('mongoose');

const AuthorSchema = new  mongoose.Schema({
    name:{
        type: String,
        required:false,
    },
    surname: {
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    
})

module.exports = mongoose.model('Author', AuthorSchema)