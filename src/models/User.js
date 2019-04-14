const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    cpf:{
        type: String,
        unique: true,
    },
    name: String,
    email: String,
    password: String,
    blocked: {
        type: Boolean,
        default: 1,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model('User', UserSchema);