const User = require('../models/User');

const config = require('../config');
const jwt = require('jsonwebtoken');

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
    async login(req, res){
        const { email, password } = req.body;

        //const user = await User.findOne({email: req.param.email, password: req.param.password});

        if(email === undefined || password === undefined){
            res.status(401).json({
                success: false,
                code: 'API_ERROR_01',
                message: 'E-mail and/or password inválid',
            });
        } else {
            let tokenData = {
                id: 101
            };
            let generatedToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn: '1m'});
            res.json({
                success: true,
                token: generatedToken
            });
        }

    }
}