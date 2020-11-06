const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', async (req, res)=>{

    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        res.send('Cannot get all users')
    }

})

router.post('/create', async (req, res)=>{

    const user = new User({

        name: req.body.name,
        
        lastname: req.body.lastname,

        email: req.body.email,

        password: req.body.password

    })

    try {
        
        const savedUser = await user.save()
        res.json(savedUser)

    } catch (e) {
        res.json({message:e})
    }

})

router.patch('/:userId', async(req, res)=>{

    try {
    
        const user = await User.updateOne(
            {_id: req.params.userId},
            {$set: {email: req.body.email}}
            )
            res.json({message: 'User has been updated!'});
        console.log(user)
    } catch (e) {
        res.json({message:e});
    }

})

router.get('/:userId', async (req, res)=>{

    try {
        
        const user = await User.findOne({_id : req.params.userId})
        
        res.json(user)

    } catch (e) {
        res.json({message:e})
    }

})

router.get('/getByName/:name', async (req, res)=>{

    try {
        
        const user = await User.findOne({name : req.params.name})
        
        res.json(user)

    } catch (e) {
        res.json({message:e})
    }

})

router.delete('/:userId', async (req, res)=>{

    try {
    
        const removedUser = await User.remove({_id : req.params.userId})

        res.json({message:"User deleted!"})

    } catch (e) {
        res.json({message:e})
    }

})

module.exports = router