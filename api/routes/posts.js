const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const multer = require("multer")




//IMAGE UPLOAD
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")},
        filename:(req, file, cb) => {
            cb(null, req.body.name)
        }
})

//CREATE POST
const upload = multer({storage:storage});

router.post("/", async (req,res) => {
    console.log(req.body);
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        if(savePost) {
            res.status(201).json({success: true, message: "Post Created", data: savePost})
        } else {
            res.status(500).json({success: false, message: "Failed to create post"})
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: "Something went wrong"})
    }
   
});


//UPDATE POST
router.put("/:id", async (req,res) => {
   try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                     {$set:req.body},{new: true});
                     res.status(201).json({success: true, message: "Post Updated!"})
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("You can only update your post")
        }

       
   } catch (err) {
        res.status(500).json(err)
   }
   
});

//DELETE POST
router.delete("/:id", async (req,res) => {
    try {
         const post = await Post.findById(req.params.id);
         if(post.username === req.body.username){
 
             try {
                    await post.delete();
                      res.status(201).json({success: true, message: "Post Deleted!"})
             } catch (err) {
                 res.status(500).json(err)
             }
         }else{
             res.status(401).json("You can only delete your post")
         }
 
        
    } catch (err) {
         res.status(500).json(err)
    }
    
 });

//GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err)
    }
});


//GET ALL POST
router.get("/", async (req, res) => {
        const username = req.query.user;
        const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username:username});
        }else if(catName){
            posts = await Post.find({categories:{
                $in:[catName],
            },
        })
        } else {
            posts = await Post.find();
        }
        
        res.status(200).json(posts);
        

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router