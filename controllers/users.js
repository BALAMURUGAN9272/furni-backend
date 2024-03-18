const usersrouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/users');

usersrouter.get('/',async(req,res) => {
   const users = await User.find();
    res.json(users)
})

usersrouter.post('/', async(req,res) => {
    const {username,email,password} = req.body
    const user = await User.findOne({email});
    if(user){
        return res.status(409).json({error:'user already exist'})
    }
    const passwordhash = await bcrypt.hash(password, 10);
    const users = new User({
        username,
        email,
        passwordhash
    }) 
    const saveduser = await users.save()
    res.json(saveduser)
})

module.exports = usersrouter