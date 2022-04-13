const router = require('express').Router();
const User = require('../model/user');
const {verifyToken, verifyTokenAdmin} = require('../middleware/auth.verify');

//get all users
router.get('/',verifyToken,async(req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete user
router.delete('/:id',verifyTokenAdmin, async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json("Delete successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;