//This file handles all the post requests
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


//Get back all the posts
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});


//Submit new post
router.post("/", async (req,res)=>{
    // console.log(req.body); <---This is working because we have added app.use(express.json());  in the app.js
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
    
});

//Get back specific post

router.get("/:postId", async(req,res)=>{
    try {
        const post = await Post.findById(String(req.params.postId));
        res.json(post);
        console.log(post);
    } catch (err) {
        res.json({message: err});
    }
});

//Delete Post
router.delete("/:postId",async (req,res)=>{
    try{
        const post = await Post.findByIdAndDelete(String(req.params.postId));
        res.json(post);
    }catch(err)
    {
        res.json({message:err});
    }
});

//Update a Post

router.patch("/:postId",async (req,res)=>{
    try {
        const updatePost = await Post.findOneAndUpdate(String(req.params.postId),{$set:{
            title: req.body.title
        }});
        res.json(updatePost);
        console.log("Updated!");
    } catch (err) {
        res.json({message: err});
    }
});




module.exports = router;

