const express = require('express');
const router = express.Router();
const request = require('request')

router.get('/', async (req, res) => {
  console.log(req)
  try{
    const options = {
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      qs: { term: 'dispensary', location: req.query.location },
      headers:
       {
         Host: 'api.yelp.com',
         Accept: '*/*',
         Authorization: 'Bearer 7iQGBqMl4rWytPnI0nNl-EkI7prpXiwUhNZSSdRZKFiRyLQ2eTf_evcKr36HEUDuuXa_96xFILFL_6ivza5Pl10SN0UAt-TFPsWFnhXhiv2FIaQjzCNZYVr44QjeXHYx'
       }
      };

    request(options, function (error, response, body) {
      if (error) {
        res.send(error)
      }
      let resBody = JSON.parse(response.body)
      res.send(JSON.stringify(resBody));
    });
  } catch(err) {
    res.send(err)
  }
})


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

module.exports = router;
