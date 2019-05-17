const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

router.get('/', async (req, res) => {
  try{
    const allPosts = await Post.find({});
    debugger
    res.json({
      status:200,
      data: allPosts
    });
  } catch(err) {
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  console.log('got in heree');
  try {
    const createdPost = await Post.create(req.body);
    console.log(createdPost);
    res.json({
      status: 200,
      data:createdPost
    })
  } catch (err) {
    res.send(err)
  }
});


router.get('/:id', async(req, res) => {
    try {
      const foundPost = await Post.findbyId(req.params.id);
      console.log(foundPost)
      res.json({
        status:200,
        data: foundPost
      });
    } catch(err) {
      res.send(err);
    }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await findbyIdAndUpdate(re.params.id, req.body, {new:true});
    res.json({
      status:200,
      data: updatedPost
    });
  } catch(err){
    res.send(err)
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const deletedPost = await Post.findbyIdAndRemove(req.params.id);
    res.json({
      status:200,
      data: deletedPost
    });
  } catch(err) {
    res.send(err)
  }
})

module.exports = router;
