const User = require('../models/User');

module.exports = {
    async list(req, res){
        const users = await User.find({}).sort('-createdAt');
        return res.json(users);
    },
    async signUp(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    },
    async unlock(req,res){
        const user = await User.findById(req.param.id);
        user.set({blocked: 0});
        await user.save();
        return res.json(user);
    },
    async loginIn(req, res){
        const user = await User.findOne({email: req.param.email, password: req.param.password});
        return (user) ? true : false;
    }
}