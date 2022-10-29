const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


//REGISTER
router.post("/register", async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json({success: true, message: "User Created Successfully"});
    }catch(err){
        res.status(500).json({success: false, message: "User not found"});
    }
})
//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        console.log(user)
        !user && res.status(400).json({success: false, message: "Wrong username or password"})
   
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json({success: false, message: "Wrong username or password"})

        const { password, ...others } = user._doc
        res.status(200).json({success: true, message: "Login Successful"})
    }catch(err){

    }
})

module.exports = router