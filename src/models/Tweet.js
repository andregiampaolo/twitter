const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

modules.export = mongoose.model('Tweet', TweetSchema);